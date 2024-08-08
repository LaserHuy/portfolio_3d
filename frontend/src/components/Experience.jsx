import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import { motion } from "framer-motion";


import { styles } from "../style";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import ToolIcons from "./toolicons/ToolIcons.jsx";

import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)", color: "#fff", boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.2)" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: "#050816", hover: "red" }}
    iconClassName="shadow-none border-[5px] border-solid border-[#232631]"
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain filter invert brightness-0 
          transition duration-200 ease-in-out hover:filter-none"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
      <p 
        className="text-secondary text-[16px] font-semibold" 
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <p 
        className="mt-5 text-secondary text-[16px] font-semibold" 
      >
        Tools achieved:
      </p>
      <ToolIcons
        className="mt-5 flex flex-nowrap gap-4 text-[#dfd9ff] object-contain"
        iconSize={30}
        borderSize={5}
        iconNames={experience.skills}
      />
    </div>
  </VerticalTimelineElement>
)

const Experience = ({ isHover, setIsHover }) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have learned so far</p>
        <h2
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
          className={`${styles.sectionHeadText} inline-block`}>Education</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)" >
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}    
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "education");
