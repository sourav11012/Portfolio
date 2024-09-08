import React from "react";
import { MdSchool } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
  return (
    <>
      <div className=" education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Career Timeline
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2024 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<GrTechnology />}
            lineColor="#45g5t2g"
          >
            <h3 className="vertical-timeline-element-title">
              Teaching Assistant, Network Based Application Development
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of North Carolina - Charlotte, USA
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2023 - present"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              MS in computer science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              University of North Carolina - Charlotte, USA
            </h4>
          </VerticalTimelineElement>
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
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2017 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              BE in computer science
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Vidyalankar Institute of Technology, Mumbai, IN
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;
