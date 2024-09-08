import React from "react";
import "./Menus.css";
import {
  FcAbout,
  FcBiotech,
  FcContacts,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc";
import Home from "../../pages/Home/Home";
const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img src="logo192.png" alt="profile pic" />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div>

              <div className="nav-link">
                <FcContacts />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <FcAbout title="About" />
              </div>
              <div className="nav-link">
                <FcPortraitMode title="Work Experience" />
              </div>
              <div className="nav-link">
                <FcBiotech title="Tech Stack" />
              </div>
              <div className="nav-link">
                <FcReadingEbook title="Education" />
              </div>
              <div className="nav-link">
                <FcVideoProjector title="Projects" />
              </div>
              <div className="nav-link">
                <FcVoicePresentation title="Testimonials" />
              </div>

              <div className="nav-link">
                <FcContacts title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
