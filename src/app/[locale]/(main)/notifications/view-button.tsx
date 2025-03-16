"use client";

import { Button } from "@/components/ui/button";
import { Notification } from "@/db/schema";
import { getNotificationLink } from "@/util/notifications";
import Link from "next/link";
import { readNotificationAction } from "./actions";
import { useServerAction } from "zsa-react";
import { LoaderButton } from "@/components/loader-button";
import { useScopedI18n } from "@/locales/client";

export function ViewButton({ notification }: { notification: Notification }) {
  const { execute, isPending } = useServerAction(readNotificationAction);
  const t = useScopedI18n("notifications");
  return notification.isRead ? (
    <Button className="ml-auto" asChild variant={"secondary"}>
      <Link href={getNotificationLink(notification)}>{t("view")}</Link>
    </Button>
  ) : (
    <LoaderButton
      className="ml-auto"
      isLoading={isPending}
      onClick={() => {
        execute({ notificationId: notification.id });
      }}
    >
      {t("read")}
    </LoaderButton>
  );
}
