'use client';
import { useTranslations } from "next-intl";
import { Link as LocalLink } from "@/i18n/routing";
import Link from "next/link";
import LocalSwitcher from "../LocalSwitcher";

export default function RightNav({email}: {email:string}) {
  const t = useTranslations("RightNav");
  const hasLoggedOut = location.href.includes('logged-out');

  if (email && !hasLoggedOut) {
    return (
      <nav className="flex items-center gap-4">
        <LocalLink href={"/dashboard"}>{t("dashboard")}</LocalLink>
        <a href={"/api/logout"}>{t("logout")}</a>
      </nav>
    );
  } else {
    return (
      <nav className="flex items-center gap-4">
        <LocalSwitcher />
        <Link href={"/api/auth"}>{t("login")}</Link>
        <LocalLink
          href={"/about"}
          className="bg-green-600 text-white py-2 px-4 rounded-full"
        >
          {t("getStarted")}
        </LocalLink>
      </nav>
    );
  }
}
