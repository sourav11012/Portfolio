import React, { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { animate, stagger } from "animejs";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Reveal, { usePrefersReducedMotion } from "../../components/Reveal/Reveal";
import "./Spotlight.css";

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------------------------------- stats ---------------------------------- */

function Stat({ value, suffix = "", label }) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;
    if (reduceMotion()) {
      el.textContent = `${value}${suffix}`;
      return;
    }
    const obj = { v: 0 };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate(obj, {
          v: value,
          duration: 1600,
          easing: "easeOutExpo",
          onUpdate: () => {
            el.textContent = `${Math.round(obj.v)}${suffix}`;
          },
        });
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, suffix]);

  return (
    <div className="spot-stat">
      <span className="spot-stat-num" ref={numRef}>
        0{suffix}
      </span>
      <span className="spot-stat-label">{label}</span>
    </div>
  );
}

/* ------------------------------ vision visual ------------------------------ */

function VisionVisual() {
  const root = useRef(null);

  useEffect(() => {
    if (reduceMotion()) return;
    const q = (sel) => root.current.querySelectorAll(sel);
    const scan = animate(q(".uv-scan"), {
      translateY: [8, 252],
      duration: 3000,
      easing: "easeInOutSine",
      loop: true,
      alternate: true,
    });
    const boxes = animate(q(".uv-box"), {
      opacity: [0.25, 1],
      duration: 1100,
      easing: "easeInOutSine",
      loop: true,
      alternate: true,
      delay: stagger(700),
    });
    const ping = animate(q(".uv-ping"), {
      scale: [0.6, 1.5],
      opacity: [0.9, 0],
      duration: 1800,
      easing: "easeOutQuad",
      loop: true,
      delay: stagger(900),
    });
    return () => {
      scan.pause();
      boxes.pause();
      ping.pause();
    };
  }, []);

  return (
    <div className="spot-visual spot-visual-dark" ref={root} aria-hidden="true">
      <svg viewBox="0 0 400 300" className="spot-svg">
        {/* faint grid */}
        {[40, 90, 140, 190, 240].map((y) => (
          <line key={y} x1="20" y1={y} x2="380" y2={y} className="uv-grid" />
        ))}
        {[60, 120, 180, 240, 300, 350].map((x) => (
          <line key={x} x1={x} y1="16" x2={x} y2="284" className="uv-grid" />
        ))}
        {/* viewfinder corners */}
        <path d="M28 56 V28 H56" className="uv-corner" />
        <path d="M344 28 H372 V56" className="uv-corner" />
        <path d="M28 244 V272 H56" className="uv-corner" />
        <path d="M344 272 H372 V244" className="uv-corner" />
        {/* detection boxes */}
        <g className="uv-box">
          <rect x="96" y="104" width="86" height="64" className="uv-detect" />
          <circle cx="139" cy="136" r="4" className="uv-ping" />
          <text x="96" y="96" className="uv-label">
            defect · 0.98
          </text>
        </g>
        <g className="uv-box">
          <rect x="228" y="168" width="72" height="56" className="uv-detect" />
          <circle cx="264" cy="196" r="4" className="uv-ping" />
          <text x="228" y="160" className="uv-label">
            seal · 0.99
          </text>
        </g>
        {/* scan line */}
        <rect x="28" y="20" width="344" height="2.5" className="uv-scan" />
        <text x="28" y="292" className="uv-caption">
          LIVE · LINE 04 · EDGE
        </text>
      </svg>
      <div className="spot-chips">
        <span>Custom Vision</span>
        <span>YOLO</span>
        <span>Azure OpenAI</span>
        <span>AKS</span>
      </div>
    </div>
  );
}

/* ------------------------------- rag visual -------------------------------- */

