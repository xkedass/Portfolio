import React from "react";
import Navigation from "../components/Navigation";
import Contact from "./Contact";
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
              {" "}
              MY NAME IS <i class="fa-solid fa-star"></i> FATYA{" "}
            </h2>
            <h3 className="text-center"> AND I'M DEVELOPPER WEB </h3>
          </div>
          <div className="socials align-self-end ">
            <ul className="">
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-linkedin"></i>
                <h4>LinkedIn</h4>
              </a>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-twitter"></i>
                <h4>Twitter</h4>
              </a>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-github"></i>
                <h4>GitHub</h4>
              </a>
              <a
                href="https://github.com/xkedass"
                target="blank"
                rel="noopener noreferer"
              >
                <i className="fa-brands fa-codepen"></i>
                <h4>CodePen</h4>
              </a>
            </ul>
          </div>
          <div className="scroll d-flex justify-content-center align-items-center flex-column">
            <p> SCROLL </p>
            <i class="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>

      {/* Page navigation et logo/cv */}
      <div className="navigation container-fluid" id="navigation">
        <div className="navigation-content row">
          <div className="col-6 side-left ">
            <div className="logo d-flex justify-content-center align-items-center flex-column">
              <img src="./medias/logo black.png" alt="logo black" width={350} />
              <a
                className="text-center"
                href="./medias/CV Fatiha SADEQ - Développeuse Web (1).pdf"
                target="blank"
              >
                {" "}
                TELECHARGEZ MON CV
              </a>
            </div>
          </div>
          <div className="col-6 side-right bg-light text-dark d-flex justify-content-center align-items-center flex-column">
            <Navigation />
          </div>
        </div>
      </div>

      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
