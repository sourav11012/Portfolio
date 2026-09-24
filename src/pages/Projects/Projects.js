import React from "react";
import Ecommerce from "../../assets/images/Ecommerce.webp";
import MLImage from "../../assets/images/AiMl.png";
import Imaginify from "../../assets/images/Imaginify.webp";
import InsightImg from "../../assets/images/insight.svg";
import ForesightImg from "../../assets/images/foresight.svg";
import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Insight: Enterprise RAG Q&A",
    badge: "AI / RAG",
    image: InsightImg,
    alt: "Insight RAG platform",
    tags: ["Azure OpenAI", "Semantic Kernel", "RAG"],
    description:
      "Enterprise internal Q&A platform letting analysts query manufacturing reports and compliance documents in natural language, with agentic multi-step workflows inside the Azure tenant boundary.",
    link: "https://github.com/sourav11012",
  },
  {
    title: "Foresight: Vision LLM Pipeline",
    badge: "AI / Vision",
    image: ForesightImg,
    alt: "Foresight vision pipeline",
    tags: ["YOLO", "Custom Vision", "Azure OpenAI"],
    description:
      "Vision LLM pipeline that inspects manufacturing lines in real time, routing defect-escalated frames to Azure OpenAI for automated root-cause analysis.",
    link: "https://github.com/sourav11012",
  },
  {
    title: "Imaginify: AI SaaS Platform",
    badge: "AI / SaaS",
    image: Imaginify,
    alt: "Imaginify AI SaaS",
    tags: ["Next.js", "TypeScript", "Cloudinary"],
    description:
      "AI-powered image SaaS with restoration, generative fill and background removal. Clerk auth, Stripe credits and payments, MongoDB persistence.",
    link: "https://aisaas-pied.vercel.app/",
  },
  {
    title: "Wave2Lip: Real Time",
    badge: "AI / ML",
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
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 390px)").matches;

    gsap.utils.toArray(".P-card").forEach((card) => {
      gsap.to(card, {
        scale: isMobile ? 0.9 : 0.8,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 10%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="project-background" id="project-background">
        <div className="container project" id="project">
          <h2 className="col-12 mt-3 mb-1 text-center">Projects</h2>
          <hr />
          <p className="pb-3 text-center">
            AI systems and full-stack builds — selected work with source code
            and live demos
          </p>
          <div className="project-container" id="ads">
            {projects.map((p, i) => (
              <div className={`col-md-4 P-card project-card${i}`} key={p.title}>
                <div className="card rounded card-color">
                  <div className="card-image">
                    <span className="card-notify-badge">{p.badge}</span>
                    <img src={p.image} alt={p.alt} loading="lazy" />
                  </div>
                  <div className="card-image-overly m-auto mt-3 ">
                    {p.tags.map((t) => (
                      <span className="card-details-badge mb-3" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="card-body text-center">
                    <div className="ad-title m-auto">
                      <h5 className="text-uppercase">{p.title}</h5>
                    </div>
                    <p className="project-desc">{p.description}</p>
                    <a
                      className="ad-btn"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
