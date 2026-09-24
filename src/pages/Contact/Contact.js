import React, { useState } from "react";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contact.css";

const EMAIL = "souravshetye@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !msg) {
      toast.error("Please provide all fields");
      return;
    }
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
  };

  return (
    <section className="contact-section" id="contacts">
      <div className="wrap">
        <Fade direction="up" triggerOnce>
          <p className="eyebrow eyebrow-dark">
            <span className="rule" />
            06 — Contact
          </p>
          <h2 className="font-display contact-title">
            Let&rsquo;s build something <em>intelligent</em>.
          </h2>
          <p className="contact-lede">
            I&rsquo;m always glad to talk about LLM systems, RAG, or new
            opportunities. The fastest way to reach me is email.
          </p>
          <div className="contact-actions">
            <a className="btn-paper" href={`mailto:${EMAIL}`}>
              {EMAIL} <FiArrowUpRight size={15} />
            </a>
            <div className="contact-socials">
              <a
                href="https://www.linkedin.com/in/souravshetye/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <BsLinkedin size={20} />
              </a>
              <a
                href="https://github.com/sourav11012"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <BsGithub size={20} />
              </a>
            </div>
          </div>
        </Fade>

        <Fade direction="up" triggerOnce>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label>
                <span>Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label>
                <span>Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
            </div>
            <label>
              <span>Message</span>
              <textarea
                rows={4}
                placeholder="Tell me about your project or role…"
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
            </label>
            <button type="submit" className="btn-paper form-submit">
              Send message <FiSend size={15} />
            </button>
          </form>
        </Fade>
      </div>
    </section>
  );
};

export default Contact;
