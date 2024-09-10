import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LocalSwitcher from "../LocalSwitcher";

export default function Header() {
  const t = useTranslations("Header");

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
      <nav className="flex items-center gap-4">
        <LocalSwitcher />
        <Link href={"/login"}>{t("login")}</Link>
        <Link
          href={"/signup"}
          className="bg-green-600 text-white py-2 px-4 rounded-full"
        >
          {t("register")}
        </Link>
      </nav>
    </header>
  );
}
