import React, { useLayoutEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FiArrowDown, FiArrowUpRight } from "react-icons/fi";
import { animate, stagger, createTimeline } from "animejs";
import "./home.css";

const Home = () => {
  const root = useRef(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !root.current) return;

    const q = (sel) => root.current.querySelectorAll(sel);

    // Park everything hidden before first paint, then choreograph the entrance.
    animate(q("[data-enter]"), { opacity: 0, duration: 0 });

    const tl = createTimeline({ defaults: { easing: "easeOutExpo" } });
    tl.add(
      q(".hero-eyebrow"),
      { opacity: [0, 1], translateY: [18, 0], duration: 800 },
      120
    )
      .add(
        q(".hero-name"),
        { opacity: [0, 1], translateY: [36, 0], duration: 1050 },
        240
      )
      .add(
        q(".hero-statement"),
        { opacity: [0, 1], translateY: [28, 0], duration: 1050 },
        420
      )
      .add(
        q(".hero-actions"),
        { opacity: [0, 1], translateY: [22, 0], duration: 900 },
        620
      )
      .add(
        q(".hero-fact"),
        {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 850,
          delay: stagger(110),
        },
        780
      );

    return () => tl.pause();
  }, []);

  return (
    <section className="hero" id="home" ref={root}>
      <div className="wrap hero-inner">
        <p className="eyebrow hero-eyebrow" data-enter>
          <span className="rule" />
          AI Engineer — Chicago, IL
        </p>
        <h1 className="font-display hero-name" data-enter>
          Sourav Shetye
        </h1>
        <p className="font-display hero-statement" data-enter>
          I build <em>production LLM systems</em> — RAG pipelines, agentic
          workflows, and vision models on Azure, trusted by enterprise teams.
        </p>
        <div className="hero-actions" data-enter>
          <Link
            to="spotlight"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
            className="btn-ink"
          >
            View selected work <FiArrowDown size={15} />
          </Link>
          <a className="btn-ghost" href="mailto:souravshetye@gmail.com">
            souravshetye@gmail.com <FiArrowUpRight size={15} />
          </a>
        </div>
        <dl className="hero-facts">
          <div className="hero-fact" data-enter>
            <dt>Experience</dt>
            <dd>4+ years shipping AI &amp; backend systems</dd>
          </div>
          <div className="hero-fact" data-enter>
            <dt>Platform</dt>
            <dd>Azure AI Foundry · Azure OpenAI</dd>
          </div>
          <div className="hero-fact" data-enter>
            <dt>Focus</dt>
            <dd>RAG · Agents · Vision LLMs</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default Home;
