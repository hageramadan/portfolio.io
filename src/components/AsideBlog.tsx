import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCalendarDays,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

import { useHomeData } from "@/src/context/HomeDataContext";
import { useLanguage } from "@/src/context/LanguageContext";

export default function AsideBlog() {
  const { homeData, loading } = useHomeData();
  const { lang } = useLanguage();
  const blogPosts = homeData?.blog_posts ?? [];

  const services = homeData?.services?.map((s) => s.name) ?? [];
  const tags = homeData?.skills?.map((s) => s.name) ?? [];
  const blogsContent = blogPosts.slice(0, 6).map((blog) => {
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

    const snippet = plainText.split(" ").slice(0, 20).join(" ");

    return {
      id: blog.id,
      img: blog.image ?? `/images/image_${blog.id}.jpg.webp`,
      title: parsedTitle,
      cont: (
        <>
          {snippet}{" "}
          <Link href={`/blog/${blog.id}`} className="text-pro underline">
            {lang === "en" ? "Read more" : "قراءة المزيد"}
          </Link>
        </>
      ),
      date: blog.date ?? "Unknown date",
      role: blog.author ?? "Unknown author",
      commentNumber: (blog.comments ?? 0).toString(),
    };
  });
  return (
    <>
      <aside className="p-6 rounded-2xl animate-bottom">
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-8">
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 p-2 outline-none text-sm"
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#999999] px-3"
          />
        </div>

        <div className="mb-10">
          <h3 className="uppercase font-bold mb-4 text-xl text-[#1a1a1a]">
            Services
          </h3>
          {services.map((service, index) => (
            <div key={`service-${index}`}>
              <h4 className="text-[#1a1a1a] py-3 font-[400] hover:text-pro transition-colors duration-300 cursor-pointer">
                <Link href="/blog">{service}</Link>
              </h4>
              {index !== services.length - 1 && (
                <hr className="border-gray-300" />
              )}
            </div>
          ))}
        </div>

        <div className="mb-3">
          <h4 className="uppercase font-bold text-[1.2rem] text-black/70 mb-5">
            Recent Posts
          </h4>
          <div className="flex flex-col gap-6">
            {blogsContent.slice(0, 3).map((blo) => (
              <div
                key={`recent-${blo.id}`}
                className="flex gap-4 items-start border-b border-gray-200 pb-5 last:border-0"
              >
                <div className="relative w-[100px] h-[80px] flex-shrink-0 rounded-md overflow-hidden cursor-pointer">
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
                      <FontAwesomeIcon icon={faComment} className="text-pro" />
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
            Tags
          </h4>
          <div className="flex gap-1.5 flex-wrap mt-3">
            {tags.map((tag, index) => (
              <div key={`tag-${index}`}>
                <div className="px-2 py-1.5 border text-[0.7rem] font-bold rounded border-gray-300 uppercase">
                  <Link href="/blog">{tag}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
