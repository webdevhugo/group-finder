"use client";

import { z } from "zod";
import { use } from "react";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { pageTitleStyles } from "@/styles/common";
import { cn } from "@/lib/utils";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { changePasswordAction } from "./actions";
import { LoaderButton } from "@/components/loader-button";
import { useServerAction } from "zsa-react";
import { useI18n } from "@/locales/client";

const registrationSchema = z
  .object({
    password: z.string().min(8),
    token: z.string(),
    passwordConfirmation: z.string().min(8),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "Passwords don't match",
    path: ["passwordConfirmation"],
  });

export default function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ token: string }>;
}) {
  const t = useI18n();
  const resolvedParams = use(searchParams);
  const { token } = resolvedParams;

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      password: "",
      token,
      passwordConfirmation: "",
    },
  });

  const { execute, isPending, isSuccess, error } =
    useServerAction(changePasswordAction);

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    execute({
      token: values.token,
      password: values.password,
    });
  }

  return (
    <div className="py-24 max-w-[400px] space-y-6 mx-auto">
      {isSuccess && (
        <>
          <h1 className={cn(pageTitleStyles, "text-center")}>
            {t("auth.resetPassword.passwordUpdated")}
          </h1>
          <Alert variant="success">
            <Terminal className="h-4 w-4" />
            <AlertTitle>{t("auth.resetPassword.passwordUpdated")}</AlertTitle>
            <AlertDescription>
              {t("auth.resetPassword.passwordUpdatedDescription")}
            </AlertDescription>
          </Alert>

          <Button variant="default" asChild className="w-full">
            <Link href="/sign-in/email">{t("auth.resetPassword.loginWithNewPassword")}</Link>
          </Button>
        </>
      )}

      {!isSuccess && (
        <>
          <h1 className={cn(pageTitleStyles, "text-center")}>
            {t("auth.resetPassword.changePassword")}
          </h1>

          {error && (
            <Alert variant="destructive">
              <Terminal className="h-4 w-4" />
              <AlertTitle>{t("common.error")}</AlertTitle>
              <AlertDescription>{error.message}</AlertDescription>
            </Alert>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("auth.signIn.password")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder={t("auth.resetPassword.enterNewPassword")}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="passwordConfirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("auth.signUp.confirmPassword")}</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="w-full"
                        placeholder={t("auth.resetPassword.confirmNewPassword")}
                        type="password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <LoaderButton
                isLoading={isPending}
                className="w-full"
                type="submit"
              >
                {t("auth.resetPassword.changePassword")}
              </LoaderButton>
            </form>
          </Form>
        </>
      )}
    </div>
  );
}
