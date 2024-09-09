import Link from "next/link";
import LocalSwitcher from "../switcher";
import { useTranslations } from "next-intl";

export default function Header() {
  const t = useTranslations("Home");

  return (
    <header className="flex gap-4 justify-between py-4 text-gray-600">
      <div className="flex items-center gap-10">
        <Link href={"/"} className="text-green-600 font-bold text-2xl">
          Planifio
        </Link>
        <nav className="flex gap-4">
          <Link href={"/features"}>{t("Header.Features")}</Link>
          <Link href={"/about"}>{t("Header.About")}</Link>
          <Link href={"/pricing"}>{t("Header.Pricing")}</Link>
        </nav>
      </div>
      <nav className="flex items-center gap-4">
        <LocalSwitcher />
        <Link href={"/login"}>{t("Header.Login")}</Link>
        <Link
          href={"/signup"}
          className="bg-green-600 text-white py-2 px-4 rounded-full"
        >
          {t("Header.Register")}
        </Link>
      </nav>
    </header>
  );
}
