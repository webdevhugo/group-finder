import { getCurrentUser } from "@/lib/session";
import { cardStyles, pageTitleStyles } from "@/styles/common";
import { getPostsInGroupUseCase } from "@/use-cases/posts";
import Image from "next/image";
import { CreatePostButton } from "./create-post-button";
import { PostCard } from "./post-card";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  isGroupVisibleToUserUseCase,
  isUserMemberOfGroupUseCase,
} from "@/use-cases/membership";
import { cn } from "@/lib/utils";
import { getScopedI18n } from "@/locales/server";

export default async function PostsPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const { groupId } = await params;
  const groupIdInt = parseInt(groupId);
  const user = await getCurrentUser();
  const canPost = await isUserMemberOfGroupUseCase(user, groupIdInt);
  const t = await getScopedI18n("group.posts");

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h2 className={pageTitleStyles}>{t("title")}</h2>
        {canPost && <CreatePostButton />}
      </div>

      <Suspense fallback={<PostsListLoader />}>
        <PostsList groupId={groupId} />
      </Suspense>
    </div>
  );
}

function PostsListLoader() {
  return new Array(4).fill("").map(() => {
    return <Skeleton className="h-40 w-full" />;
  });
}

async function PostsList({ groupId }: { groupId: string }) {
  const user = await getCurrentUser();
  const t = await getScopedI18n("group.posts");

  const posts = await getPostsInGroupUseCase(user, parseInt(groupId));

  return (
    <>
      {posts.length === 0 && (
        <div
          className={cn(
            cardStyles,
            "flex flex-col gap-8 justify-center items-center py-12"
          )}
        >
          <Image
            src="/empty-state/no-data.svg"
            width="200"
            height="200"
            alt="no image placeholder image"
          ></Image>
          <h2>{t("noPosts")}</h2>
        </div>
      )}

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
