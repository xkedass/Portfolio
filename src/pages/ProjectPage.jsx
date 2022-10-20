import { portfolioData } from "../data/portfolioData";
import {  useParams } from "react-router-dom";
import TemplateProject from "../components/TemplateProject";

const ProjectPage = () => {
  let { id } = useParams();

  return (
    <div className="project-details">
      {portfolioData.map((project) => (
        <div className="project-preview" key={project.name}>
          { project.id == id ? <TemplateProject key={project.id} project={project}/> : '' } 
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;

