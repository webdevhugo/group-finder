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
import { CalendarDays, Terminal } from "lucide-react";
import { btnIconStyles } from "@/styles/icons";
import { Textarea } from "@/components/ui/textarea";
import { createPostAction } from "./actions";
import { GroupId } from "@/db/schema";
import { useServerAction } from "zsa-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToggleContext } from "@/components/interactive-overlay";
import { useScopedI18n } from "@/locales/client";

const createEventSchema = z.object({
  title: z.string().min(1),
  message: z.string().min(1),
});

export function CreateEventForm({ groupId }: { groupId: GroupId }) {
  const { setIsOpen: setIsOverlayOpen } = useContext(ToggleContext);
  const { toast } = useToast();
  const t = useScopedI18n("group.posts.form");
  const tCommon = useScopedI18n("common");

  const { execute, error, isPending } = useServerAction(createPostAction, {
    onSuccess() {
      toast({
        title: tCommon("success"),
        description: t("successMessage"),
      });
      setIsOverlayOpen(false);
    },
    onError() {
      toast({
        title: tCommon("error"),
        variant: "destructive",
        description: t("errorMessage"),
      });
    },
  });

  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      title: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof createEventSchema>> = (
    values,
    event
  ) => {
    execute({
      groupId,
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
            <AlertTitle>{t("errorTitle")}</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}

        <LoaderButton isLoading={isPending}>
          <CalendarDays className={btnIconStyles} /> {t("createPost")}
        </LoaderButton>
      </form>
    </Form>
  );
}
