"use client";

import { LoaderButton } from "@/components/loader-button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { useContext, useRef, useState } from "react";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { CalendarDays, CalendarIcon, Clock, Terminal } from "lucide-react";
import { btnIconStyles } from "@/styles/icons";
import { Textarea } from "@/components/ui/textarea";
import { createEventAction } from "./actions";
import { formatDate } from "@/util/date";
import { useCurrentLocale } from "@/locales/client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { GroupId } from "@/db/schema";
import { Label } from "@/components/ui/label";
import { TimePickerInput } from "@/components/ui/time-picker-input";
import { Period } from "@/components/ui/time-picker-utils";
import { TimePeriodSelect } from "@/components/ui/time-period-select";
import { useServerAction } from "zsa-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ToggleContext } from "@/components/interactive-overlay";
import {
  MAX_UPLOAD_IMAGE_SIZE,
  MAX_UPLOAD_IMAGE_SIZE_IN_MB,
} from "@/app-config";
import { useScopedI18n } from "@/locales/client";

const createEventSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  startsOn: z.date(),
  file: z
    .instanceof(File)
    .refine((file) => file.size < MAX_UPLOAD_IMAGE_SIZE, {
      message: `Your image was too large. It must be under ${MAX_UPLOAD_IMAGE_SIZE_IN_MB}MB`,
    })
    .optional(),
});

export function CreateEventForm({ groupId }: { groupId: GroupId }) {
  const { setIsOpen: setIsOverlayOpen } = useContext(ToggleContext);
  const { toast } = useToast();
  const t = useScopedI18n("group.events.form");
  const tCommon = useScopedI18n("common");
  const locale = useCurrentLocale();
  const isZh = locale === 'zh';
  const minuteRef = useRef<HTMLInputElement>(null);
  const hourRef = useRef<HTMLInputElement>(null);
  const periodRef = useRef<HTMLButtonElement>(null);
  const [date, setDate] = useState<Date>();
  const [period, setPeriod] = useState<Period>("PM");

  const { execute, error, isPending } = useServerAction(createEventAction, {
    onSuccess() {
      toast({
        title: tCommon("success"),
        description: t("successMessage"),
      });
      setIsOverlayOpen(false);
    },
    onError() {
      toast({
        title: tCommon("error"),
        variant: "destructive",
        description: t("errorMessage"),
      });
    },
  });

  const form = useForm<z.infer<typeof createEventSchema>>({
    resolver: zodResolver(createEventSchema),
    defaultValues: {
      name: "",
      description: "",
      startsOn: undefined,
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof createEventSchema>> = (
    values,
    event
  ) => {
    const newDate = new Date(
      values.startsOn?.getFullYear() ?? 0,
      values.startsOn?.getMonth() ?? 0,
      values.startsOn?.getDate() ?? 0,
      date?.getHours() ?? 0,
      date?.getMinutes() ?? 0,
      date?.getSeconds() ?? 0
    );

    const formData = new FormData();
    if (values.file) {
      formData.append("file", values.file);
    }

    execute({
      groupId,
      name: values.name,
      description: values.description,
      startsOn: newDate,
      fileWrapper: formData,
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-4 flex-1 px-2"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("eventName")}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>{t("description")}</FormLabel>
              <FormControl>
                <Textarea rows={7} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="startsOn"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>{t("dateOfEvent")}</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        formatDate(field.value, locale)
                      ) : (
                        <span>{t("pickDate")}</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => {
                      const todayMinus1Day = new Date();
                      todayMinus1Day.setDate(todayMinus1Day.getDate() - 1);
                      return date < todayMinus1Day;
                    }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormLabel className="mt-4">{t("timeOfEvent")}</FormLabel>

        <div className="flex items-end gap-2">
        {/* 根据语言环境显示不同的时间选择器 */}
        {isZh ? (
          // 中文环境：24小时制
          <>
            <div className="grid gap-1 text-center">
              <Label htmlFor="hours" className="text-xs">
                {t("hours")} {/* 显示为"时" */}
              </Label>
              <TimePickerInput
                picker="24hours"
                date={date}
                setDate={setDate}
                ref={hourRef}
                onRightFocus={() => minuteRef.current?.focus()}
              />
            </div>
            <div className="grid gap-1 text-center">
              <Label htmlFor="minutes" className="text-xs">
                {t("minutes")} {/* 显示为"分" */}
              </Label>
              <TimePickerInput
                picker="minutes"
                date={date}
                setDate={setDate}
                ref={minuteRef}
                onLeftFocus={() => hourRef.current?.focus()}
              />
            </div>
          </>
        ) : (
          // 英文环境：12小时制 + AM/PM
          <>
            <div className="grid gap-1 text-center">
              <Label htmlFor="hours" className="text-xs">
                {t("hours")} {/* 显示为"Hours" */}
              </Label>
              <TimePickerInput
                picker="12hours"
                period={period}
                date={date}
                setDate={setDate}
                ref={hourRef}
                onRightFocus={() => minuteRef.current?.focus()}
              />
            </div>
            <div className="grid gap-1 text-center">
              <Label htmlFor="minutes" className="text-xs">
                {t("minutes")} {/* 显示为"Minutes" */}
              </Label>
              <TimePickerInput
                picker="minutes"
                date={date}
                setDate={setDate}
                ref={minuteRef}
                onLeftFocus={() => hourRef.current?.focus()}
              />
            </div>
            <div className="grid gap-1 text-center">
              <Label htmlFor="period" className="text-xs">
                {t("period")} {/* 显示为"Period" */}
              </Label>
              <TimePeriodSelect
                period={period}
                setPeriod={setPeriod}
                date={date}
                setDate={setDate}
                ref={periodRef}
                onLeftFocus={() => minuteRef.current?.focus()}
              />
            </div>
          </>
        )}

          <div className="flex h-10 items-center">
            <Clock className="ml-2 h-4 w-4" />
          </div>
        </div>

        <FormField
          control={form.control}
          name="file"
          render={({ field: { value, onChange, ...fieldProps } }) => (
            <FormItem>
              <FormLabel>{t("image")}</FormLabel>
              <FormControl>
                <Input
                  {...fieldProps}
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    const file = event.target.files && event.target.files[0];
                    onChange(file);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>{t("errorTitle")}</AlertTitle>
            <AlertDescription>{error.message}</AlertDescription>
          </Alert>
        )}

        <LoaderButton isLoading={isPending}>
          <CalendarDays className={btnIconStyles} /> {t("createEvent")}
        </LoaderButton>
      </form>
    </Form>
  );
}
