import { pageTitleStyles } from "@/styles/common";
import { getScopedI18n } from "@/locales/server";

export default async function MagicLinkPage() {
  const t = await getScopedI18n('auth.magicLink');

  return (
    <div className="py-24 mx-auto max-w-[400px] space-y-6">
      <h1 className={pageTitleStyles}>{t('title')}</h1>
      <p className="text-xl">
        {t('description')}
      </p>
    </div>
  );
}
