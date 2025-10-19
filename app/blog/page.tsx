'use client';
import React from "react";
import SharedHeader from "@/src/components/SharedHeader";
import Footer from "@/src/components/Footer";
import BlogComponent from "@/src/components/BlogComponent";
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
