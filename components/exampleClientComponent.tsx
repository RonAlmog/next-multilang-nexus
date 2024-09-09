"use client";
import { useTranslation } from "react-i18next";
import { Card } from "./ui/card";

const ExampleClientComponent = () => {
  const { t } = useTranslation();
  const username = "Kiosaki";
  return (
    <Card className="w-64 my-3 p-2 shadow-md">
      <h3>{t("greeting", { username })}</h3>
    </Card>
  );
};

export default ExampleClientComponent;
