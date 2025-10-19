'use client';
import React from "react";
import BlogCard from "./BlogCard";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Blogs() {
  const { dict } = useLanguage();

  const blogsContent = dict.blogTitles.slice(0, 3).map((title: string, index: number) => ({
    img: `/images/image_${index + 1}.jpg.webp`,
    title: title,
    cont: dict.blogContents[index],
    date: ["Sept. 23, 2020", "Oct. 10, 2020", "Nov. 5, 2020"][index],
    role: ["admin", "editor", "writer"][index],
    commentNumber: ["3", "5", "2"][index],
  }));

  return (
    <div className="mx-6 custom-blog-margin xl:mx-[23%] mb-[9rem] py-16 transition-all duration-500">
      <div className="text-center mb-12">
        <p className="text-pro font-semibold uppercase mb-2">
          {dict.blogSectionTitle}
        </p>
        <h2 className="text-3xl md:text-4xl font-bold uppercase">
          {dict.blogSectionSubtitle}
        </h2>
      </div>

      <div
        className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          lg:grid-cols-3
          gap-6
          justify-items-center
        "
      >
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
    </div>
  );
}
