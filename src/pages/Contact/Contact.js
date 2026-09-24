import React, { useState } from "react";
import { toast } from "react-toastify";
import { useTheme } from "../../context/ThemeContext";
import { BsGithub, BsLinkedin, BsEnvelope } from "react-icons/bs";
import "./Contac1.css";

const EMAIL = "souravshetye@gmail.com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [theme] = useTheme();

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

  const iconColor = theme === "light" ? "black" : "white";

  return (
    <div className="contact section5" id="contacts">
      <div className="contact-header text-center">
        <h2>
          <b>Contact Me</b>
        </h2>
        <hr />
      </div>
      <div className="card card2 d-flex card border-0 px-4 py-5 mx-auto">
        <div className="row">
          <h6>
            Contact With
            <a
              href="https://www.linkedin.com/in/souravshetye/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin color={iconColor} size={30} className="ms-2" />
            </a>
            <a
              href="https://github.com/sourav11012"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub color={iconColor} size={30} className="ms-2" />
            </a>
            <a href={`mailto:${EMAIL}`}>
              <BsEnvelope color={iconColor} size={30} className="ms-2" />
            </a>
          </h6>
          <p className="text-center contact-note">
            Prefer email? Reach me directly at{" "}
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <div className="form-input">
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-input">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-input">
            <textarea
              name="msg"
              placeholder="Write your message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <div className="form-input">
            <button className="button" onClick={handleSubmit}>
              SEND MESSAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
