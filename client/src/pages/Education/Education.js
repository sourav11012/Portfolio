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

const Education = () => {
  const [theme] = useTheme();
  return (
    <>
      <section className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Career Timeline
        </h2>
        <hr />
        <VerticalTimeline>
          {theme === "light" ? (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2024 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrTechnology />}
              lineColor="#45c2a2" // Fixed invalid color code
            >
              <h3 className="vertical-timeline-element-title">
                Teaching Assistant, Web Development
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of North Carolina - Charlotte, USA
              </h4>
            </VerticalTimelineElement>
          ) : (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1e1e2f", color: "#e0e0e0" }} // Dark background and light text
              contentArrowStyle={{ borderRight: "7px solid  #1e1e2f" }} // Arrow matching the background
              date="2024 - present"
              dateClassName="custom-date-dark" // Custom class for the date
              iconStyle={{ background: "#e1e1e1", color: "#1e1e1e" }} // Vibrant icon background
              icon={<GrTechnology />}
              lineColor="#ffcc00" // Bright accent color for the timeline line
            >
              <h3 className="vertical-timeline-element-title">
                Teaching Assistant, Web Development
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of North Carolina - Charlotte, USA
              </h4>
            </VerticalTimelineElement>
          )}

          {theme === "light" ? (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2023 - present"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                MS in Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of North Carolina - Charlotte, USA
              </h4>
            </VerticalTimelineElement>
          ) : (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1e1e2f", color: "#1e1e1e" }}
              contentArrowStyle={{ borderRight: "7px solid  " }}
              date="2023 - present"
              dateClassName="custom-date-dark"
              iconStyle={{ background: "#e1e1e1", color: "#1e1e1e" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                MS in Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                University of North Carolina - Charlotte, USA
              </h4>
            </VerticalTimelineElement>
          )}

          {theme === "light" ? (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2021 - 2022"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<GrTechnology />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tata Consultancy Limited, Mumbai, IN
              </h4>
            </VerticalTimelineElement>
          ) : (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1e1e2f", color: "#e0e0e0" }}
              contentArrowStyle={{ borderRight: "7px solid  #1e1e1e" }}
              date="2021 - 2022"
              dateClassName="custom-date-dark"
              iconStyle={{ background: "#e1e1e1", color: "#1e1e1e" }}
              icon={<GrTechnology />}
            >
              <h3 className="vertical-timeline-element-title">
                Software Engineer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Tata Consultancy Limited, Mumbai, IN
              </h4>
            </VerticalTimelineElement>
          )}

          {theme === "light" ? (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black" }}
              contentArrowStyle={{ borderRight: "7px solid  white" }}
              date="2017 - 2021"
              iconStyle={{ background: "#138781", color: "#fff" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                BE in Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Vidyalankar Institute of Technology, Mumbai, IN
              </h4>
            </VerticalTimelineElement>
          ) : (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#1e1e2f", color: "#e0e0e0" }}
              contentArrowStyle={{ borderRight: "7px solid  #e1e1e" }}
              date="2017 - 2021"
              dateClassName="custom-date-dark"
              iconStyle={{ background: "#e1e1e1", color: "#1e1e1e" }}
              icon={<MdSchool />}
            >
              <h3 className="vertical-timeline-element-title">
                BE in Computer Science
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Vidyalankar Institute of Technology, Mumbai, IN
              </h4>
            </VerticalTimelineElement>
          )}
        </VerticalTimeline>
      </section>
    </>
  );
};

export default Education;
