import { getPostById } from "@/data-access/posts";
import { UserSession } from "./types";
import { hasAccessToGroup, isAdminOrOwnerOfGroup } from "./authorization";
import {
  createReply,
  deleteReply,
  getRepliesOnPost,
  getReplyById,
  getReplyCountOnPost,
  updateReply,
} from "@/data-access/replies";
import { createNotification } from "@/data-access/notifications";
import { PublicError } from "./errors";
import { getScopedI18n } from "@/locales/server";

export async function getReplyCountUseCase(
  authenticatedUser: UserSession | undefined,
  postId: number
) {
  const replyCount = await getReplyCountOnPost(postId);
  return replyCount;
}

export async function getRepliesForPostUseCase(
  authenticatedUser: UserSession | undefined,
  postId: number
) {
  const t = await getScopedI18n('replies');
  const post = await getPostById(postId);

  if (!post) {
    throw new PublicError(t('postNotFound'));
  }

  const hasAccess = await hasAccessToGroup(authenticatedUser, post.groupId);

  if (!hasAccess) {
    throw new PublicError(t('userDoesNotHaveAccessToGroup'));
  }

  const replies = await getRepliesOnPost(postId);

  return replies;
}

export async function createReplyUseCase(
  authenticatedUser: UserSession,
  reply: { postId: number; message: string }
) {
  const t = await getScopedI18n('replies');
  const post = await getPostById(reply.postId);

  if (!post) {
    throw new PublicError(t('postNotFound'));
  }

  const hasAccess = await hasAccessToGroup(authenticatedUser, post.groupId);

  if (!hasAccess) {
    throw new PublicError(t('userDoesNotHavePermissionToReplyToPost'));
  }

  const createdReply = await createReply({
    postId: reply.postId,
    message: reply.message,
    groupId: post.groupId,
    userId: authenticatedUser.id,
    createdOn: new Date(),
  });

  if (post.userId !== authenticatedUser.id) {
    await createNotification({
      userId: post.userId,
      groupId: post.groupId,
      postId: post.id,
      type: "reply",
      message: t('someoneRepliedToYourPost', { title: post.title }),
      createdOn: new Date(),
    });
  }

  return createdReply;
}

export async function deleteReplyUseCase(
  authenticatedUser: UserSession,
  reply: { replyId: number }
) {
  const t = await getScopedI18n('replies');
  const replyToDelete = await getReplyById(reply.replyId);

  if (!replyToDelete) {
    throw new PublicError(t('replyNotFound'));
  }

  const post = await getPostById(replyToDelete.postId);

  if (!post) {
    throw new PublicError(t('postNotFound'));
  }

  const hasAccess = await isAdminOrOwnerOfGroup(
    authenticatedUser,
    post.groupId
  );

  if (!hasAccess && replyToDelete.userId !== authenticatedUser.id) {
    throw new PublicError(t('userDoesNotHavePermissionToDeleteReply'));
  }

  await deleteReply(reply.replyId);
}

export async function updateReplyUseCase(
  authenticatedUser: UserSession,
  reply: {
    replyId: number;
    message: string;
  }
) {
  const t = await getScopedI18n('replies');
  const replyAccess = await hasAccessToMutateReply(
    authenticatedUser,
    reply.replyId
  );

  if (!replyAccess) {
    throw new PublicError(t('userDoesNotHaveAccessToReply'));
  }

  const updatedReply = await updateReply(reply.replyId, {
    message: reply.message,
  });

  return updatedReply;
}

export async function hasAccessToMutateReply(
  authenticatedUser: UserSession | undefined,
  replyId: number
) {
  if (!authenticatedUser) return false;

  const replyToUpdate = await getReplyById(replyId);

  if (!replyToUpdate) {
    return null;
  }

  const post = await getPostById(replyToUpdate.postId);

  if (!post) {
    return null;
  }

  const hasAccess = await isAdminOrOwnerOfGroup(
    authenticatedUser,
    post.groupId
  );

  if (!hasAccess && replyToUpdate.userId !== authenticatedUser.id) {
    return null;
  }

  return {
    reply: replyToUpdate,
    post,
  };
}

export async function hasAccessToMutateReplyUseCase(
  authenticatedUser: UserSession | undefined,
  replyId: number
) {
  const replyAccess = await hasAccessToMutateReply(authenticatedUser, replyId);
  return replyAccess;
}
