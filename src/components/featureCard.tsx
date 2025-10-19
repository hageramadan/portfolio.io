import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../context/LanguageContext";



export default function FeatureCard({
  title = ["Graphic", "Design"],
  icon = faChartColumn,
  className = "",
}) {
  const {lang} = useLanguage();
  return (
    <div
      className={`relative bg-[#1a1a1a] text-lg animate-bottom rounded-lg shadow-md cursor-pointer group transition-all duration-300 ${className}
       hover:bg-pro hover:text-white`}
    >
      <div className="services active flex flex-col gap-8 p-[35px] items-center">
        <FontAwesomeIcon icon={icon} size="2x" className="md:self-end text-center text-pro" />
        <h3 className="md:self-start text-center uppercase font-bold text-[18px] mb-3">
          {title[0]} <br /> {title[1]}
        </h3>
      </div>
      <div
        className={`absolute start-1/2 text-pro
                   opacity-0 group-hover:opacity-100 bottom-[-17px]
                   transition-all duration-300 py-1.5 px-2 bg-[#1a1a1a] rounded-full border-pro border-2
                  ${lang==='ar' ? 'rotate-180  translate-x-8 group-hover:translate-x-0 ' :' translate-x-0 group-hover:translate-x-8 '}
                  `}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}
