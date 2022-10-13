import React from "react";
import { portfolioData } from "../../data/portfolioData";
import Project from "./Project";

const ProjectList = () => {

  
  return (
    <div className="portfolioContent">
      <div className="projects">
        {portfolioData.map((item) => {
          return <Project key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};
export default ProjectList;
