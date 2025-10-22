"use client";

import React from "react";
import BlogCard from "@/app/components/BlogCard";
import { useHomeData } from "@/src/context/HomeDataContext";
import { useLanguage } from "@/src/context/LanguageContext";
import Loading from "@/app/loading";
import AsideBlog from "./AsideBlog";

export default function BlogComponent() {
  const { homeData, loading } = useHomeData();
  const { lang } = useLanguage();

  if (loading) {
    return (
      <div className="text-center py-10">
        <Loading />
      </div>
    );
  }

  const blogPosts = homeData?.blog_posts ?? [];

  if (blogPosts.length === 0) {
    return <div className="text-center py-10">No blog posts available.</div>;
  }

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

    const snippet = plainText.split(" ").slice(0, 15).join(" ");

    return {
      id: blog.id,
      img: blog.image ?? `/images/image_${blog.id}.jpg.webp`,
      title: parsedTitle,
      cont: (
        <>
          {snippet}{" "}
          <span className="text-pro underline">
            {lang === "en" ? "Read more" : "قراءة المزيد"}
          </span>
        </>
      ),
      date: blog.date ?? "Unknown date",
      role: blog.author ?? "Unknown author",
      commentNumber: (blog.comments ?? 0).toString(),
    };
  });

  return (
    <div
      className="mx-6 custom-blog-margin xl:mx-[23%] mb-[9rem] py-16 transition-all duration-500"
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 animate-top h-fit mx-auto">
          {blogsContent.map((blog) => (
            <BlogCard
              key={blog.id}
              img={blog.img}
              title={blog.title}
              cont={blog.cont}
              date={blog.date}
              role={blog.role}
              commentNumber={blog.commentNumber}
              blogId={blog.id}
            />
          ))}
        </div>
        <AsideBlog />
      </div>
    </div>
  );
}
