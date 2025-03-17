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
import { updateGroupNameAction } from "./actions";
import { GroupId } from "@/db/schema";
import { useServerAction } from "zsa-react";
import { useScopedI18n } from "@/locales/client";

const updateGroupNameSchema = z.object({
  name: z.string().min(1),
});

export function GroupNameForm({
  groupName,
  groupId,
}: {
  groupName: string;
  groupId: GroupId;
}) {
  const { toast } = useToast();
  const t = useScopedI18n('dashboard');
  const tCommon = useScopedI18n('common');
  const form = useForm<z.infer<typeof updateGroupNameSchema>>({
    resolver: zodResolver(updateGroupNameSchema),
    defaultValues: {
      name: groupName,
    },
  });

  const { execute: updateGroupName, isPending } = useServerAction(
    updateGroupNameAction,
    {
      onSuccess: () => {
        toast({
          title: t('nameUpdated'),
          description: t('nameUpdatedDescription'),
        });
        form.reset();
      },
      onError: ({ err }) => {
        toast({
          title: tCommon('error'),
          description: err.message || t('failedToUpdateGroupName'),
          variant: "destructive",
        });
      },
    }
  );

  const onSubmit: SubmitHandler<z.infer<typeof updateGroupNameSchema>> = (
    values
  ) => {
    updateGroupName({ name: values.name, groupId });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex gap-2 flex-1"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t('groupName')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <LoaderButton isLoading={isPending}>{t('save')}</LoaderButton>
      </form>
    </Form>
  );
}
