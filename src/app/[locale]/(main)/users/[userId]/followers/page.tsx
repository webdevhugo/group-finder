import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Profile } from "@/db/schema";
import { getFollowersForUserUseCase } from "@/use-cases/following";
import Image from "next/image";
import { getScopedI18n } from "@/locales/server";
import { getProfileImageFullUrl } from "../../../dashboard/settings/profile/profile-image";

function FollowerCard({ profile }: { profile: Profile }) {
  return (
    <div key={profile.userId} className="flex items-center gap-4">
      <div className="dark:bg-slate-900 flex gap-4 items-center hover:underline border rounded-lg p-4">
        <Avatar>
        <AvatarImage src={getProfileImageFullUrl(profile)} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Link href={`/users/${profile.userId}/info`}>
          <p className="text-xl">{profile.displayName}</p>
        </Link>
      </div>
    </div>
  );
}

export default async function FollowersPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const userIdInt = parseInt(userId);
  const followers = await getFollowersForUserUseCase(userIdInt);
  const t = await getScopedI18n('profile');
  return (
    <div className="space-y-8">
      {followers.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 gap-8 dark:bg-slate-900 rounded-xl">
          <Image
            src="/empty-state/mountain.svg"
            width="200"
            height="200"
            alt="no gruops placeholder image"
          ></Image>
          <h2 className="text-2xl">{t('noFollowers')}</h2>
        </div>
      )}

      <div className="flex flex-wrap gap-4">
        {followers.map((follower) => (
          <FollowerCard key={follower.userId} profile={follower} />
        ))}
      </div>
    </div>
  );
}
