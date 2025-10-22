"use client";

import React, { useEffect } from "react";
import HeadNavbar from "./HeadNavbar";
import Navbar from "./Navbar";
import { useLanguage } from "../../src/context/LanguageContext";
import { usePathname } from "next/navigation";
import ScrollToTop from "./ScrollToTop";


function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { lang } = useLanguage();

  return (
    <div dir={lang === "ar" ? "rtl" : "ltr"}>
      <HeadNavbar />
      <Navbar />
      <main>
       {children}
      </main>
    </div>
  );
}

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    window.scrollTo(0, 0);
  }, [pathname]);
  return <>
  <LayoutWrapper>{children}</LayoutWrapper>
   <ScrollToTop />
  </> 
}
