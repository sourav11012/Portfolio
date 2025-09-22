import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { useTheme } from "../../context/ThemeContext";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import "./Contac1.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [theme] = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !email || !msg) {
        toast.error("Please provide all fields");
        return;
      }
      const res = await axios.post("/api/v1/portfolio/sendEmail", {
        name,
        email,
        msg,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setMsg("");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

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
            {theme === "light" ? (
              <>
                <a
                  href="https://www.linkedin.com/in/souravshetye/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin color="black" size={30} className="ms-2" />
                </a>
                <a
                  href="https://github.com/Sourav0211"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub color="black" size={30} className="ms-2" />
                </a>
              </>
            ) : (
              <>
                <a
                  href="https://www.linkedin.com/in/souravshetye/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin color="white" size={30} className="ms-2" />
                </a>
                <a
                  href="https://github.com/Sourav0211"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub color="white" size={30} className="ms-2" />
                </a>
              </>
            )}
          </h6>
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
