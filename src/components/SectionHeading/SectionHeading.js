import React from "react";
import { Fade } from "react-awesome-reveal";
import "./SectionHeading.css";

const SectionHeading = ({ index, eyebrow, title, lede }) => {
  return (
    <Fade direction="up" triggerOnce>
      <div className="section-heading">
        <p className="eyebrow">
          <span className="rule" />
          {index} — {eyebrow}
        </p>
        <h2 className="font-display section-title">{title}</h2>
        {lede && <p className="section-lede">{lede}</p>}
      </div>
    </Fade>
  );
};

export default SectionHeading;
