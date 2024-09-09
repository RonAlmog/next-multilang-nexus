import Link from "next/link";

interface SecondPageProps {
  params: {
    lng: string;
  };
}

const LoginPage = async ({ params }: SecondPageProps) => {
  const locale = params.lng;
  const { t } = await getTranslationServerSide(locale, ["login", "common"]);
  return (
    <>
      <h1 className="text-3xl shadow-sm font-semi-bold">{t("title")}</h1>
      <div className="flex flex-col w-64 p-2 my-4">
        <input
          className="h-12 w-54 pr-8 pl-5 rounded focus:shadow focus:outline-none my-2"
          type="text"
          placeholder={t("username")}
        />
        <input
          className="h-12 w-54 pr-8 pl-5 rounded focus:shadow focus:outline-none my-2"
          type="password"
          placeholder={t("password")}
        />
        <button className="my-4 px-6 py-2 min-w-[120px] text-center text-violet-600 border border-violet-600 rounded hover:bg-violet-600 hover:text-white active:bg-indigo-500 focus:outline-none focus:ring">
          {t("submit", { ns: "common" })}
        </button>
      </div>
      <Link className="mybutton" href={`/${locale}/app`}>
        {t("back-to-home")}
      </Link>
    </>
  );
};

export default LoginPage;
