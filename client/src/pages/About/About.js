import React from "react";
import "./About.css";
import profilePhoto from "../../assets/images/myPhoto.jpeg";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useEffect } from "react";

// gsap.registerPlugin(ScrollTrigger);
const About = () => {
  // useEffect(() => {
  //   gsap.to(".section1", {
  //     scale: 0.8,
  //     opacity: 0,
  //     scrollTrigger: {
  //       trigger: ".section1", // The element that triggers the animation
  //       start: "top 15%", // Animation starts when the top of the element is at 15% of the viewport
  //       end: "bottom 15%", // Animation ends when the bottom of the element is at 15% of the viewport
  //       scrub: true, // Smooth animation when scrolling
  //     },
  //   });
  // }, []);

  return (
    <>
      <div className="container about section1">
        <div class="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img src={profilePhoto} alt="profile pic" />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              I am currently working at Sports Excitement as a Software
              Developer, with a strong focus on web development, artificial
              intelligence, machine learning, and data science.
              <br />
              My passion lies in using technology to solve complex problems and
              enhance user experiences.
              <br />
              As a teaching assistant (TA) for the Network-Based Application
              Development course, I enjoyed guiding students and helping them
              navigate through the exciting world of web technologies and
              backend development. I have 3 years of professional experience
              working in software development.
              <br /> In addition to my technical expertise, I am passionate
              about exploring the latest trends in AI and machine learning. I
              believe in the power of data-driven solutions and continually work
              on developing my skills in big data analytics.
              <br />
              When I’m not immersed in coding, I enjoy listening to music,
              watching movies, and staying active through sports and workouts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
