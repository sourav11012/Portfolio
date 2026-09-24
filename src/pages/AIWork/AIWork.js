import React from "react";
import "./AIWork.css";
import { Fade } from "react-awesome-reveal";
import { SiOpenai, SiMicrosoftazure } from "react-icons/si";
import { BsCpu, BsDatabaseCheck } from "react-icons/bs";

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
    <>
      <div className="container aiwork" id="aiwork">
        <h2 className="col-12 mt-3 mb-1 text-center">AI WORK</h2>
        <hr />
        <p className="pb-3 text-center">
          What I ship as an AI Engineer at BCD iLabs — production LLM systems,
          not demos
        </p>
        <Fade direction="up" triggerOnce cascade damping={0.12}>
          <div className="row aiwork-grid">
            {items.map((item) => (
              <div className="col-md-4" key={item.title}>
                <div className="card aiwork-card m-2">
                  <div className="card-body text-center">
                    <item.icon className="aiwork-icon" />
                    <h5>{item.title}</h5>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>
        <p className="text-center aiwork-foot">
          <SiMicrosoftazure className="me-1" />
          Azure AI Foundry · Azure OpenAI · Semantic Kernel · AKS
        </p>
      </div>
    </>
  );
};

export default AIWork;
