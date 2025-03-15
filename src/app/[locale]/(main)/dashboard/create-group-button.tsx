"use client";

import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { InteractiveOverlay } from "@/components/interactive-overlay";
import { useState } from "react";
import { CreateGroupForm } from "./create-group-form";
import { useScopedI18n } from "@/locales/client";

export function CreateGroupButton() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useScopedI18n("dashboard.emptyState");

  return (
    <>
      <InteractiveOverlay
        title={"Create Group"}
        description={"Create a new group to start managing your events."}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        form={<CreateGroupForm />}
      />

      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        className={btnStyles}
      >
        <PlusCircle className={btnIconStyles} />
        {t("createButton")}
      </Button>
    </>
  );
}
