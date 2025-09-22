import React from "react";
import { MdSchool } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { useTheme } from "../../context/ThemeContext";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";

const experiences = [
  {
    date: "2025 - Present",
    title: "Software Developer",
    subtitle: "Sports Excitement - New York, USA",
    icon: <GrTechnology />,
    type: "work",
    position: "right",
  },
  {
    date: "2024 - 2025",
    title: "Teaching Assistant, Web Development",
    subtitle: "University of North Carolina - Charlotte, USA",
    icon: <GrTechnology />,
    type: "work",
    position: "right",
  },
  {
    date: "2023 - 2025",
    title: "MS in Computer Science",
    subtitle: "University of North Carolina - Charlotte, USA",
    icon: <MdSchool />,
    type: "education",
    position: "left",
  },
  {
    date: "2022 - 2023",
    title: "Software Engineer",
    subtitle: "Dataformatics - Mumbai, IN",
    icon: <GrTechnology />,
    type: "work",
    position: "right",
  },
  {
    date: "2021 - 2022",
    title: "Software Engineer",
    subtitle: "Tata Consultancy Limited, Mumbai, IN",
    icon: <GrTechnology />,
    type: "work",
    position: "right",
  },
  {
    date: "2021 - 2021",
    title: "Software Engineer",
    subtitle: "Tekman - Thane, IN",
    icon: <GrTechnology />,
    type: "work",
    position: "right",
  },
  {
    date: "2017 - 2021",
    title: "BE in Computer Science",
    subtitle: "Vidyalankar Institute of Technology, Mumbai, IN",
    icon: <MdSchool />,
    type: "education",
    position: "left",
  },
];

const Education = () => {
  const [theme] = useTheme();

  // Theme-specific styles
  const lightTheme = {
    contentStyle: { background: "white", color: "black" },
    contentArrowStyle: { borderRight: "7px solid white" },
    iconStyle: { background: "#138781", color: "#fff" },
    lineColor: "#45c2a2",
    dateClassName: "",
  };

  const darkTheme = {
    contentStyle: { background: "#1e1e2f", color: "#e0e0e0" },
    contentArrowStyle: { borderRight: "7px solid #1e1e2f" },
    iconStyle: { background: "#e1e1e1", color: "#1e1e1e" },
    lineColor: "#ffcc00",
    dateClassName: "custom-date-dark",
  };

  const themeStyles = theme === "light" ? lightTheme : darkTheme;

  return (
    <section className="container education section2" id="education">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        Career Timeline
      </h2>
      <hr />
      <VerticalTimeline lineColor={themeStyles.lineColor}>
        {experiences.map((exp, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${exp.type}`}
            contentStyle={themeStyles.contentStyle}
            contentArrowStyle={themeStyles.contentArrowStyle}
            date={exp.date}
            dateClassName={themeStyles.dateClassName}
            iconStyle={themeStyles.iconStyle}
            icon={exp.icon}
            position={exp.position}
          >
            <h3 className="vertical-timeline-element-title">{exp.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {exp.subtitle}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default Education;
