'use client'
import Image from "next/image";
import React from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Clients() {
    const { dict } = useLanguage();
  const imagesClients = [
    "/images/c1.png",
    "/images/c2.webp",
    "/images/c3.webp",
    "/images/c4.jpg",
    "/images/c5.webp",
    "/images/c6.jpg",
  ];

  return (
    <>
      <div className="mx-10 custom:mx-[23%] lg:mx-[23%] grid grid-cols-1 lg:grid-cols-3 gap-10 py-5 pt-16 animate-bottom">
        <div className="my-1">
          <h2 className="text-3xl font-bold mb-4">
           {dict.distinguishedClients}
          </h2>
          <p className="text-gray-800 mb-6 leading-relaxed">
            Every success partner with us has a story worth telling. If you
            aspire to create your own remarkable success story, you must first
            know what you want.
          </p>
        </div>

        <div className="col-span-2 flex flex-col items-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center w-full">
            {imagesClients.map((client) => (
              <div
                key={client}
                className="m-2 cursor-pointer hover:scale-105 shadow transition-transform duration-300"
              >
                <Image
                  src={client}
                  alt="client logo"
                  width={220}
                  height={220}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button aria-label="Search"
              className="bg-pro cursor-pointer text-black font-semibold 
              px-6 py-2 rounded-md hover:bg-pro-max transition-all"
            >
               {dict.moreClients}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
