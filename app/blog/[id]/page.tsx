"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "@/app/loading";
import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import SharedHeader from "@/src/components/SharedHeader";
import AsideBlog from "@/src/components/AsideBlog";
import Footer from "@/src/components/Footer";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const { homeData, loading } = useHomeData();
  const { lang, dict } = useLanguage();

  if (loading) return <Loading />;

  const blog = homeData?.blog_posts?.find((b) => b.id.toString() === id);

  if (!blog) return <div className="text-center py-10">Blog not found</div>;

  let parsedTitle = "";
  let parsedDesc = "";

  try {
    parsedTitle = blog.title ? JSON.parse(blog.title)[lang] ?? "" : "";
  } catch {
    parsedTitle = blog.title ?? "";
  }

  try {
    parsedDesc = blog.description
      ? JSON.parse(blog.description)[lang] ?? ""
      : "";
  } catch {
    parsedDesc = blog.description ?? "";
  }

  const tempEl = document.createElement("div");
  tempEl.innerHTML = parsedDesc;
  const plainText = tempEl.textContent || tempEl.innerText || "";

  const words = plainText.split(" ");
  const splitIndex = Math.min(50, words.length);
  const firstPart = words.slice(0, splitIndex).join(" ");
  const secondPart = words.slice(splitIndex).join(" ");

  return (
    <>
      <SharedHeader pageTitle={dict.blog} blogTitle={blog.name} />
      <div className="mx-6 xl:mx-[23%] py-16">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="flex flex-col gap-4 lg:col-span-2 items-center lg:items-start">
            <h2 className="text-3xl font-semibold text-black/80">
              {parsedTitle}
            </h2>
            {firstPart && (
              <p className="text-[#999999] text-lg mb-3 text-center lg:text-start">{firstPart}</p>
            )}

            {blog.image && (
              <div className="relative w-full h-[400px] rounded overflow-hidden">
                <Image
                  src={blog.image}
                  alt={parsedTitle}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {secondPart && (
              <p className="text-[#999999] text-lg mt-3  text-center lg:text-start">{secondPart}</p>
            )}
          </div>
          <AsideBlog />
        </div>
      </div>
      <div className="mt-[7rem]">
        <Footer />
      </div>
    </>
  );
}
