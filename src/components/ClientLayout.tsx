"use client";

import React from "react";
import HeadNavbar from "./HeadNavbar";
import Navbar from "./Navbar";
import { useLanguage } from "../context/LanguageContext";

function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <HeadNavbar />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>;
}
