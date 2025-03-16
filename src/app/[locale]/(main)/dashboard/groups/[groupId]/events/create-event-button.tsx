"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { CreateEventForm } from "./create-event-form";
import { Calendar } from "lucide-react";
import { btnIconStyles, btnStyles } from "@/styles/icons";
import { InteractiveOverlay } from "@/components/interactive-overlay";
import { useState } from "react";
import { useScopedI18n } from "@/locales/client";

export function CreateEventButton() {
  const { groupId } = useParams<{ groupId: string }>();
  const [isOpen, setIsOpen] = useState(false);
  const t = useScopedI18n("group.events");

  return (
    <>
      <InteractiveOverlay
        title={t("createButton")}
        description={t("createDescription")}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        form={<CreateEventForm groupId={parseInt(groupId)} />}
      />

      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        className={btnStyles}
      >
        <Calendar className={btnIconStyles} />
        {t("createButton")}
      </Button>
    </>
  );
}
