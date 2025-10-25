'use client';
import React from "react";
import ProjectCard from "./ProjectCard";
import { useLanguage } from "../../src/context/LanguageContext";
import { useHomeData } from "@/src/context/HomeDataContext";
import Loading from "../loading";

interface ProjectsProps {
  className?: string;
  class2?: string;
}

const Projects: React.FC<ProjectsProps> = ({ className = "", class2 = "" }) => {
  const { homeData, loading } = useHomeData();
  const { dict } = useLanguage();

  // 🔸 أثناء التحميل
  if (loading) return <Loading />;

  // 🔸 لو مفيش بيانات أو فاضية
  if (!homeData?.projects || homeData.projects.length === 0)
    return <div className="text-center py-10"><Loading /></div>;

  const projectsContent = homeData.projects;

  return (
    <div className="relative animate-bottom">
      {/* ===== عنوان القسم ===== */}
      <div
        className={`h-[50vh] text-white text-center md:text-start px-6 pt-[5%] ${className}`}
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

      {/* ===== بطاقات المشاريع ===== */}
      <div className={`w-full flex justify-center ${class2}`}>
        <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          style={{
            paddingLeft: "clamp(24px, ((100vw - 1125px) / 2), 23%)",
            paddingRight: "clamp(24px, ((100vw - 1125px) / 2), 23%)",
          }}
        >
          {projectsContent.map((project, index) => {
            const validImage =
              typeof project?.image === "string" && project.image.startsWith("http")
                ? project.image
                : "/images/fallback.avif";

            const validDescription =
              project?.description && project.description.trim() !== ""
                ? project.description
                : "description";

            const validName =
              project?.name && project.name.trim() !== ""
                ? project.name
                : "name";

            return (
              <ProjectCard
                key={index}
                imageSrc={validImage}
                category={validDescription}
                title={validName}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
