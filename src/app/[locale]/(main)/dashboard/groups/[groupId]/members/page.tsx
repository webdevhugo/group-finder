import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { cardStyles, pageTitleStyles } from "@/styles/common";
import { getGroupMembersUseCase } from "@/use-cases/groups";
import { isGroupOwnerUseCase } from "@/use-cases/membership";
import { MemberInfo } from "@/use-cases/types";
import Link from "next/link";
import { InviteButton } from "../invite-button";
import { Crown, Gavel, Users } from "lucide-react";
import { MemberCardActions } from "./member-card-actions";
import { GroupId, Profile } from "@/db/schema";
import { getScopedI18n } from "@/locales/server";
import { getProfileImageFullUrl } from "../../../settings/profile/profile-image";

function MemberCard({
  showActions,
  member,
  groupId,
}: {
  showActions?: boolean;
  groupId: GroupId;
  member: MemberInfo;
}) {
  const profileForAvatar: Pick<Profile, "userId" | "image" | "imageId"> = {
    userId: member.userId,
    image: member.image,
    imageId: member.imageId,
  };

  return (
    <div key={member.userId} className="flex items-center gap-4">
      <div
        className={cn(
          cardStyles,
          "flex gap-4 hover:underline items-center p-4"
        )}
      >
        <Avatar>
          <AvatarImage src={getProfileImageFullUrl(profileForAvatar)} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link href={`/users/${member.userId}/info`}>
          <p className="text-xl">{member.name}</p>
        </Link>
        {showActions && (
          <MemberCardActions
            userRole={member.role}
            groupId={groupId}
            userId={member.userId}
          />
        )}
      </div>
    </div>
  );
}

export default async function MembersPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const t = await getScopedI18n("group.members");
  const { groupId } = await params;
  const user = await getCurrentUser();
  const groupIdInt = parseInt(groupId);
  const members = await getGroupMembersUseCase(user, groupIdInt);

  const owners = members.filter((member) => member.role === "owner");
  const admins = members.filter((member) => member.role === "admin");
  const regularMembers = members.filter((member) => member.role === "member");

  const isGroupOwner = !user
    ? false
    : await isGroupOwnerUseCase(user, groupIdInt);

  return (
    <div className="space-y-8">
      <h1 className={cn(pageTitleStyles, "flex justify-between items-center")}>
        <div>{t("title")}</div>
        {isGroupOwner && <InviteButton />}
      </h1>

      <h2 className="text-2xl flex items-center gap-2">
        <Crown /> {t("owner")}
      </h2>
      <div className="flex flex-wrap gap-4">
        {owners.map((member) => (
          <MemberCard
            showActions={false}
            groupId={groupIdInt}
            key={member.userId}
            member={member}
          />
        ))}
      </div>

      {admins.length > 0 && (
        <>
          <h2 className="text-2xl flex items-center gap-2">
            <Gavel /> {t("admin")}
          </h2>
          <div className="flex flex-wrap gap-4">
            {admins.map((member) => (
              <MemberCard
                groupId={groupIdInt}
                showActions={isGroupOwner}
                key={member.userId}
                member={member}
              />
            ))}
          </div>
        </>
      )}

      {regularMembers.length > 0 && (
        <>
          <h2 className="text-2xl flex items-center gap-2">
            <Users /> {t("members")}
          </h2>
          <div className="flex flex-wrap gap-4">
            {regularMembers.map((member) => (
              <MemberCard
                groupId={groupIdInt}
                showActions={isGroupOwner}
                key={member.userId}
                member={member}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
