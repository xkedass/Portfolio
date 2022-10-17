import React, { useState } from "react";
import { skillsBack, skillsFront, skillsTools } from "../data/skills";

export default function Skills() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container skills" id="skills">
        <div className="skills-content">
          <div className="col-6 side-left d-flex justify-content-center align-items-center flex-column">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              FRONT
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              BACK
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              TOOLS
            </button>
          </div>

          <div className="col-6 side-right d-flex justify-content-center align-items-center flex-column">
            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <div> {skillsFront.map((logo) => (
                  <i className={logo} key={logo}></i>
                ))}</div>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                {skillsBack.map((logo) => (
                  <i className={logo} key={logo}></i>
                ))}
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                {skillsTools.map((logo) => (
                  <i className={logo} key={logo}></i>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
