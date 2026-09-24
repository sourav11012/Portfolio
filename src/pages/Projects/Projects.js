import React from "react";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Ecommerce from "../../assets/images/Ecommerce.webp";
import MLImage from "../../assets/images/AiMl.png";
import Imaginify from "../../assets/images/Imaginify.webp";
import InsightImg from "../../assets/images/insight.svg";
import ForesightImg from "../../assets/images/foresight.svg";
import "./Projects.css";

const projects = [
  {
    title: "Insight — Enterprise RAG Q&A",
    badge: "AI · RAG",
    image: InsightImg,
    alt: "Insight RAG platform",
    tags: ["Azure OpenAI", "Semantic Kernel", "RAG"],
    description:
      "Enterprise internal Q&A platform letting analysts query manufacturing reports and compliance documents in natural language, with agentic multi-step workflows inside the Azure tenant boundary.",
    link: "https://bcdilabs.com/innovate-nxt",
  },
  {
    title: "Foresight — Vision LLM Pipeline",
    badge: "AI · Vision",
    image: ForesightImg,
    alt: "Foresight vision pipeline",
    tags: ["YOLO", "Custom Vision", "Azure OpenAI"],
    description:
      "Vision LLM pipeline that inspects manufacturing lines in real time, routing defect-escalated frames to Azure OpenAI for automated root-cause analysis.",
    link: "https://bcdilabs.com/united-vision",
  },
  {
    title: "Imaginify — AI SaaS Platform",
    badge: "AI · SaaS",
    image: Imaginify,
    alt: "Imaginify AI SaaS",
    tags: ["Next.js", "TypeScript", "Cloudinary"],
    description:
      "AI-powered image SaaS with restoration, generative fill and background removal. Clerk auth, Stripe credits and payments, MongoDB persistence.",
    link: "https://aisaas-pied.vercel.app/",
  },
  {
    title: "Wave2Lip — Real Time",
    badge: "AI · ML",
    image: MLImage,
    alt: "Wave2Lip project",
    tags: ["Python", "PyTorch", "Real-time"],
    description:
      "Real-time lip-syncing with the Wav2Lip model — audio-driven talking-face generation running as a live pipeline.",
    link: "https://github.com/devkrish23/realtimeWav2lip",
  },
  {
    title: "E-commerce App",
    badge: "Full Stack",
    image: Ecommerce,
    alt: "E-commerce app",
    tags: ["Node.js", "React", "MongoDB"],
    description:
      "Full-stack e-commerce app with product catalog, cart, auth and order flow built on the MERN stack.",
    link: "https://github.com/Sourav0211/Ecommerce-App",
  },
];

const Projects = () => {
  return (
    <section className="section hairline-top" id="project">
      <div className="wrap">
        <SectionHeading
          index="03"
          eyebrow="Selected Projects"
          title="Work that speaks for itself."
          lede="AI systems and full-stack builds — selected work with source code and live demos."
        />
        <div className="project-index">
          {projects.map((p, i) => (
            <Fade direction="up" triggerOnce key={p.title}>
              <a
                className="project-row"
                href={p.link}
                target="_blank"
                rel="noreferrer"
              >
                <span className="project-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="project-main">
                  <span className="project-badge">{p.badge}</span>
                  <h3 className="font-display">{p.title}</h3>
                  <p>{p.description}</p>
                  <span className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </span>
                <span className="project-visual">
                  <img src={p.image} alt={p.alt} loading="lazy" />
                </span>
                <span className="project-link" aria-hidden="true">
                  <FiArrowUpRight size={22} />
                </span>
              </a>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
