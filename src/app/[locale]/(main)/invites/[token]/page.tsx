import { Button } from "@/components/ui/button";
import { env } from "@/env";
import { getCurrentUser } from "@/lib/session";
import { pageTitleStyles, pageWrapperStyles } from "@/styles/common";
import { acceptInviteUseCase } from "@/use-cases/invites";
import { Link } from "@react-email/components";
import { redirect } from "next/navigation";
import { getScopedI18n } from "@/locales/server";

export default async function InvitesPage({
  params,
}: {
  params: Promise<{
    token: string;
  }>;
}) {
  const { token } = await params;
  const t = await getScopedI18n("group.members.invite");

  if (!token) {
    throw new Error("Invalid invite link");
  }

  const user = await getCurrentUser();

  if (user) {
    const groupId = await acceptInviteUseCase(user, { token });
    redirect(`/dashboard/groups/${groupId}`);
  }

  return (
    <div className={pageWrapperStyles}>
      {!user && (
        <>
          <h1 className={pageTitleStyles}>{t("processingTitle")}</h1>
          <p className="max-w-md text-lg">
            {t("loginPrompt")}
          </p>

          <Button asChild>
            <Link
              href={`/sign-in?callbackUrl=${env.HOST_NAME}/invites/${token}`}
            >
              {t("loginButton")}
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
