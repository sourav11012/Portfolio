import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Education.css";

const experiences = [
  { date: "2026 — Present", title: "AI Engineer", subtitle: "BCD iLabs · Chicago, USA" },
  { date: "2025 — 2026", title: "Software Developer", subtitle: "Sports Excitement · New York, USA" },
  { date: "2024 — 2025", title: "Teaching Assistant, Web Development", subtitle: "University of North Carolina · Charlotte, USA" },
  { date: "2023 — 2025", title: "MS in Computer Science", subtitle: "University of North Carolina · Charlotte, USA", edu: true },
  { date: "2022 — 2023", title: "Software Engineer", subtitle: "Dataformatics · Mumbai, IN" },
  { date: "2021 — 2022", title: "Software Engineer", subtitle: "Tata Consultancy Limited · Mumbai, IN" },
  { date: "2021", title: "Software Engineer", subtitle: "Tekman · Thane, IN" },
  { date: "2017 — 2021", title: "BE in Computer Science", subtitle: "Vidyalankar Institute of Technology · Mumbai, IN", edu: true },
];

const Education = () => {
  return (
    <section className="section hairline-top" id="education">
      <div className="wrap">
        <SectionHeading
          index="05"
          eyebrow="Journey"
          title="The road so far."
          lede="From Mumbai to Chicago — engineering roles across fintech, startups, and now enterprise AI."
        />
        <Fade direction="up" triggerOnce>
          <ol className="timeline">
            {experiences.map((exp) => (
              <li className="timeline-item" key={`${exp.date}-${exp.title}`}>
                <span className="timeline-dot" aria-hidden="true" />
                <div className="timeline-body">
                  <span className="timeline-date">{exp.date}</span>
                  <h3 className="font-display">
                    {exp.title}
                    {exp.edu && <span className="timeline-tag">Education</span>}
                  </h3>
                  <p>{exp.subtitle}</p>
                </div>
              </li>
            ))}
          </ol>
        </Fade>
      </div>
    </section>
  );
};

export default Education;
