"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useHomeData } from "@/src/context/HomeDataContext";
import { useLanguage } from "@/src/context/LanguageContext";
import Loading from "@/app/loading";

export default function Freq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { homeData, loading } = useHomeData();
  const { lang } = useLanguage(); 

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (loading)
    return (
        <Loading />
    );
  if (!homeData) return <p className="text-center py-10">No data available.</p>;

  const faqTitle =  (lang === "ar" ? "الأسئلة الشائعة" : "Freequesntly Ask Question");
  const faqIntro = (lang === "ar" ? "إليك أهم الأسئلة وإجاباتها" : "Frequently Ask Question.");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 xl:px-[23%] py-16 bg-[#f4f5f9]">

      <div className="animate-bottom">
        <h5 className="text-pro uppercase font-semibold mb-2 text-center md:text-start">
          {faqTitle}
        </h5>

        <h4 className="text-3xl font-bold mb-6 leading-snug text-center md:text-start">
          {faqIntro}
        </h4>

        <div className="space-y-3">
          {homeData.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen ? "border-pro shadow-md" : "border-gray-300"
                }`}
              >
                <button
                  aria-label="open"
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium text-lg transition-all duration-300 ${
                    isOpen
                      ? "bg-pro text-white"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <span>{faq.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-white" : "text-gray-600"
                    }`}
                  />
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-40 opacity-100 py-3" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-5 text-gray-700 text-sm">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center space-y-6">
        <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/about.jpg"
            alt={lang === "ar" ? "معلومات عنا" : "About Us"}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="w-full space-y-4">
          {homeData.skills.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between">
                <p className="text-gray-800 font-semibold mb-2">{item.name}</p>
                <span className="text-pro">({item.progress}%)</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-pro h-3 rounded-full transition-all duration-500"
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
