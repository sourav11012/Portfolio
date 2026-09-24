import React from "react";
import "./About.css";
import profilePhoto from "../../assets/images/myPhoto.webp";

const About = () => {
  return (
    <>
      <div className="container about section1">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePhoto} alt="profile pic" loading="lazy" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I'm an <b>AI Engineer</b> with 4 years of experience designing
              intelligent data pipelines, LLM harness engineering, and scalable
              backend services for enterprise fintech and banking clients.
              <br />
              <br />I specialize in <b>Azure AI Foundry</b> deployments,
              fine-tuned ML models for high-volume transaction filtering,
              compliance-safe LLM integrations, and internal{" "}
              <b>RAG tooling</b> for document intelligence.
              <br />
              <br />
              Currently at <b>BCD iLabs</b> in Chicago, I build enterprise AI
              platforms — from RAG-powered Q&A over manufacturing reports to
              vision-LLM pipelines for real-time defect analysis — with a
              strong foundation in Python, Java, cloud infrastructure (AWS,
              Azure, GCP), and Azure DevOps-driven CI/CD.
              <br />
              <br />
              When I'm not shipping AI systems, I enjoy listening to music,
              watching movies, and staying active through sports and workouts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
