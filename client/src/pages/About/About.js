import React from "react";
import "./About.css";
import profilePhoto from "../../assets/images/myPhoto.jpeg";
const About = () => {
  return (
    <>
      <div className="about">
        <div class="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePhoto} alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am currently pursuing my Master of Science in Computer Science
              at the University of North Carolina at Charlotte (UNCC), with a
              strong focus on web development, artificial intelligence, machine
              learning, and data science. My passion lies in using technology to
              solve complex problems and enhance user experiences. As a teaching
              assistant (TA) for the Network-Based Application Development
              course, I enjoy guiding students and helping them navigate through
              the exciting world of web technologies and backend development. I
              have 1 year of professional experience working in software
              development, particularly in web development. In addition to my
              technical expertise, I am passionate about exploring the latest
              trends in AI and machine learning. I believe in the power of
              data-driven solutions and continually work on developing my skills
              in big data analytics. When I’m not immersed in coding, I enjoy
              listening to music, watching movies, and staying active through
              sports and workouts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
