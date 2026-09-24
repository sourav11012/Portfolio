import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { TechstackList } from "../../utils/TechstackList";
import "./Techstack.css";

const groups = [
  {
    label: "AI & Machine Learning",
    names: [
      "Azure AI Foundry",
      "OpenAI",
      "Hugging Face",
      "FAISS / Vector DBs",
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
    ],
  },
  {
    label: "Languages",
    names: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML", "CSS / SCSS"],
  },
  {
    label: "Frameworks & Backend",
    names: [
      "React JS",
      "Angular",
      "Node JS",
      "Express JS",
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Bootstrap",
      "Android Dev",
    ],
  },
  {
    label: "Data, Cloud & DevOps",
    names: ["MongoDB", "Firebase", "AWS", "Docker", "Git / Github"],
  },
];

const byName = Object.fromEntries(TechstackList.map((t) => [t.name, t]));

const Techstack = () => {
  return (
    <section className="section hairline-top techstack-section" id="techstack">
      <div className="wrap">
        <SectionHeading
          index="04"
          eyebrow="Technical Stack"
          title="Tools I reach for."
          lede="The languages, frameworks, and platforms behind the work above — from model training to production deploys."
        />
        <Fade direction="up" triggerOnce cascade damping={0.08}>
          <div className="tech-groups">
            {groups.map((g) => (
              <div className="tech-group" key={g.label}>
                <h3 className="tech-group-label">{g.label}</h3>
                <ul className="tech-list">
                  {g.names.map((name) => {
                    const tech = byName[name];
                    if (!tech) return null;
                    const Icon = tech.icon;
                    return (
                      <li key={tech._id} className="tech-pill">
                        <Icon className="tech-pill-icon" size={16} />
                        {tech.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Techstack;
