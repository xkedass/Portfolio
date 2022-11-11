import React from "react";
import BackToTopButton from "../components/BackToTopButton";
import About from "./About";
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
          className="accueil d-flex justify-content-center align-items-center flex-column"
          id="acceuil"
        >
          <div class="marquee-rtl">
            <div> bienvenue - 欢迎 -  willkommen - ウェルカム - bienvenido - 환영해 </div>
          </div>

          <div className="titles d-flex justify-content-center align-items-center flex-column p-4">
            <h1 className="text-center main-title">WELCOME</h1>

            <h2 className="text-center">
              MY NAME IS <img className="gif" src="./medias/stare.gif" alt="" />{" "}
              FATYA{" "}
            </h2>

            <div className="box-h3">
              <h3 className="text-center"> AND I AM DEVELOPPER WEB </h3>
            </div>
          </div>

          <a
            href="#navigation
           "
          >
            {" "}
            <div className="scroll d-flex justify-content-center align-items-center flex-column mt-5">
              <p> SCROLL </p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
          </a>
        </div>
      </div>
      <BackToTopButton />
      <Navigations />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <footer className="d-flex justify-content-around align-items-center">
        <div className="socials">
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
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
