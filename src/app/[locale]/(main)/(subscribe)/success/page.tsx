import Confetti from "@/components/confetti";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";

export default async function SuccessPage() {
  const t = await getScopedI18n('subscribe');

  return (
    <>
      <div className="flex flex-col gap-8 items-center pb-24">
        <h1 className="text-4xl mt-24">{t("successTitle")}</h1>

        <Confetti />

        <p>{t("successDesc")}</p>

        <Button asChild>
          <Link href={"/dashboard"}>{t("viewDashboard")}</Link>
        </Button>
      </div>
    </>
  );
}
