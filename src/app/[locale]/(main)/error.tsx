"use client";

import { AUTHENTICATION_ERROR_MESSAGE } from "@/app/[locale]/(main)/util";
import { Button } from "@/components/ui/button";
import { pageTitleStyles } from "@/styles/common";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";

export default function ErrorPage({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const t = useScopedI18n("error");
  const isAuthenticationError = error.message.includes(
    AUTHENTICATION_ERROR_MESSAGE
  );

  return (
    <div className="container mx-auto py-12 min-h-screen space-y-8">
      {isAuthenticationError ? (
        <>
          <h1 className={pageTitleStyles}>{t("authTitle")}</h1>
          <p className="text-lg">{t("authMessage")}</p>

          <Button asChild>
            <Link href="/sign-in">{t("signIn")}</Link>
          </Button>
        </>
      ) : (
        <>
          <h1 className={pageTitleStyles}>{t("genericTitle")}</h1>
          <p className="text-lg">{error.message}</p>
        </>
      )}
    </div>
  );
}
