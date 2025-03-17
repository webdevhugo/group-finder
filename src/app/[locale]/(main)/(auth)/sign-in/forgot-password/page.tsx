"use client";

import { z } from "zod";

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
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useServerAction } from "zsa-react";
import { LoaderButton } from "@/components/loader-button";
import { resetPasswordAction } from "./actions";
import { useToast } from "@/components/ui/use-toast";
import { useScopedI18n } from "@/locales/client";
const registrationSchema = z.object({
  email: z.string().email(),
});

export default function ForgotPasswordPage() {
  const { toast } = useToast();
  const t = useScopedI18n('auth.forgotPassword');
  const { execute, isPending, isSuccess } = useServerAction(
    resetPasswordAction,
    {
      onError({ err }) {
        toast({
          title: "Something went wrong",
          description: err.message,
          variant: "destructive",
        });
      },
    }
  );

  const form = useForm<z.infer<typeof registrationSchema>>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof registrationSchema>) {
    execute(values);
  }

  return (
    <div className="py-24 mx-auto max-w-[400px] space-y-6">
      <h1 className={cn(pageTitleStyles, "text-center")}>{t('title')}</h1>

      {isSuccess && (
        <Alert variant="success">
          <Terminal className="h-4 w-4" />
          <AlertTitle>{t('success.title')}</AlertTitle>
          <AlertDescription>
            {t('success.description')}
          </AlertDescription>
        </Alert>
      )}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('email')}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="w-full"
                    placeholder={t('emailPlaceholder')}
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <LoaderButton isLoading={isPending} className="w-full" type="submit">
            {t('button')}
          </LoaderButton>
        </form>
      </Form>
    </div>
  );
}
