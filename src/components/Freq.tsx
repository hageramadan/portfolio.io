"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "@/src/context/LanguageContext";
interface FAQ {
  question: string;
  answer: string;
}

export default function Freq() {
  const {dict}=useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "How to fix a problem?",
      answer:
        "To fix a problem, first identify the cause, then test solutions one by one until it’s resolved.",
    },
    {
      question: "What services do you provide?",
      answer:
        "We provide digital solutions, web development, and online marketing strategies tailored to your business.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can reach our support team anytime via email, live chat, or phone — we’re always ready to help.",
    },
    {
      question: "Do you offer custom development?",
      answer:
        "Yes, we offer fully customized web and mobile app development solutions to meet your specific needs.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-[15%] lg:px-[23%] py-16 bg-[#f4f5f9]">

      <div className="animate-bottom">
        <h5 className="text-pro uppercase font-semibold mb-2">
         {dict.faqTitle}
        </h5>
        <h4 className="text-3xl font-bold mb-6 leading-snug">
          {dict.faqTitle}
        </h4>

        <div className="space-y-3">
          {faqs.map((faq: FAQ, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-lg overflow-hidden shadow-sm transition-all duration-300 ${
                  isOpen ? "border-pro shadow-md" : "border-gray-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center px-5 py-4 text-left font-medium text-lg transition-all duration-300 ${
                    isOpen
                      ? "bg-pro text-black"
                      : "bg-white text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <span>{faq.question}</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-black" : "text-gray-600"
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
            alt="About Us"
            fill
            className="object-cover"
             sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <div className="w-full space-y-4">
          {[
            { title: "Creative Design", percent: 80 },
            { title: "Product Engineering", percent: 80 },
            { title: "Marketing Strategy", percent: 80 },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-gray-800 font-semibold mb-2">
                {item.title}{" "}
                <span className="text-pro">({item.percent}%)</span>
              </p>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div
                  className="bg-pro h-3 rounded-full transition-all duration-500"
                  style={{ width: `${item.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
