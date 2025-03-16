"use client";

import { useServerAction } from "zsa-react";
import { markAllNotificationsAsReadAction } from "./actions";
import { LoaderButton } from "@/components/loader-button";
import { CheckCheckIcon } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { useToast } from "@/components/ui/use-toast";
import { useScopedI18n } from "@/locales/client";

export function MarkReadAllButton() {
  const { toast } = useToast();
  const t = useScopedI18n("notifications");
  const { execute, isPending } = useServerAction(
    markAllNotificationsAsReadAction,
    {
      onSuccess: () => {
        toast({
          title: t("success"),
          description: t("markedAsRead"),
        });
      },
    }
  );

  return (
    <LoaderButton
      isLoading={isPending}
      onClick={() => {
        execute();
      }}
      className={btnStyles}
    >
      <CheckCheckIcon className={btnIconStyles} /> {t("markAllRead")}
    </LoaderButton>
  );
}
