import { Button } from "@/components/ui/button";
import { pageTitleStyles } from "@/styles/common";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export default async function MagicLinkPage() {
  const t = await getScopedI18n('auth.magicLink.error');
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
