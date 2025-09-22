import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/Sourav_Shetye_Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    // setTheme((prevState) => (prevState === "light" ? ("dark") : "light"));
    const selectedTheme = localStorage.getItem("theme");
    if (selectedTheme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <div className="header_name">
              <h1>
                <b>SOURAV SHRIKANT SHETYE</b>
              </h1>
            </div>
            <p>
              <Typewriter
                options={{
                  strings: ["Software Engineer !", "MERN Stack Developer !"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </p>
          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=9833391942"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href={Resume}
                download="Sourav_Shetye_Resume.pdf"
              >
                My Resume
              </a>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
