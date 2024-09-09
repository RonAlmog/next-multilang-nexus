"use client";

import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ClientPage = () => {
  const { t, i18n } = useTranslation();
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h1 className="text-3xl shadow-sm font-semi-bold">{t("title")}</h1>
      <p className="px-1 my-2">{counter}</p>
      <div className="my-2 p-3 border-2 border-slate-800 rounded-xl shadow-lg w-56 overflow-hidden">
        <button
          className="px-3 mx-3 border border-slate-600 rounded-md shadow-sm"
          onClick={() => setCounter(Math.max(0, counter - 1))}
        >
          -
        </button>
        <button
          className="px-3 mx-3 border border-slate-600 rounded-md shadow-sm"
          onClick={() => setCounter(Math.min(10, counter + 1))}
        >
          +
        </button>
      </div>
      <Link href="/">
        <button type="button" className="back">
          {t("back-to-home")}
        </button>
      </Link>
    </>
  );
};

export default ClientPage;
