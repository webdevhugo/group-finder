import { createInvite, deleteInvite, getInvite } from "@/data-access/invites";
import { addMembership } from "@/data-access/membership";
import { GroupId } from "@/db/schema";
import { InviteEmail } from "@/emails/invite";
import { sendEmail } from "@/lib/send-email";
import {
  assertAdminOrOwnerOfGroup,
  assertGroupExists,
} from "@/use-cases/authorization";
import { UserSession } from "@/use-cases/types";
import { PublicError } from "@/use-cases/errors";
import { getScopedI18n } from "@/locales/server";
import { applicationName } from "@/app-config";

export async function sendInviteUseCase(
  authenticatedUser: UserSession,
  { email, groupId }: { email: string; groupId: GroupId }
) {
  const t = await getScopedI18n("group.members.invite");
  await assertAdminOrOwnerOfGroup(authenticatedUser, groupId);
  const group = await assertGroupExists(groupId);
  const invite = await createInvite(groupId);
  await sendEmail(
    email,
    t("emailSubject", { appName: applicationName }),
    <InviteEmail group={group} token={invite.token} />
  );
}

export async function acceptInviteUseCase(
  authenticatedUser: UserSession,
  { token }: { token: string }
) {
  const invite = await getInvite(token);
  const t = await getScopedI18n("group.members.invite.errors");

  if (!invite) {
    throw new PublicError(t("notFoundOrExpired"));
  }

  if (invite.tokenExpiresAt < new Date()) {
    throw new PublicError(t("expired"));
  }

  await addMembership(authenticatedUser.id, invite.groupId);
  await deleteInvite(token);

  return invite.groupId;
}
