'use client'
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "../loading";

export default function Clients() {
  const { dict } = useLanguage();
  const { homeData, loading } = useHomeData();

  if (loading) return <Loading />;

  const partners = homeData?.partner ?? [];
  if (partners.length === 0)
    return <div className="text-center py-10"><Loading /></div>;

  const imagesClients = partners.map((client) => client.image);

  return (
    <div className="px-6 xl:px-[23%] grid grid-cols-1 lg:grid-cols-3 gap-10 py-5 pt-16 animate-bottom">
      <div className="my-1 text-center md:text-start">
        <h2 className="text-3xl font-bold mb-4">{dict.distinguishedClients}</h2>
        <p className="text-gray-800 mb-6 leading-relaxed">{dict.clientsText}</p>
      </div>

      <div className="col-span-2 flex flex-col items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-center w-full">
          {imagesClients.map((client, index) => (
            <div
              key={index}
              className="m-2 cursor-pointer hover:scale-105 shadow-sm transition-transform duration-300 rounded-md bg-white p-3"
            >
              <Image
                src={
                  client?.startsWith("http")
                    ? client
                    : "/images/fallback.avif"
                }
                alt="Client logo"
                width={180}
                height={120}
                quality={60}
                loading="lazy" 
                decoding="async"
                placeholder="blur"
                blurDataURL="/images/fallback.avif"
                className="object-contain mx-auto transition-opacity duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>

        {imagesClients.length > 3 && (
          <div className="flex justify-center mt-8">
            <button
              aria-label="Show more clients"
              className="bg-pro cursor-pointer text-white font-semibold 
              px-6 py-2 rounded-md hover:bg-pro-max transition-all duration-300"
            >
              {dict.moreClients}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
