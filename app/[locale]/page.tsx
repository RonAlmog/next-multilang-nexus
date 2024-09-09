import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";

export default async function Home({ params: { locale } }) {
  const i18Namespaces = ["home", "common"];
  const { t, resources } = await initTranslations(locale, i18Namespaces);
  const lng = "zz";
  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18Namespaces}
    >
      <div>
        <h1>{t("title")}</h1>
        <Link href={`/${lng}/about`}>{t("common:about_us")}</Link>
        <br />
        <Link href={`/${lng}/second`}>{t("to-second-page")}</Link>
        <br />
        <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
      </div>
    </TranslationsProvider>
  );
}
