import React from "react";
import { Fade } from "react-awesome-reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import profilePhoto from "../../assets/images/myPhoto.webp";
import "./About.css";

const About = () => {
  return (
    <section className="section hairline-top" id="about">
      <div className="wrap">
        <SectionHeading
          index="01"
          eyebrow="About"
          title="Engineer with a product sense."
          lede="I care about the details users feel and the systems they never see — from prompt design to pipeline reliability."
        />
        <div className="row g-5 align-items-start">
          <div className="col-lg-5">
            <Fade direction="left" triggerOnce>
              <figure className="about-figure">
                <img src={profilePhoto} alt="Portrait of Sourav Shetye" loading="lazy" />
                <figcaption>
                  Sourav Shetye — Chicago, Illinois
                </figcaption>
              </figure>
            </Fade>
          </div>
          <div className="col-lg-7">
            <Fade direction="right" triggerOnce>
              <div className="about-copy">
                <p className="font-display about-lead">
                  I'm an AI Engineer with 4 years of experience designing
                  intelligent data pipelines, LLM systems, and scalable
                  backend services for enterprise fintech and banking clients.
                </p>
                <p>
                  I specialize in <strong>Azure AI Foundry</strong> deployments,
                  fine-tuned ML models for high-volume transaction filtering,
                  compliance-safe LLM integrations, and internal{" "}
                  <strong>RAG tooling</strong> for document intelligence.
                </p>
                <p>
                  Currently at <strong>BCD iLabs</strong> in Chicago, I build
                  enterprise AI platforms — from RAG-powered Q&amp;A over
                  manufacturing reports to vision-LLM pipelines for real-time
                  defect analysis — on a strong foundation in Python, Java,
                  cloud infrastructure (AWS, Azure, GCP), and Azure
                  DevOps-driven CI/CD.
                </p>
                <p className="about-personal">
                  When I'm not shipping AI systems, I enjoy music, movies, and
                  staying active through sports and workouts.
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
