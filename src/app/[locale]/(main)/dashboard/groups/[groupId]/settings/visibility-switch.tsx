"use client";

import { toggleGroupVisibilityAction } from "@/app/[locale]/(main)/dashboard/groups/[groupId]/settings/actions";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/components/ui/use-toast";
import { Group } from "@/db/schema";
import { useServerAction } from "zsa-react";
import { useScopedI18n } from "@/locales/client";

export function GroupVisibilitySwitch({ group }: { group: Group }) {
  const { toast } = useToast();
  const t = useScopedI18n('dashboard');
  const { execute } = useServerAction(toggleGroupVisibilityAction, {
    onSuccess() {
      toast({
        title: t('updateSuccessful'),
        description: t('updateSuccessfulDescription'),
      });
    },
    onError({ err }) {
      toast({
        title: t('somethingWentWrong'),
        description: err.message,
        variant: "destructive",
      });
    },
  });

  return (
    <div className="flex items-center space-x-2">
      <Switch
        defaultChecked={group.isPublic}
        onCheckedChange={() => {
          execute(group.id);
        }}
        id="visibility"
      />
      <Label htmlFor="visibility">{t('isGroupPublic')}</Label>
    </div>
  );
}
