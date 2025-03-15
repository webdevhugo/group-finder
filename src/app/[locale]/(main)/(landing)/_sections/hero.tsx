import { SignedIn } from "@/components/auth";
import { SignedOut } from "@/components/auth";
import Container from "@/components/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getScopedI18n } from "@/locales/server";
import Image from "next/image";
import Link from "next/link";

export async function HeroSection() {
  const t = await getScopedI18n("landing.hero");
  const commonT = await getScopedI18n("common");

  return (
    <>
      <Container>
        <div className="flex flex-col md:flex-row gap-y-14 w-full justify-between">
          <div className="">
            <Badge className="text-sm md:text-base">
              {t("badge")}
            </Badge>
            <h1 className="text-5xl md:text-7xl max-w-3xl mt-10 leading-[1.2] font-semibold">
              {t("title")}
            </h1>
            <p className="mt-5 text-gray-500 text-lg max-w-[600px]">
              {t("description")}
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
              <SignedIn>
                <Button asChild>
                  <Link href={"/dashboard"}>{commonT("viewDashboard")}</Link>
                </Button>
              </SignedIn>

              <SignedOut>
                <Button asChild>
                  <Link href={"/sign-in"}>{commonT("createAccount")}</Link>
                </Button>
              </SignedOut>
            </div>
          </div>
          <Image
            className="rounded-xl w-[400px] h-[400px]"
            width="200"
            height="200"
            src="/group.jpeg"
            alt="hero image"
          />
        </div>
      </Container>
    </>
  );
}
