import Link from "next/link";
import initTranslations from "../i18n";
import local from "next/font/local";

export default async function Home({ params: { locale } }) {
  const { t } = await initTranslations(locale, ["home", "common"]);
  const lng = "zz";
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/about`}>{t("common:about_us")}</Link>
      <br />
      <Link href={`/${lng}/second`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
    </div>
  );
}
