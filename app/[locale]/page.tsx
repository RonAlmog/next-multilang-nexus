import Link from "next/link";

export default function Home() {
  const lng = "zz";
  return (
    <div>
      <h1>{t("title")}</h1>
      <Link href={`/${lng}/second`}>{t("to-second-page")}</Link>
      <br />
      <Link href={`/${lng}/client-page`}>{t("to-client-page")}</Link>
    </div>
  );
}
