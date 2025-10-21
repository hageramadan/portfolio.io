'use client'
import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faUser,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { BlogCardType } from "@/types/blogCard";

const BlogCard: React.FC<BlogCardType> = ({
  img,
  title,
  cont,
  date,
  role,
  commentNumber,
  blogId,
}) => {
  return (
    <div className="w-[20rem] relative group shadow-gray-100 shadow rounded-md overflow-hidden bg-white">
      <div className="relative w-full aspect-[4/3] rounded-[5px] overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 320px"
        />
      </div>

      <div className="bg-white p-4 animate-left flex gap-2 justify-center items-center absolute top-[12rem] left-1/2 -translate-x-1/2 w-[85%] rounded-md shadow-md text-gray-700 text-sm">
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faCalendarDays} className="text-pro" />
          <p className="cursor-pointer hover:text-pro">{date}</p>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faUser} className="text-pro" />
          <p className="cursor-pointer hover:text-pro">{role}</p>
        </div>
        <div className="flex items-center gap-1">
          <FontAwesomeIcon icon={faComment} className="text-pro" />
          <p className="cursor-pointer hover:text-pro">{commentNumber}</p>
        </div>
      </div>

      <div className="pt-0 text-center p-5">
        <h3 className="text-[20px] py-4 font-bold uppercase mb-2 transition-all duration-300 hover:text-pro cursor-pointer">
          {title}
        </h3>
        <p className="text-[#999999] font-medium leading-relaxed pb-2">
          {cont}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
