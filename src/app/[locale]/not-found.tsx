import { useLocale, useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFound");
  const locale = useLocale();

  return (
    <html lang={locale}>
      <body>
        {t("title")}
      </body>
    </html>
  );
}