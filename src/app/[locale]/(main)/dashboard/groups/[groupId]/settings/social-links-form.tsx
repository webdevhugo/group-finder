"use client";

import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoaderButton } from "@/components/loader-button";
import { useToast } from "@/components/ui/use-toast";
import { updateGroupSocialLinksAction } from "./actions";
import { Group } from "@/db/schema";
import { socialUrlSchema } from "./schema";
import { useServerAction } from "zsa-react";
import { useScopedI18n } from "@/locales/client";

const updateSocialLinksSchema = z.object(socialUrlSchema);

export function SocialLinksForm({ group }: { group: Group }) {
  const { toast } = useToast();
  const t = useScopedI18n("settings");
  const tCommon = useScopedI18n("common");
  const form = useForm<z.infer<typeof updateSocialLinksSchema>>({
    resolver: zodResolver(updateSocialLinksSchema),
    defaultValues: {
      githubLink: group.githubLink ?? "",
      discordLink: group.discordLink ?? "",
      xLink: group.xLink ?? "",
      youtubeLink: group.youtubeLink ?? "",
    },
  });

  const { execute: updateSocialLinks, isPending } = useServerAction(
    updateGroupSocialLinksAction,
    {
      onSuccess: () => {
        toast({
          title: t("socialLinks.updated"),
          description: t("socialLinks.updatedMessage"),
        });
      },
      onError: ({ err }) => {
        toast({
          title: tCommon("error"),
          description: err.message || t("socialLinks.errorMessage"),
          variant: "destructive",
        });
      },
    }
  );

  const onSubmit: SubmitHandler<z.infer<typeof updateSocialLinksSchema>> = (
    values
  ) => {
    updateSocialLinks({ groupId: group.id, ...values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 flex flex-col gap-2 flex-1"
      >
        <FormField
          control={form.control}
          name="youtubeLink"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("socialLinks.youtube")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="discordLink"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("socialLinks.discord")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="xLink"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("socialLinks.x")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="githubLink"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("socialLinks.github")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButton className="w-fit ml-auto" isLoading={isPending}>
          {t("save")}
        </LoaderButton>
      </form>
    </Form>
  );
}
