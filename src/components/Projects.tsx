
'use client'
import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../context/LanguageContext";

interface ProjectsProps {
  className?: string;
  class2?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = "" ,class2=""}) => {
  const {dict}= useLanguage();
  const projectsContent = [
    { img: "/images/work-1.jpg.webp", title: "Web Development", cate: "Web App" },
    { img: "/images/work-2.jpg.webp", title: "Web Development", cate: "Web App" },
    { img: "/images/work-3.webp", title: "Web Development", cate: "Web App" },
    { img: "/images/work-4.jpg.webp", title: "Web Development", cate: "Web App" },
    { img: "/images/work-5.jpg.webp", title: "Web Development", cate: "Web App" },
    { img: "/images/work-6.jpg.webp", title: "Web Development", cate: "Web App" },
  ];

  return (
    <div className="relative">
      <div
        className={` h-[50vh] text-white px-6 pt-[5%] ${className}`}
        style={{
          paddingLeft: "clamp(24px, ((100vw - 1125px) / 2), 23%)",
          paddingRight: "clamp(24px, ((100vw - 1125px) / 2), 23%)",
        }}
      >
        <h4 className="text-pro text-sm uppercase tracking-widest mb-2">
          {dict.recentPortfolio}
        </h4>
        <h2 className="text-4xl font-bold leading-snug">
          {dict.weHaveDone} <br /> {dict.manyLatestProjects}
        </h2>
      </div>

      <div className={` w-full flex justify-center  ${class2}`}>
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            paddingLeft: "clamp(24px, ((100vw - 1125px) / 2), 23%)",
            paddingRight: "clamp(24px, ((100vw - 1125px) / 2), 23%)",
          }}
        >
          {projectsContent.map((project, index) => (
            <ProjectCard
              key={index}
              imageSrc={project.img}
              category={project.cate}
              title={project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
