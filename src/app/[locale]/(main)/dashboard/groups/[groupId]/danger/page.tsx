import { assertAuthenticated } from "@/lib/session";
import { pageTitleStyles } from "@/styles/common";
import { getGroupByIdUseCase } from "@/use-cases/groups";
import { ConfigurationPanel } from "@/components/configuration-panel";
import { DeleteGroupButton } from "./delete-group-button";
import { getScopedI18n } from "@/locales/server";

export default async function DangerTab({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const groupIdInt = parseInt(groupId);
  const user = await assertAuthenticated();
  const group = await getGroupByIdUseCase(user, groupIdInt);
  const t = await getScopedI18n("group.danger");
  const tInfo = await getScopedI18n("group.info");

  if (!group) {
    return <div>{tInfo("groupNotFound")}</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className={pageTitleStyles}>{t("title")}</h1>

      <div className="grid grid-cols-2 gap-8">
        <ConfigurationPanel variant="destructive" title={t("deleteGroup")}>
          <div className="flex flex-col gap-8">
            <p className="dark:text-gray-400">
              {t("deleteDescription")}
            </p>
            <DeleteGroupButton />
          </div>
        </ConfigurationPanel>
      </div>
    </div>
  );
}
