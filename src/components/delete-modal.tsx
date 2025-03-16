"use client";

import { LoaderButton } from "@/components/loader-button";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useScopedI18n } from "@/locales/client";


export function DeleteModal({
  onConfirm,
  description,
  title,
  isOpen,
  setIsOpen,
  confirmText = "Delete",
  isPending,
}: {
  onConfirm: () => void;
  description: string;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  title: string;
  confirmText?: string;
  isPending: boolean;
}) {
  const t = useScopedI18n("group.events");
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <LoaderButton onClick={onConfirm} isLoading={isPending}>
            {confirmText}
          </LoaderButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
