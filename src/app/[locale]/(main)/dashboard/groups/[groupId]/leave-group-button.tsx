"use client";

import { leaveGroupAction } from "@/app/[locale]/(main)/dashboard/groups/[groupId]/actions";
import { LoaderButton } from "@/components/loader-button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { DoorOpen } from "lucide-react";
import { useParams } from "next/navigation";
import { useState } from "react";
import { useServerAction } from "zsa-react";
import { useScopedI18n } from "@/locales/client";

export function LeaveGroupButton() {
  const { toast } = useToast();
  const { groupId } = useParams<{ groupId: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const t = useScopedI18n('group.leave');
  const { execute, status } = useServerAction(leaveGroupAction, {
    onSuccess() {
      toast({
        title: t('success.title'),
        description: t('success.description'),
      });
    },
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} size={"sm"} className={btnStyles}>
          <DoorOpen className={btnIconStyles} /> {t('button')}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t('dialog.title')}</AlertDialogTitle>
          <AlertDialogDescription>
            {t('dialog.description')}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t('dialog.cancel')}</AlertDialogCancel>
          <LoaderButton
            variant={"destructive"}
            isLoading={status === "pending"}
            onClick={() => {
              execute(parseInt(groupId));
            }}
          >
            {t('dialog.confirm')}
          </LoaderButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