function RagVisual() {
  const root = useRef(null);

  useEffect(() => {
    if (reduceMotion()) return;
    const q = (sel) => root.current.querySelectorAll(sel);
    const flow = animate(q(".rag-flow"), {
      strokeDashoffset: [0, -56],
      duration: 1400,
      easing: "linear",
      loop: true,
    });
    const dots = animate(q(".rag-dot"), {
      translateX: [0, 118],
      duration: 2200,
      easing: "easeInOutSine",
      loop: true,
      delay: stagger(700),
    });
    const chips = animate(q(".rag-chip"), {
      translateY: [0, -8],
      duration: 1600,
      easing: "easeInOutSine",
      loop: true,
      alternate: true,
      delay: stagger(350),
    });
    const pulse = animate(q(".rag-node"), {
      opacity: [0.55, 1],
      duration: 1200,
      easing: "easeInOutSine",
      loop: true,
      alternate: true,
      delay: stagger(500),
    });
    return () => {
      flow.pause();
      dots.pause();
      chips.pause();
      pulse.pause();
    };
  }, []);

  return (
    <div className="spot-visual spot-visual-dark" ref={root} aria-hidden="true">
      <svg viewBox="0 0 400 300" className="spot-svg">
        {/* connectors */}
        <path d="M96 190 H178" className="rag-flow" />
        <path d="M222 190 H304" className="rag-flow" />
        {/* travelling dots */}
        <circle cx="96" cy="190" r="4" className="rag-dot" />
        <circle cx="96" cy="190" r="4" className="rag-dot" />
        <circle cx="222" cy="190" r="4" className="rag-dot" />
        {/* nodes */}
        <g className="rag-node">
          <circle cx="72" cy="190" r="24" className="rag-circle" />
          <text x="72" y="194" className="rag-node-label">
            ?
          </text>
          <text x="72" y="232" className="rag-caption">
            Brief
          </text>
        </g>
        <g className="rag-node">
          <circle cx="200" cy="190" r="24" className="rag-circle" />
          <text x="200" y="194" className="rag-node-label">
            ≡
          </text>
          <text x="200" y="232" className="rag-caption">
            Retrieve
          </text>
        </g>
        <g className="rag-node">
          <circle cx="328" cy="190" r="24" className="rag-circle rag-circle-accent" />
          <text x="328" y="194" className="rag-node-label">
            ✦
          </text>
          <text x="328" y="232" className="rag-caption">
            Generate
          </text>
        </g>
        {/* retrieved chunks */}
        <g className="rag-chip">
          <rect x="148" y="66" width="104" height="26" rx="13" className="rag-chip-bg" />
          <text x="200" y="83" className="rag-chip-label">
            formulas
          </text>
        </g>
        <g className="rag-chip">
          <rect x="160" y="100" width="92" height="26" rx="13" className="rag-chip-bg" />
          <text x="206" y="117" className="rag-chip-label">
            sensory
          </text>
        </g>
        <g className="rag-chip">
          <rect x="142" y="134" width="112" height="26" rx="13" className="rag-chip-bg" />
          <text x="198" y="151" className="rag-chip-label">
            regulatory
          </text>
        </g>
        <text x="200" y="278" className="rag-caption rag-caption-wide">
          GUARDRAILED · GROUNDED IN YOUR DATA
        </text>
      </svg>
      <div className="spot-chips">
        <span>Azure OpenAI</span>
        <span>Semantic Kernel</span>
        <span>RAG</span>
        <span>.NET</span>
      </div>
    </div>
  );
}

/* --------------------------------- section --------------------------------- */

const work = [
  {
    tag: "Vision AI",
    title: "UnitedVision",
    product: "BCD iLabs · Self-service Vision AI for manufacturing",
    url: "https://bcdilabs.com/united-vision/",
    cta: "Explore UnitedVision",
    description:
      "Plant-owned visual inspection for the factory floor — capture, train, deploy, and retrain inspection models across lines without waiting on a vendor queue.",
    points: [
      "Built a real-time Vision LLM pipeline with Custom Vision and YOLO for defect detection on live manufacturing lines",
      "Routed defect-escalated frames to Azure OpenAI for root-cause analysis, turning detections into decisions",
      "Containerized services with Docker and shipped to Azure Kubernetes Service via Azure DevOps",
    ],
    visual: <VisionVisual />,
    stats: [
      { value: 8, suffix: "", label: "inspection capabilities in the platform" },
      { value: 100, suffix: "%", label: "plant-owned retraining lifecycle" },
    ],
  },
  {
    tag: "LLM · RAG",
    title: "Foresight",
    product: "BCD iLabs · AI formulation intelligence (Innovate Nxt)",
    url: "https://bcdilabs.com/innovate-nxt/",
    cta: "Explore Innovate Nxt",
    description:
      "LLM-powered decision support for flavor houses — interprets the full customer brief, screens a broader candidate set, and keeps expert knowledge compounding.",
    points: [
      "Hardened LLM workflows — orchestration, context handling, validations, and guardrails — for reliable experiment recommendations",
      "Grounded generation in formulation knowledge so every suggestion traces back to real evidence",
      "Shipped the .NET + Angular microservice platform flavor companies use to run R&D and client requests",
    ],
    visual: <RagVisual />,
    stats: [
      { value: 90, suffix: "%", label: "less data-processing time on LLM workflows" },
      { value: 50, suffix: "%", label: "faster client response on the platform" },
    ],
  },
];

export default function Spotlight() {
  const reduced = usePrefersReducedMotion();

  return (
    <section id="spotlight" className="spotlight-section">
      <div className="wrap">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Systems in <em>production</em>,
              <br />
              not just in notebooks.
            </>
          }
        />
        <Reveal className="spotlight-lede" y={20}>
          <p>
            Two platforms I helped build at BCD iLabs — one watches the factory
            floor, the other reasons over it. Both run in production, both
            answer to real operators.
          </p>
        </Reveal>

        <div className="spotlight-list">
          {work.map((item, i) => (
            <article
              key={item.title}
              className={`spot-card ${i % 2 === 1 ? "spot-card-flip" : ""}`}
            >
              <Reveal className="spot-media" y={36}>
                {item.visual}
              </Reveal>
              <div className="spot-body">
                <Reveal y={24}>
                  <span className="spot-tag">{item.tag}</span>
                  <h3 className="spot-title">{item.title}</h3>
                  <p className="spot-product">{item.product}</p>
                  <p className="spot-desc">{item.description}</p>
                </Reveal>
                <Reveal y={24} delay={120}>
                  <p className="spot-work-label">My work</p>
                  <ul className="spot-points">
                    {item.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal
                  className="spot-stats"
                  y={20}
                  delay={180}
                  staggerBy={reduced ? 0 : 120}
                >
                  {item.stats.map((s) => (
                    <Stat
                      key={s.label}
                      value={s.value}
                      suffix={s.suffix}
                      label={s.label}
                    />
                  ))}
                </Reveal>
                <Reveal y={16} delay={220}>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="spot-link"
                  >
                    {item.cta} <FiArrowUpRight />
                  </a>
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
