import { ProfileTabs } from "@/app/[locale]/(main)/users/[userId]/profile-tabs";
import { cn } from "@/lib/utils";
import { pageWrapperStyles } from "@/styles/common";
import { ReactNode } from "react";
import { ProfileHeader } from "./profile-header";

export default async function ProfileLayout({
  params,
  children,
}: {
  params: Promise<{ userId: string }>;
  children: ReactNode;
}) {
  const { userId } = await params;

  return (
    <>
      <ProfileHeader userId={parseInt(userId)} />

      <ProfileTabs userId={parseInt(userId)} />

      <div className={cn(pageWrapperStyles, "flex gap-12 space-y-0")}>
        <div className="flex-1 gap-4 flex flex-col">{children}</div>
      </div>
    </>
  );
}
