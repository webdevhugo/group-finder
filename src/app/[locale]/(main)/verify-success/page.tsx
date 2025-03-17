import { Button } from "@/components/ui/button";
import { pageTitleStyles } from "@/styles/common";
import Link from "next/link";
import { useScopedI18n } from "@/locales/client";

export default function VerifySuccess() {
  const t = useScopedI18n('auth.verify');

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
