"use client";
import React from "react";
import SharedHeader from "@/src/components/SharedHeader";
import Footer from "@/src/components/Footer";
import ContactUs from "@/src/components/ContactUs";
import { useLanguage } from "@/src/context/LanguageContext";
import MapComponent from "@/src/components/MapComponent";
import dynamic from "next/dynamic";
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
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
