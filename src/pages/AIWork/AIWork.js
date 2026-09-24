import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import { SiOpenai } from "react-icons/si";
import { BsCpu, BsDatabaseCheck } from "react-icons/bs";
import "./AIWork.css";

const items = [
  {
    icon: SiOpenai,
    title: "LLM Orchestration & Guardrails",
    text: "Hardened LLM workflows — orchestration, context handling, validations and guardrails — for reliable recommendations, cutting data processing time by 90%.",
  },
  {
    icon: BsDatabaseCheck,
    title: "RAG & Document Intelligence",
    text: "Enterprise RAG on Azure AI Search + Semantic Kernel. Natural-language Q&A over manufacturing reports and compliance documents, inside tenant boundaries.",
  },
  {
    icon: BsCpu,
    title: "Agentic Workflows",
    text: "Multi-step autonomous agents that plan and execute tasks within Azure tenant guardrails — compliant by design, measurable in production.",
  },
];

const AIWork = () => {
  return (
    <section className="section hairline-top aiwork-section" id="aiwork">
      <div className="wrap">
        <SectionHeading
          index="02"
          eyebrow="AI Work"
          title="Production LLM systems, not demos."
          lede="What I ship as an AI Engineer at BCD iLabs — systems running in enterprise environments, held to enterprise standards."
        />
        <Fade direction="up" triggerOnce cascade damping={0.12}>
          <div className="row aiwork-grid">
            {items.map((item, i) => (
              <div className="col-md-4" key={item.title}>
                <article className="aiwork-item">
                  <span className="aiwork-num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="aiwork-icon">
                    <item.icon size={22} />
                  </span>
                  <h3 className="font-display">{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AIWork;
