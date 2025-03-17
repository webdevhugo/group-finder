"use client";

import { useToast } from "@/components/ui/use-toast";
import { useServerAction } from "zsa-react";
import { unfollowUserAction } from "./actions";
import { UserId } from "@/use-cases/types";
import { LoaderButton } from "@/components/loader-button";
import { UserMinus } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { useScopedI18n } from "@/locales/client";

export function UnfollowButton({ foreignUserId }: { foreignUserId: UserId }) {
  const tCommon = useScopedI18n('common');
  const t = useScopedI18n('users');
  const { toast } = useToast();

  const { execute, isPending } = useServerAction(unfollowUserAction, {
    onSuccess() {
      toast({
        title: tCommon('success'),
        description: t('unfollowedUser'),
      });
    },
    onError() {
      toast({
        title: tCommon('error'),
        variant: "destructive",
        description: t('failedToUnfollowUser'),
      });
    },
  });

  return (
    <LoaderButton
      className={btnStyles}
      onClick={() => execute({ foreignUserId })}
      isLoading={isPending}
      variant={"destructive"}
    >
      <UserMinus className={btnIconStyles} /> {t('unfollow')}
    </LoaderButton>
  );
}
