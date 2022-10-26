import React from "react";
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
          <div className="titles p-4">
            <h1 className="text-center main-title">WELCOME</h1> 
           
            <h2 className="text-center">
              MY NAME IS <img className='gif' src="./medias/gif.gif" alt="" /> FATYA{" "}
            </h2>
           
            <h3 className="text-center"> AND I AM DEVELOPPER WEB </h3>
          </div>
           
          <div className="scroll d-flex justify-content-center align-items-center flex-column mt-5">
            <p> SCROLL </p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
      <Navigations/>
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
      </footer>
    </div>
  );
};

export default Home;
