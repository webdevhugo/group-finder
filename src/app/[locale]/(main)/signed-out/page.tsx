"use client";

import { Button } from "@/components/ui/button";
import { pageTitleStyles } from "@/styles/common";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useScopedI18n } from "@/locales/client";

export default function SignedOutPage() {
  const t = useScopedI18n('auth.signOut');
  const router = useRouter();
  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="py-24 mx-auto max-w-[400px] space-y-6">
      <h1 className={pageTitleStyles}>{t('title')}</h1>
      <p className="text-xl">
        {t('description')}
      </p>

      <Button asChild>
        <Link href="/sign-in">{t('button')}</Link>
      </Button>
    </div>
  );
}
