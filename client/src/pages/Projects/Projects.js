import React from "react";
import Ecommerce from "../../assets/images/Ecommerce.png";
import androidImage from "../../assets/images/android.png";
import MLImage from "../../assets/images/AiMl.png";
import PBAngular from "../../assets/images/PBAngular.png";
import Imginify from "../../assets/images/Imaginify.png";
import "./Projects.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
// import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);
const Projects = () => {
  // useEffect(() => {
  //   const scene = new THREE.Scene();
  //   const camera = new THREE.PerspectiveCamera(
  //     75,
  //     window.innerWidth / window.innerHeight,
  //     0.1,
  //     1000
  //   );

  //   const renderer = new THREE.WebGLRenderer();
  //   const projectBackground = document.querySelector("#project-background");
  //   projectBackground.appendChild(renderer.domElement);

  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   camera.position.setZ(30);

  //   const pointLight = new THREE.PointLight(0xfffff); // Use a white light for visibility
  //   const ambientLight = new THREE.AmbientLight(0xffffff);
  //   pointLight.position.set(5, 5, 5);
  //   scene.add(pointLight, ambientLight);

  //   function addStar() {
  //     const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  //     const material = new THREE.MeshStandardMaterial({ color: 0x00000 }); // Use white stars
  //     const star = new THREE.Mesh(geometry, material);

  //     const [x, y, z] = Array(3)
  //       .fill()
  //       .map(() => THREE.MathUtils.randFloatSpread(100));
  //     star.position.set(x, y, z);
  //     scene.add(star);
  //   }

  //   Array(200).fill().forEach(addStar);

  //   // Animation loop
  //   function animate() {
  //     requestAnimationFrame(animate);
  //     renderer.render(scene, camera);
  //   }
  //   animate();

  //   // Handle window resize
  //   window.addEventListener("resize", () => {
  //     camera.aspect = window.innerWidth / window.innerHeight;
  //     camera.updateProjectionMatrix();
  //     renderer.setSize(window.innerWidth, window.innerHeight);
  //   });

  //   // Cleanup on unmount
  //   return () => {
  //     projectBackground.removeChild(renderer.domElement);
  //   };
  // }, []);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 390px)").matches;

    if (isMobile) {
      gsap.utils.toArray(".P-card").forEach((card) => {
        gsap.to(card, {
          scale: 0.9, // Adjust the scale for smaller screens
          opacity: 0, // No fading out on mobile
          scrollTrigger: {
            trigger: card,
            start: "top 10%", // Start the animation later
            end: "bottom 15%",
            scrub: true,
          },
        });
      });
    } else {
      gsap.utils.toArray(".P-card").forEach((card) => {
        gsap.to(card, {
          scale: 0.8,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 10%",
            end: "bottom 15%",
            scrub: true,
          },
        });
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <div className="project-background" id="project-background">
        <div className="container project" id="project">
          <h2 className="col-12 mt-3 mb-1 text-center">Projects</h2>
          <hr />
          <p className="pb-3 text-center">
            ➡️ Here are my projects with source code
          </p>
          <div className="project-container" id="ads">
            <div className="col-md-4 P-card project-card0">
              <div className="card rounded card-color">
                <div className="card-image">
                  <span className="card-notify-badge">Web Dev/AI</span>
                  <img src={Imginify} alt="project0" />
                </div>
                <div className="card-image-overly m-auto mt-3 ">
                  <span className="card-details-badge mb-3">NextJs</span>
                  <span className="card-details-badge mb-3">TypeScript</span>
                  <span className="card-details-badge mb-3">Cloudinary</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Imaginify</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://aisaas-pied.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 P-card project-card1">
              <div className="card rounded card-color">
                <div className="card-image">
                  <span className="card-notify-badge">Android</span>
                  <img src={androidImage} alt="project1" />
                </div>
                <div className="card-image-overly m-auto mt-3 ">
                  <span className="card-details-badge mb-3">
                    Android Studio
                  </span>
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
            <div className="col-md-4 P-card project-card2">
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
            <div className="col-md-4 P-card project-card3">
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
            <div className="col-md-4 P-card project-card4">
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
      </div>
    </>
  );
};

export default Projects;
