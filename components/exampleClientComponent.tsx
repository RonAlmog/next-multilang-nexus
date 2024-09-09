"use client";
import { useTranslation } from "react-i18next";

const ExampleClientComponent = () => {
  const { t } = useTranslation();
  const username = "Kiosaki";
  return <h3>{t("greeting", { username })}</h3>;
};

export default ExampleClientComponent;
