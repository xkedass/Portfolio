import React from "react";
import Contact from "./Contact";
import Navigations from "./Navigations";
import Projects from "./Projects";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="home container-fluid g-0">
      <div className="home-content">

        {/* Page acceuil */}
        <div
          className="accueil  d-flex justify-content-center align-items-center flex-column"
          id="acceuil"
        >
          <div className="titles p-4 mt-5">
            <h1 className="text-center main-title">WELCOME</h1>
            <h2 className="text-center">
              MY NAME IS <i className="fa-solid fa-star"></i> FATYA{" "}
            </h2>
            <h3 className="text-center"> AND I'M DEVELOPPER WEB </h3>
          </div>
          <div className="socials align-self-end ">
            <ul>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-linkedin"></i>
                 <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-twitter"></i>
                 <span>Twitter</span>
              </a>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-github"></i>
                <span>GitHub</span>
              </a>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-codepen"></i>
                <span>CodePen</span>
              </a>
            </ul>
          </div>
          <div className="scroll d-flex justify-content-center align-items-center flex-column">
            <p> SCROLL </p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
      <Navigations/>
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
