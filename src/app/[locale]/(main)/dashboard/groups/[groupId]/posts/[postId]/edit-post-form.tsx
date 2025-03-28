"use client";

import { LoaderButton } from "@/components/loader-button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useContext } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { CalendarDays, CheckIcon, SaveIcon, Terminal } from "lucide-react";
import { btnIconStyles } from "@/styles/icons";
import { Textarea } from "@/components/ui/textarea";
import { GroupId, Post } from "@/db/schema";
import { useServerAction } from "zsa-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToggleContext } from "@/components/interactive-overlay";
import { updatePostAction } from "./actions";
import { useScopedI18n } from "@/locales/client";

const updatePostSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(1),
});

export function EditPostForm({ post }: { post: Post }) {
  const { setIsOpen: setIsOverlayOpen } = useContext(ToggleContext);
  const { toast } = useToast();
  const t = useScopedI18n("group.posts.form");
  const tCommon = useScopedI18n("common");

  const { execute, error, isPending } = useServerAction(updatePostAction, {
    onSuccess() {
      toast({
        title: tCommon("success"),
        description: t("updateSuccessMessage"),
      });
      setIsOverlayOpen(false);
    },
    onError() {
      toast({
        title: tCommon("error"),
        variant: "destructive",
        description: t("updateErrorMessage"),
      });
    },
  });

  const form = useForm<z.infer<typeof updatePostSchema>>({
    resolver: zodResolver(updatePostSchema),
    defaultValues: {
      title: post.title,
      message: post.message,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof updatePostSchema>> = (
    values,
    event
  ) => {
    execute({
      postId: post.id,
      title: values.title,
      message: values.message,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1 px-2"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("postTitle")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("message")}</FormLabel>
              <FormControl>
                <Textarea rows={7} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>{t("errorUpdateTitle")}</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}

        <LoaderButton isLoading={isPending} className="w-fit ml-auto">
          <CheckIcon className={btnIconStyles} /> {t("updatePost")}
        </LoaderButton>
      </form>
    </Form>
  );
}
