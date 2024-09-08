import React from "react";
import Typewriter from "typewriter-effect";
import "./home.css";
import Resume from "../../assets/docs/resume.txt";
const Home = () => {
  return (
    <>
      <div className="container-fluid home-container">
        <div className="container home-content">
          <h2>Hiiii 👋 Ia s</h2>
          <h1>
            <Typewriter
              options={{
                strings: ["FullStack Developer!", "Mern Stack Developer!"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a
              className="btn btn-cv"
              href={Resume}
              download="Sourav_Shetye.pdf"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
