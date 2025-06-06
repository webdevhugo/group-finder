import * as React from "react";
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import { env } from "@/env";
import { Group } from "@/db/schema";
import { applicationName } from "@/app-config";
import { getScopedI18n } from "@/locales/server";

export const BASE_URL = env.HOST_NAME;

export async function InviteEmail({
  group,
  token,
}: {
  group: Group;
  token: string;
}) {
  const t = await getScopedI18n('email.invite');

  const previewText = t('preview');

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${BASE_URL}/group.jpeg`}
                width="160"
                height="48"
                alt="The Group Finder"
                className="my-0 mx-auto"
              />
            </Section>

            <Section className="text-center mt-[32px] mb-[32px]">
              <Text className="text-black font-medium text-[14px] leading-[24px] mb-8">
                {t('message', { groupName: group.name })}
              </Text>

              <Text className="text-black font-medium text-[14px] leading-[24px]">
                <Link
                  href={`${BASE_URL}/invites/${token}`}
                  target="_blank"
                  className="text-[#2754C5] underline"
                >
                  {t('actionButton')}
                </Link>
              </Text>
            </Section>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Text className="text-[#666666] text-[12px] leading-[24px] flex items-center justify-center">
              {t('footer', { appName: applicationName })}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}