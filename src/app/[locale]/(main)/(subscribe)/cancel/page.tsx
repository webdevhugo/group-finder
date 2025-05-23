import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export default async function CancelPage() {
  const t = await getScopedI18n('subscribe');

  return (
    <>
      <div className="flex flex-col gap-8 items-center pb-24">
        <h1 className="text-4xl mt-24">{t("cancelTitle")}</h1>

        <p className="text-2xl max-w-xl text-center">
          {t("cancelDesc")}
        </p>

        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400 py-4">
          <Button variant="secondary" asChild size="lg">
          <Link href="/browse">
              {t("freeKit")}
            </Link>
          </Button>
        </p>

        <Button variant="default" asChild size="lg">
          <Link href="/">
            <ChevronLeft className="w-4 h-4 mr-2" /> {t("convince")}
          </Link>
        </Button>
      </div>
    </>
  );
}
