import { Button } from "@/components/ui/button";
import Link from "next/link";
import { env } from "@/env";
import { getUserPlanUseCase } from "@/use-cases/subscriptions";
import { ConfigurationPanel } from "@/components/configuration-panel";
import { assertAuthenticated } from "@/lib/session";
import { getScopedI18n } from "@/locales/server";

export default async function SubscriptionPage() {
  const user = await assertAuthenticated();
  const currrentPlan = await getUserPlanUseCase(user.id);
  const t = await getScopedI18n('subscribe');

  return (
    currrentPlan !== "free" && (
      <ConfigurationPanel title={t("title")}>
        <div className="flex flex-col gap-4">
          <div>
            {t("currentPlan", { plan: <span className="text-bold text-blue-400">{currrentPlan}</span> })}
          </div>
          <div>{t("upgradeOrCancel")}</div>
          <Button className="max-w-fit" asChild>
            <Link
              href={env.NEXT_PUBLIC_STRIPE_MANAGE_URL}
              target="_blank"
              rel="noreferrer"
            >
              {t("manage")}
            </Link>
          </Button>
        </div>
      </ConfigurationPanel>
    )
  );
}
