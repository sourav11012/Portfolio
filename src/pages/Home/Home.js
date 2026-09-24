import React from "react";
import { Link } from "react-scroll";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { Fade } from "react-awesome-reveal";
import "./home.css";

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="wrap hero-inner">
        <Fade direction="up" triggerOnce>
          <p className="eyebrow hero-eyebrow">
            <span className="rule" />
            AI Engineer — Chicago, IL
          </p>
          <h1 className="font-display hero-name">
            Sourav Shetye
          </h1>
          <p className="font-display hero-statement">
            I build <em>production LLM systems</em> — RAG pipelines, agentic
            workflows, and vision models on Azure, trusted by enterprise teams.
          </p>
          <div className="hero-actions">
            <Link
              to="project"
              spy={true}
              smooth={true}
              offset={-80}
              duration={600}
              className="btn-ink"
            >
              View selected work <FiArrowDown size={15} />
            </Link>
            <a
              className="btn-ghost"
              href="mailto:souravshetye@gmail.com"
            >
              souravshetye@gmail.com <FiArrowUpRight size={15} />
            </a>
          </div>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <dl className="hero-facts">
            <div className="hero-fact">
              <dt>Experience</dt>
              <dd>4+ years shipping AI &amp; backend systems</dd>
            </div>
            <div className="hero-fact">
              <dt>Platform</dt>
              <dd>Azure AI Foundry · Azure OpenAI</dd>
            </div>
            <div className="hero-fact">
              <dt>Focus</dt>
              <dd>RAG · Agents · Vision LLMs</dd>
            </div>
          </dl>
        </Fade>
      </div>
    </section>
  );
};

export default Home;
