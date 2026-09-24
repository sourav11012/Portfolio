import React from "react";
import { Link } from "react-scroll";
import { FiArrowUp } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p className="footer-brand font-display">
          Sourav Shetye<span className="wordmark-dot">.</span>
        </p>
        <p className="footer-note">
          &copy; 2026 · Chicago, IL · Designed &amp; built with care
        </p>
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={600}
          className="to-top"
          aria-label="Back to top"
        >
          <FiArrowUp size={18} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
