import { applicationName, companyName } from "@/app-config";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { getScopedI18n } from "@/locales/server";

export async function Footer() {
  const year = new Date().getFullYear();
  const t = await getScopedI18n("footer");

  return (
    <>
      <footer className="border-t bg-gray-100 dark:bg-background">
        <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("company")}
              </h3>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("helpCenter")}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a href="https://x.com/hhwjsw711" target="_blank" className="hover:underline">
                    {t("twitter")}
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                {t("legal")}
              </h3>
              <ul className="text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link href="/privacy" className="hover:underline">
                    {t("privacyPolicy")}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms-of-service" className="hover:underline">
                    {t("termsOfService")}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <ModeToggle />
            <LanguageToggle />
          </div>
        </div>
      </footer>
      <footer className="py-8 px-5 border-t">
        <div className="text-center">
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © {year} <Link href="/">{applicationName}</Link>. All Rights Reserved.
            Built with ❤️ by {companyName}
          </span>
        </div>
      </footer>
    </>
  );
}
