import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import Resume from "../../assets/docs/Sourav_Shetye_Resume.pdf";
import "./Navbar.css";

const links = [
  { to: "about", label: "About" },
  { to: "aiwork", label: "AI Work" },
  { to: "spotlight", label: "Spotlight" },
  { to: "project", label: "Projects" },
  { to: "techstack", label: "Stack" },
  { to: "education", label: "Journey" },
  { to: "contacts", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar-shell${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap navbar-inner">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
          className="wordmark font-display"
        >
          Sourav Shetye
          <span className="wordmark-dot">.</span>
        </Link>

        <nav className="navbar-links" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="navbar-link"
              activeClass="is-active"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="navbar-cta">
          <a href={Resume} download="Sourav_Shetye_Resume.pdf" className="resume-btn">
            Résumé <FiArrowUpRight size={14} />
          </a>
          <button
            className="menu-btn"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel${open ? " is-open" : ""}`}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="mobile-link font-display"
            onClick={() => setOpen(false)}
          >
            {l.label}
          </Link>
        ))}
        <a
          href={Resume}
          download="Sourav_Shetye_Resume.pdf"
          className="btn-ink mobile-resume"
          onClick={() => setOpen(false)}
        >
          Download Résumé <FiArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
