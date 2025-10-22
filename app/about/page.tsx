'use client'
import React from "react";
import SharedHeader from "@/app/components/SharedHeader";
import Clients from "@/app/components/Clients";
import Rate from "@/app/components/Rate";
import Freq from "@/app/components/Freq";
import TeamMembers from "@/app/components/TeamMembers";
import Footer from "@/app/components/Footer";
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
