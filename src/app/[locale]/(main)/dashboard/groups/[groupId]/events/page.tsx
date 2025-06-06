import { getCurrentUser } from "@/lib/session";
import { cn } from "@/lib/utils";
import { cardStyles, pageTitleStyles } from "@/styles/common";
import { getEventsUseCase } from "@/use-cases/events";
import Image from "next/image";
import { EventCard } from "./event-card";
import { CreateEventButton } from "./create-event-button";
import { AlarmCheckIcon, DoorClosed } from "lucide-react";
import { isGroupOwnerUseCase } from "@/use-cases/membership";
import { getScopedI18n } from "@/locales/server";

export default async function MembersPage({
  params,
}: {
  params: Promise<{ groupId: string }>;
}) {
  const t = await getScopedI18n("group.events");
  const { groupId } = await params;
  const groupIdInt = parseInt(groupId);
  const user = await getCurrentUser();

  const events = await getEventsUseCase(user, groupIdInt);
  const isGroupOwner = await isGroupOwnerUseCase(user, groupIdInt);

  const upcomingEvents = events.filter((event) => {
    return new Date(event.startsOn) > new Date();
  });

  const pastEvents = events.filter((event) => {
    return new Date(event.startsOn) < new Date();
  });

  return (
    <>
      <div className="space-y-8">
        <h2
          className={cn(pageTitleStyles, "flex justify-between items-center")}
        >
          {t("title")}
          {isGroupOwner && <CreateEventButton />}
        </h2>

        {events.length === 0 && (
          <div
            className={cn(
              cardStyles,
              "flex flex-col gap-8 justify-center items-center p-12"
            )}
          >
            <Image
              src="/empty-state/no-data.svg"
              width="200"
              height="200"
              alt="no image placeholder image"
            ></Image>
            <h2>{t("noEvents")}</h2>
          </div>
        )}

        {events.length > 0 && (
          <div className="space-y-24">
            <div className="space-y-8">
              <h3
                className={cn(
                  pageTitleStyles,
                  "text-2xl flex justify-between items-center"
                )}
              >
                <div className="flex items-center gap-4">
                  <AlarmCheckIcon className="w-6 h-6" /> {t("upcoming")}
                </div>
              </h3>

              {upcomingEvents.length === 0 && (
                <p
                  className={cn(
                    cardStyles,
                    "flex gap-8 items-center mt-8 py-4 px-4"
                  )}
                >
                  {t("noUpcoming")}
                </p>
              )}

              <div className="space-y-8">
                {upcomingEvents.map((event) => (
                  <EventCard isAdmin={isGroupOwner} event={event} />
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <h3
                className={cn(
                  pageTitleStyles,
                  "text-2xl flex justify-between items-center"
                )}
              >
                <div className="flex items-center gap-4">
                  <DoorClosed className="w-6 h-6" /> {t("expired")}
                </div>
              </h3>

              {pastEvents.length === 0 && (
                <p
                  className={cn(
                    cardStyles,
                    "flex gap-8 items-center mt-8 py-4 px-4"
                  )}
                >
                  {t("noExpired")}
                </p>
              )}

              <div className="space-y-8">
                {pastEvents.map((event) => (
                  <EventCard isAdmin={isGroupOwner} event={event} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
