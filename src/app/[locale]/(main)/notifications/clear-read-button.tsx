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
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useServerAction } from "zsa-react";
import { clearReadNotificationsAction } from "./actions";
import { useToast } from "@/components/ui/use-toast";
import { TrashIcon } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { useScopedI18n } from "@/locales/client";

export function ClearReadButton() {
  const t = useScopedI18n("notifications");
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const { execute, isPending } = useServerAction(clearReadNotificationsAction, {
    onSuccess: () => {
      toast({
        title: t("success"),
        description: t("cleared"),
      });
      setIsOpen(false);
    },
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button className={btnStyles} variant="destructive">
          <TrashIcon className={btnIconStyles} /> {t("clearRead")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("confirmClear")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("confirmClearDesc")}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancel")}</AlertDialogCancel>
          <LoaderButton
            onClick={() => {
              execute();
            }}
            isLoading={isPending}
          >
            {t("clearButton")}
          </LoaderButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
