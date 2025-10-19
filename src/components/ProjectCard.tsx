import Image from "next/image";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  imageSrc: string;
  category: string;
  title: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  category,
  title,
}) => {
  return (
    <div className="relative group w-full  h-[340px] overflow-hidden cursor-pointer rounded bg-gray-400">
      <Image
        src={imageSrc}
        alt={title}
        fill
        sizes="(max-width: 700px) 100vw, (max-width: 1024px) 50vw, 320px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div
        className="absolute inset-0 bg-black/50 flex flex-col justify-end items-center pb-4
        text-white opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 
        transition-all duration-500 ease-in-out z-10 px-4"
      >
        <div className="flex items-center gap-3 animate-slideRight">
          <div>
            <h4 className="text-sm uppercase tracking-widest text-pro">
              {category}
            </h4>
            <h2 className="text-2xl font-bold animate-slideBottom">{title}</h2>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="text-[1rem] text-white rounded-full transition-transform duration-300 group-hover:translate-x-2 px-3 py-3.5 bg-pro "
          />
        </div>
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#232429]to-transparent
        -translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-100"
      ></div>

      <div
        className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-[#232429]to-transparent
        translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out opacity-100"
      ></div>
    </div>
  );
};

export default ProjectCard;
