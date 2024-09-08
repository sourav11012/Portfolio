import React from "react";
import image from "../../assets/images/images.jpeg";
import "./Projects.css";
const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center">Projects</h2>
        <hr />
        <p className="pb-3 text-center">
          ➡️ Here are my projects with source code
        </p>
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={image} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Sourav Shetye Website</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={image} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Sourav Shetye Website</h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full Stack</span>
                <img src={image} alt="project1" />
              </div>
              <div className="card-image-overly m-auto mt-3 ">
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
                <span className="card-details-badge mb-3">Node Js HTml</span>
              </div>
              <div className="card-body text-center">
                <div className="ad-title m-auto">
                  <h5 className="text-uppercase">Sourav Shetye Website</h5>
                </div>
                <a className="ad-btn" href="#">
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
