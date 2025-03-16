"use client";

import { LoaderButton } from "@/components/loader-button";
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
import { CheckIcon, Terminal } from "lucide-react";
import { btnIconStyles } from "@/styles/icons";
import { Textarea } from "@/components/ui/textarea";
import { useServerAction } from "zsa-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToggleContext } from "@/components/interactive-overlay";
import { updateReplyAction } from "./actions";
import { Reply } from "@/db/schema";
import { useScopedI18n } from "@/locales/client";

const createReplySchema = z.object({
  message: z.string().min(1),
});

export function EditReplyForm({ reply }: { reply: Reply }) {
  const { setIsOpen: setIsOverlayOpen } = useContext(ToggleContext);
  const { toast } = useToast();
  const t = useScopedI18n("group.posts.reply");
  const tCommon = useScopedI18n("common");

  const { execute, error, isPending } = useServerAction(updateReplyAction, {
    onSuccess() {
      toast({
        title: tCommon("success"),
        description: t("successMessage"),
      });
      setIsOverlayOpen(false);
      form.reset();
    },
    onError() {
      toast({
        title: tCommon("error"),
        variant: "destructive",
        description: t("errorMessage"),
      });
    },
  });

  const form = useForm<z.infer<typeof createReplySchema>>({
    resolver: zodResolver(createReplySchema),
    defaultValues: {
      message: reply.message,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof createReplySchema>> = (
    values
  ) => {
    execute({
      replyId: reply.id,
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
          name="message"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("title")}</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
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
          <CheckIcon className={btnIconStyles} /> {t("updateReply")}
        </LoaderButton>
      </form>
    </Form>
  );
}
