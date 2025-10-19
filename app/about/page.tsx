'use client'
import React from "react";
import SharedHeader from "@/src/components/SharedHeader";
import Clients from "@/src/components/Clients";
import Rate from "@/src/components/Rate";
import Freq from "@/src/components/Freq";
import TeamMembers from "@/src/components/TeamMembers";
import Footer from "@/src/components/Footer";
import { useLanguage } from "@/src/context/LanguageContext";

export default function About() {
  const { dict } = useLanguage();
  
  return (
    <>
      <SharedHeader pageTitle={dict.aboutUs}/>
      <Clients />
      <Rate />
      <Freq />
      <TeamMembers />
      <div className="mt-40">
        <Footer />
      </div>
    </>
  );
}
