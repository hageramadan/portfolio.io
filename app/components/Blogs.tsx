'use client';
import React from "react";
import BlogCard from "./BlogCard";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "@/app/loading";
import { useLanguage } from "@/src/context/LanguageContext";


function stripHtml(html: string) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.innerText || div.textContent || "";
}

function truncateText(text: string, maxLines: number = 3, charsPerLine: number = 120) {
  const maxChars = maxLines * charsPerLine;
  if (text.length <= maxChars) return text;
  return text.slice(0, maxChars) + "...";
}

export default function Blogs() {
  const { homeData, loading } = useHomeData();
  const { lang , dict } = useLanguage(); 

  if (loading) {
    return (
      <div className="text-center py-10">
        <Loading />
      </div>
    );
  }

  const blogPosts = homeData?.blog_posts ?? [];

  if (blogPosts.length === 0) {
    return (
     <div className="text-center py-10">
        <Loading />
      </div>
    );
  }

  const blogsContent = blogPosts.map((blog) => {
    let parsedTitle = "";
    let parsedDesc = "";

    try {
      parsedTitle = blog.title ? JSON.parse(blog.title)[lang] ?? "" : "";
    } catch {
      parsedTitle = blog.title ?? "";
    }

    try {
      parsedDesc = blog.description ? JSON.parse(blog.description)[lang] ?? "" : "";
    } catch {
      parsedDesc = blog.description ?? "";
    }

    const plainDesc = stripHtml(parsedDesc);
    const previewDesc = truncateText(plainDesc, 3, 30);

    return {
      id: blog.id,
      img: blog.image ?? `/images/fallback.avif`,
      title: parsedTitle || "No title",
      cont: previewDesc || "No description",
      fullDesc: plainDesc,
      date: blog.date ?? "Unknown date",
      role: blog.author ?? "Unknown author",
      commentNumber: (blog.comments ?? 0).toString(),
    };
  });

  return (
    <div className="mx-6 custom-blog-margin xl:mx-[23%] mb-[9rem] py-16 transition-all duration-500">
      <div className="text-center mb-12">
        <p className="text-pro font-semibold uppercase mb-2">{dict.blogSectionTitle}</p>
        <h2 className="text-3xl md:text-4xl font-bold uppercase">{dict.recentBlogTitle}</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {blogsContent.map((blog) => (
          <BlogCard
            key={blog.id}
            img={blog.img}
            title={blog.title}
            cont={
              <>
                {blog.cont}{" "}
                <span className="text-pro underline">
                  {lang==='en'?"Read more":"قراءة المزيد"}
                </span>
              </>
            }
            date={blog.date}
            role={blog.role}
            commentNumber={blog.commentNumber}
            blogId={blog.id}
          />
        ))}
      </div>
    </div>
  );
}
