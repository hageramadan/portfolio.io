"use client";

import React from "react";
import BlogCard from "@/src/components/BlogCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

export default function BlogComponent() {
  const { dict, lang } = useLanguage();

  const blogsContent = dict.blogTitles.map((title: string, index: number) => ({
    img: `/images/image_${index + 1}.jpg.webp`,
    title,
    cont: dict.blogContents[index],
    date: [
      "Sept. 23, 2020",
      "Oct. 10, 2020",
      "Nov. 5, 2020",
      "Dec. 1, 2020",
      "Jan. 20, 2021",
      "Nov. 5, 2020",
    ][index],
    role: ["admin", "editor", "writer", "admin", "editor", "writer"][index],
    commentNumber: ["3", "5", "2", "4", "8", "2"][index],
  }));

  const Services = dict.services;
  const TagCloud = dict.tags;

  return (
    <div
      className="mx-6 custom-blog-margin xl:mx-[23%] mb-[9rem] py-16 transition-all duration-500"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-top">
          {blogsContent.map((blog, index) => (
            <BlogCard
              key={index}
              img={blog.img}
              title={blog.title}
              cont={blog.cont}
              date={blog.date}
              role={blog.role}
              commentNumber={blog.commentNumber}
            />
          ))}
        </div>

        <aside className="p-6 rounded-2xl animate-bottom">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-8">
            <input
              type="text"
              placeholder={dict.search}
              className="flex-1 p-2 outline-none text-sm"
            />
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="text-[#999999] px-3"
            />
          </div>

          <div className="mb-10">
            <h3 className="uppercase font-bold mb-4 text-xl text-[#1a1a1a]">
              {dict.servicesTitle}
            </h3>
            {Services.map((service: string, index: number) => (
              <div key={index}>
                <h4 className="text-[#1a1a1a] py-3 font-[400] hover:text-pro transition-colors duration-300 cursor-pointer">
                  <Link href="/blog">{service}</Link>
                </h4>
                {index !== Services.length - 1 && (
                  <hr className="border-gray-300" />
                )}
              </div>
            ))}
          </div>
          <div className="mb-3">
            <h4 className="uppercase font-bold text-[1.2rem] text-black/70 mb-5">
              {dict.recentBlogTitle}
            </h4>
            <div className="flex flex-col gap-6">
              {blogsContent.slice(0, 3).map((blo, index) => (
                <div
                  key={index}
                  className="flex gap-4 items-start border-b border-gray-200 pb-5 last:border-0"
                >
                  <div className="relative w-[100px] h-[80px] flex-shrink-0 rounded-md overflow-hidden">
                    <Image
                      src={blo.img}
                      alt={blo.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 320px"
                    />
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="text-[15px] font-semibold leading-snug mb-2 uppercase hover:text-pro cursor-pointer transition-all duration-300">
                      {blo.title.length > 40
                        ? blo.title.slice(0, 40) + "..."
                        : blo.title}
                    </h3>
                    <div className="flex items-center text-[13px] text-gray-500 gap-3">
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faCalendarDays}
                          className="text-pro"
                        />
                        <span>{blo.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <FontAwesomeIcon
                          icon={faComment}
                          className="text-pro"
                        />
                        <span>{blo.commentNumber}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-6">
            <h4 className="uppercase font-bold text-xl text-black/80 mb-[20px]">
              {dict.tagCloudTitle}
            </h4>
            <div className="flex gap-1.5 flex-wrap mt-3">
              {TagCloud.map((tag: string, index: number) => (
                <div key={index}>
                  <div className="px-2 py-1.5 border text-[0.7rem] font-bold rounded border-gray-300 uppercase">
                    <Link href="/blog">{tag}</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="my-6 mt-5">
            <h4 className="uppercase font-bold text-[1.2rem] text-black/70 my-5">
              {dict.paragraphTitle}
            </h4>
            <p className="text-[#999999] text-bold text-[15px]">
              {dict.paragraphText}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
