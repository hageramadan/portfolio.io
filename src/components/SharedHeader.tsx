'use client';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useLanguage } from "@/src/context/LanguageContext";

interface SharedHeaderProps {
  pageTitle: string;
}

const SharedHeader: React.FC<SharedHeaderProps> = ({ pageTitle }) => {
  const { dict, lang } = useLanguage();

  return (
    <div className="shared h-[65.5vh] text-white flex items-end">
      <div className={`mx-6 custom-blog-margin xl:mx-[23%] pb-11 animate-bottom ${lang === 'ar' ? 'text-right' : 'text-left'}`}>
        <Link
          href="/"
          className=" text-xl flex items-center transition duration-150"
        >
          <span className="hover:text-pro transition duration-150">
            {dict.home}
          </span>
          <FontAwesomeIcon
            icon={faAngleRight}
            className={`text-[#e0e0e0] text-[1rem] mt-1.5 mx-1 group-hover:text-pro transition duration-150 ${
              lang === 'ar' ? 'rotate-180' : ''
            }`}
          />
          <span className="text-[#e0e0e0] capitalize group-hover:text-pro transition duration-150">
            {pageTitle}
          </span>
        </Link>

        <h2 className="text-[3rem] font-bold uppercase mt-2">{pageTitle}</h2>
      </div>
    </div>
  );
};

export default SharedHeader;
