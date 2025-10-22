'use client';
import React from "react";
import SharedHeader from "@/app/components/SharedHeader";
import Footer from "@/app/components/Footer";
import Projects from "@/app/components/Projects";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Portfolio() {
  const { dict } = useLanguage();

  return (
    <>
      <SharedHeader pageTitle={dict.portfolio} />
      <div className="mt-20">
        <Projects className="hidden" class2="flex" />
      </div>
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
