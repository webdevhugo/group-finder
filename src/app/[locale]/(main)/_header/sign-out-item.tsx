"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import * as NProgress from "nprogress";
import { signOutAction } from "./actions";
import { useScopedI18n } from "@/locales/client";

export function SignOutItem() {
  const t = useScopedI18n("common");

  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={async () => {
        NProgress.start();
        signOutAction().then(() => {
          NProgress.done();
        });
      }}
    >
      <LogOut className="w-4 h-4 mr-2" />
      {t("signOut")}
    </DropdownMenuItem>
  );
}
