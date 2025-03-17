"use client";

import { useToast } from "@/components/ui/use-toast";
import { useServerAction } from "zsa-react";
import { followUserAction } from "./actions";
import { UserId } from "@/use-cases/types";
import { LoaderButton } from "@/components/loader-button";
import { UserPlus } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { useScopedI18n } from "@/locales/client";

export function FollowButton({ foreignUserId }: { foreignUserId: UserId }) {
  const { toast } = useToast();
  const tCommon = useScopedI18n('common');
  const t = useScopedI18n('users');

  const { execute, isPending } = useServerAction(followUserAction, {
    onSuccess() {
      toast({
        title: tCommon('success'),
        description: t('followedUser'),
      });
    },
    onError() {
      toast({
        title: tCommon('error'),
        variant: "destructive",
        description: t('failedToFollowUser'),
      });
    },
  });

  return (
    <LoaderButton
      className={btnStyles}
      onClick={() => execute({ foreignUserId })}
      isLoading={isPending}
    >
      <UserPlus className={btnIconStyles} /> {t('follow')}
    </LoaderButton>
  );
}
