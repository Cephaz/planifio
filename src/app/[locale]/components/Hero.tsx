'use client';
import { Play } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="text-center mt-24">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        {`${t("scheduling")} `}
        <span className="text-green-600 cool-underline">{t("made")}</span>
        <br />
        {t("forPeopleLikeYou")}
      </h1>
      <p className="text-gray-600 mt-4">
        {t("planifioIsManagementTool")}
        <br />
        {t("ItIsDesignedToBeSimple")}
      </p>
      <div className="mt-4 flex gap-4 justify-center">
        <Link href={"/"} className="bg-black text-white py-2 px-4 rounded-full">
          {t("getStartedForFree")}
        </Link>
        <Link href={"/"} className="border border-gray-300 rounded-full py-2 px-4 inline-flex gap-1 items-center text-gray-800">
          <Play size={18} />
          {t("watchVideo")}
        </Link>
      </div>
    </section>
  );
}
