"use client";

import { sendInviteAction } from "@/app/[locale]/(main)/dashboard/groups/[groupId]/actions";
import { LoaderButton } from "@/components/loader-button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useServerAction } from "zsa-react";
import { useScopedI18n } from "@/locales/client";

export const schema = z.object({
  email: z.string().email(),
});

export function InviteButton() {
  const { toast } = useToast();
  const { groupId } = useParams<{ groupId: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const t = useScopedI18n("group.members.invite");
  const tCommon = useScopedI18n("common");
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  const { execute: sendInvite, isPending } = useServerAction(sendInviteAction, {
    onSuccess: () => {
      setIsOpen(false);
      form.reset();
      toast({
        title: tCommon("success"),
        description: t("successMessage"),
      });
    },
    onError: ({ err }) => {
      toast({
        title: tCommon("error"),
        description: err.message || t("errorMessage"),
        variant: "destructive",
      });
    },
  });

  function onSubmit(values: z.infer<typeof schema>) {
    sendInvite({
      email: values.email,
      groupId: parseInt(groupId),
    });
  }

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className={btnStyles}>
          <MailIcon className={btnIconStyles} /> {t("button")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("title")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("description")}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{t("emailLabel")}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={t("emailPlaceholder")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <AlertDialogFooter>
              <AlertDialogCancel>{t("cancelButton")}</AlertDialogCancel>
              <LoaderButton isLoading={isPending}>
                {t("inviteButton")}
              </LoaderButton>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}
