'use client';
import React from "react";
import SharedHeader from "@/src/components/SharedHeader";
import Footer from "@/src/components/Footer";
import ContactUs from "@/src/components/ContactUs";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Contact() {
  const { dict } = useLanguage();

  return (
    <>
      <SharedHeader pageTitle={dict.contactUs} />
      <ContactUs />
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
