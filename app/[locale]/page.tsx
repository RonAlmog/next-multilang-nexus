import Link from "next/link";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider";
import ExampleClientComponent from "@/components/exampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";
import ClientPage from "./client-page/page";

export default async function Home({ params: { locale } }) {
  const i18Namespaces = ["home", "common"];
  const { t, resources } = await initTranslations(locale, i18Namespaces);

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={i18Namespaces}
    >
      <div>
        <h1 className="p-2 font-bold text-3xl text-teal-800">{t("title")}</h1>
        <ExampleClientComponent />
        <Link href={`/${locale}/about`}>{t("common:about_us")}</Link>
        <br />
        <Link href={`/${locale}/second`}>{t("to-second-page")}</Link>
        <br />
        <Link href={`/${locale}/client-page`}>{t("to-client-page")}</Link>
        <br />
        <LanguageChanger />
      </div>
    </TranslationsProvider>
  );
}
