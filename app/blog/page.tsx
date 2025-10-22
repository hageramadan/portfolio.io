'use client';
import React from "react";
import SharedHeader from "@/app/components/SharedHeader";
import Footer from "@/app/components/Footer";
import BlogComponent from "@/app/components/BlogComponent";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Blog() {
  const { dict } = useLanguage();

  return (
    <>
      <SharedHeader pageTitle={dict.blog} />
      <BlogComponent />
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
