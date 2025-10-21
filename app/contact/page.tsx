"use client";
import React from "react";
import SharedHeader from "@/src/components/SharedHeader";
import ContactUs from "@/src/components/ContactUs";
import { useLanguage } from "@/src/context/LanguageContext";;
import dynamic from "next/dynamic";
import FooterComponent from "@/src/components/FooterComponent";
export default function Contact() {
  const { dict } = useLanguage();
  const MapComponent = dynamic(() => import("@/src/components/MapComponent"), {
    ssr: false,
  });

  return (
    <>
      <SharedHeader pageTitle={dict.contactUs} />
      <ContactUs />
      <div className="mx-10 xl:mx-[23%] rounded-2xl overflow-hidden mt-0">
        <MapComponent />
      </div>
      <FooterComponent className="mt-8" />
    </>
  );
}
