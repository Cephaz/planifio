'use server';
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { session } from "@/libs/sessions";
import RightNav from "./RightNav";

export default async function Header() {
  const email = await session().get('email');
  const t = await getTranslations("Header");

  return (
    <header className="flex gap-4 justify-between py-4 text-gray-600">
      <div className="flex items-center gap-10">
        <Link href={"/"} className="text-green-600 font-bold text-2xl">
          Planifio
        </Link>
        <nav className="flex gap-4">
          <Link href={"/features"}>{t("features")}</Link>
          <Link href={"/about"}>{t("about")}</Link>
          <Link href={"/pricing"}>{t("pricing")}</Link>
        </nav>
      </div>
      <RightNav email={email} />
    </header>
  );
}
