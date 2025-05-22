"use client";

import { Crown, EllipsisVertical, Gavel, User } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DeleteModal } from "@/components/delete-modal";
import { useServerAction } from "zsa-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { kickMemberAction, switchMemberRoleAction } from "./actions";
import { useScopedI18n } from "@/locales/client";

export function MemberCardActions({
  userId,
  groupId,
  userRole,
}: {
  userId: number;
  groupId: number;
  userRole: string;
}) {
  const t = useScopedI18n("group.members.memberActions");
  const [isOpen, setIsOpen] = useState(false);

  const { execute: executeSwitchRole } = useServerAction(
    switchMemberRoleAction,
    {
      onSuccess() {
        setIsDeleteModalOpen(false);
      },
    }
  );
  const { execute, isPending } = useServerAction(kickMemberAction, {
    onSuccess() {
      setIsDeleteModalOpen(false);
    },
  });
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <>
      <DeleteModal
        isOpen={isDeleteModalOpen}
        setIsOpen={setIsDeleteModalOpen}
        title={t("kickTitle")}
        description={t("kickDescription")}
        confirmText={t("kickConfirm")}
        onConfirm={() => {
          execute({
            userId,
            groupId,
          });
        }}
        isPending={isPending}
      />

      <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size={"icon"}>
            <EllipsisVertical />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {userRole === "member" && (
            <DropdownMenuItem
              className={btnStyles}
              onClick={(e) => {
                executeSwitchRole({
                  userId,
                  groupId,
                  role: "admin",
                });
              }}
            >
              <Crown className={btnIconStyles} />
              {t("promoteToAdmin")}
            </DropdownMenuItem>
          )}

          {userRole === "admin" && (
            <DropdownMenuItem
              className={btnStyles}
              onClick={(e) => {
                executeSwitchRole({
                  userId,
                  groupId,
                  role: "member",
                });
              }}
            >
              <User className={btnIconStyles} />
              {t("demoteToMember")}
            </DropdownMenuItem>
          )}

          <DropdownMenuItem
            onClick={(e) => {
              setIsDeleteModalOpen(true);
            }}
            className={cn(btnStyles, "text-red-500")}
          >
            <Gavel className={btnIconStyles} />
            {t("kick")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
