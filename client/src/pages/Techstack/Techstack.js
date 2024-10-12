import React from "react";
import "./Techstack.css";
import Fade from "react-reveal";
import { TechstackList } from "../../utils/TechstackList";
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techsatck">
        <h2 className="col-12 mt-3 mb-1 text-center">TECHNOLOGIES</h2>
        <hr />
        <p className="pb-3 text-center">
          🟠 Including programming languages, frameworks , database , front end
          and back end tools ,and apis.
        </p>

        <div className="row tech-grid">
          <Fade left>
            {TechstackList.map((tech) => (
              <div key={tech._id} className="col-md-3 ">
                <div className={`card m-2 ${tech.class}`}>
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="align-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Techstack;
