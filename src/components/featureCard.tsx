import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartColumn, faAngleRight } from "@fortawesome/free-solid-svg-icons";



export default function FeatureCard({
  title = ["Graphic", "Design"],
  icon = faChartColumn,
  className = "",
}) {
  return (
    <div
      className={`relative bg-[#1a1a1a] text-lg rounded-lg shadow-md group transition-all duration-300 ${className}
       hover:bg-pro hover:text-white`}
    >
      <div className="services active flex flex-col gap-8 p-[35px]">
        <FontAwesomeIcon icon={icon} size="2x" className="self-end text-pro" />
        <h3 className="self-start uppercase font-bold text-[18px] mb-3">
          {title[0]} <br /> {title[1]}
        </h3>
      </div>
      <div
        className="absolute left-1/2 text-pro
                   opacity-0 translate-x-0 group-hover:translate-x-8 group-hover:opacity-100 bottom-[-20px]
                   transition-all duration-300 py-1.5 px-2 bg-[#1a1a1a] rounded-full border-pro border-2"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
    </div>
  );
}
