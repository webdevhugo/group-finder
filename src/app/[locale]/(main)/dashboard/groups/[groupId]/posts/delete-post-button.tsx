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
import { DoorOpen, Trash } from "lucide-react";
import { useState } from "react";
import { useServerAction } from "zsa-react";
import { cn } from "@/lib/utils";
import { deletePostAction } from "./actions";
import { useScopedI18n } from "@/locales/client";

export function DeletePostButton({ postId }: { postId: number }) {
  const { toast } = useToast();
  const t = useScopedI18n("group.posts");
  const tCommon = useScopedI18n("common");
  const [isOpen, setIsOpen] = useState(false);
  const { execute, isPending } = useServerAction(deletePostAction, {
    onSuccess() {
      toast({
        title: tCommon("success"),
        description: t("deletePostSuccess"),
      });
    },
  });

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger asChild>
        <Button variant={"destructive"} className={cn(btnStyles, "w-fit")}>
          <Trash className={btnIconStyles} /> {t("deletePost")}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{t("deletePost")}</AlertDialogTitle>
          <AlertDialogDescription>
            {t("deletePostConfirm")}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>{tCommon("cancel")}</AlertDialogCancel>
          <LoaderButton
            isLoading={isPending}
            onClick={() => {
              execute({ postId });
            }}
          >
            {t("deletePost")}
          </LoaderButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
