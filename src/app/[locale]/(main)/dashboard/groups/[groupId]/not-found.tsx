"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useScopedI18n } from "@/locales/client";

export default function NotFound() {
  const { groupId } = useParams();
  const t = useScopedI18n("group.notFound");

  return (
    <div>
      <Image
        src="/empty-state/no-data.svg"
        width="200"
        height="200"
        alt="no image placeholder image"
      ></Image>
      <h2>{t("title")}</h2>
      <Button asChild>
        <Link href={`/dashboard/groups/${groupId}/info`}>{t("viewGroupInfo")}</Link>
      </Button>
    </div>
  );
}
