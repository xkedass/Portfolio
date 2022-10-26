import React, { useState } from "react";
import { skillsBack, skillsFront, skillsTool } from "../data/skills";

export default function Skills() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="container-fluid skills" id="skills">
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
            <div className="content-tabs d-flex flex-wrap">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                {skillsFront.map((logo) => (
                  <div className="card card-flip" key={logo.id}>
                    <div className="card-front rounded-circle text-white ">
                      <div className="card-body">
                        <p>{logo.nom}</p>
                      </div>
                    </div>
                    <div className="card-back rounded-circle">
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <i className={logo.icons} ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                {skillsBack.map((logo) => (
                  <div className="card card-flip" key={logo.id}>
                    <div className="card-front rounded-circle text-white ">
                      <div className="card-body">
                        <p>{logo.nom}</p>
                      </div>
                    </div>
                    <div className="card-back rounded-circle">
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <i className={logo.icons} ></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                {skillsTool.map((logo) => (
                  <div className="card card-flip" key={logo.id}>
                    <div className="card-front rounded-circle text-white ">
                      <div className="card-body">
                        <p>{logo.nom}</p>
                      </div>
                    </div>
                    <div className="card-back rounded-circle">
                      <div className="card-body d-flex justify-content-center align-items-center">
                        <i className={logo.icons}></i>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
