"use client";

import React from "react";
import { useParams } from "next/navigation";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "@/app/loading";
import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";
import SharedHeader from "@/src/components/SharedHeader";
import AsideBlog from "@/src/components/AsideBlog";
import Footer from "@/src/components/Footer";
import FormComponent from "@/src/components/FormComponent";
import Article from "@/src/components/Artcile";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const { homeData, loading } = useHomeData();
  const { lang, dict } = useLanguage();
  if (loading) return <Loading />;
  const blog = homeData?.blog_posts?.find((b) => b.id.toString() === id);
  if (!blog) return <div className="text-center py-10">
    <Loading />
  </div>;

  return (
    <>
      <SharedHeader pageTitle={dict.blog} blogTitle={blog.name} />
      <div className="mx-6 xl:mx-[23%] py-16">
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div className="flex flex-col lg:col-span-2  lg:items-star gap-6">
            <Article />
            <h4 className="text-2xl font-semibold my-5">{dict.LeaveComment}</h4>
            <FormComponent
              title=""
              namePlaceHolder={dict.yourName}
              emailPlaceHolder={dict.yourEmail}
              subjectPlaceHolder={dict.Website}
              messagePlaceHolder={dict.yourMessage}
              sendButton={dict.PostComment}
            />
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
