"use client";

import { LoaderButton } from "@/components/loader-button";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { LogOut } from "lucide-react";
import { useServerAction } from "zsa-react";
import { invalidateUserSessionsAction } from "./actions";
import { useScopedI18n } from "@/locales/client";

export function LogoutAllDevicesButton() {
  const t = useScopedI18n('settings.security');
  const { execute, isPending } = useServerAction(invalidateUserSessionsAction);

  return (
    <LoaderButton
      className={btnStyles}
      onClick={() => {
        execute();
      }}
      isLoading={isPending}
    >
      <LogOut className={btnIconStyles} />
      {t('logoutAllSessions')}
    </LoaderButton>
  );
}
