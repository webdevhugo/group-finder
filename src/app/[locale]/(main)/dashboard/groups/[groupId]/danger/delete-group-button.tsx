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
import { useToast } from "@/components/ui/use-toast";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { DoorOpen } from "lucide-react";
import { useState } from "react";
import { useServerAction } from "zsa-react";
import { deleteGroupAction } from "./actions";
import { useGroupIdParam } from "../utils";
import { cn } from "@/lib/utils";
import { useScopedI18n } from "@/locales/client";

export function DeleteGroupButton() {
  const t = useScopedI18n("group.danger");
  const tCommon = useScopedI18n("common");
  const groupId = useGroupIdParam();
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const { execute, isPending } = useServerAction(deleteGroupAction, {
    onSuccess() {
      toast({
        title: tCommon("success"),
        description: t("successMessage"),
      });
    },
    onError() {
      toast({
        title: tCommon("error"),
        variant: "destructive",
        description: t("errorMessage"),
      });
    },
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} className={cn(btnStyles, "w-fit")}>
          <DoorOpen className={btnIconStyles} /> {t("deleteButton")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("deleteConfirmTitle")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("deleteConfirmDescription")}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{t("cancelButton")}</AlertDialogCancel>
          <LoaderButton
            isLoading={isPending}
            onClick={() => {
              execute({ groupId });
            }}
          >
            {t("deleteButton")}
          </LoaderButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
