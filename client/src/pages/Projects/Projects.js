import React from "react";
import Ecommerce from "../../assets/images/Ecommerce.png";
import androidImage from "../../assets/images/android.png";
import MLImage from "../../assets/images/AiMl.png";
import PBAngular from "../../assets/images/PBAngular.png";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="container project" id="project">
        <h2 className="col-12 mt-3 mb-1 text-center">Projects</h2>
        <hr />
        <p className="pb-3 text-center">
          ➡️ Here are my projects with source code
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Android</span>
                <img src={androidImage} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Android Studio</span>
                <span className="card-details-badge mb-3">Java</span>
                <span className="card-details-badge mb-3">Firebase</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Android Email App</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Sourav0211/Android_Apps/tree/main/My%20Email%20App"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={Ecommerce} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Node Js</span>
                <span className="card-details-badge mb-3">React</span>
                <span className="card-details-badge mb-3">MongoDb</span>
                <span className="card-details-badge mb-3">Bootstrap</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">E-commerce app</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/Sourav0211/Ecommerce-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">AI/ML</span>
                <img src={MLImage} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Python</span>
                <span className="card-details-badge mb-3">ML</span>
                <span className="card-details-badge mb-3">Javascript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Wave2Lip:Real Time</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/devkrish23/realtimeWav2lip"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={PBAngular} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Angular</span>
                <span className="card-details-badge mb-3">NodeJs</span>
                <span className="card-details-badge mb-3">TypeScript</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Personal Budget</h5>
                </div>
                <a
                  className="ad-btn"
                  href="https://github.com/sourav11012/Personal-Budget-Angular"
                  target="_blank"
                  rel="noreferrer"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
