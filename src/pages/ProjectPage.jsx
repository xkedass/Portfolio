// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { portfolioData } from "../data/portfolioData";

// const ProjectPage = ({match}) => {
//   let params = useParams();

//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     portfolioData.forEach((project) => {
//       if (project.params.id === project.id.toString()) {
//         setProject(project);
//       }
//     });
//   }, [match.params.id]);

//   return (
//     <div>
//       {project ? (
//         <div className="header-project ">
//           <img src="./medias/logo black.png" width={90} alt="" />
//         </div>
//       ) : (
//         <h4 className="center">Aucun projet à afficher !</h4>
//       )}
//     </div>
//   );
// };

// export default ProjectPage;

import { portfolioData } from "../data/portfolioData";
import { Link } from "react-router-dom";

const ProjectPage = () => {


 
  return ( 
    <div className="project-details">
        {portfolioData.map((project) => (
            <div className="project-preview" key = {project.id}>
            <Link to={`/project-page/${project.id}`}>
                <h2> {project.name}</h2>
                <h2> {project.source}</h2>
            </Link>
        </div>
        ))}
    </div>
    );
}

export default ProjectPage;


// https://codesandbox.io/s/how-to-pass-id-to-react-js-path-link-qy2my?fontsize=14&hidenavigation=1&module=/src/App.js&theme=dark&file=/src/App.js
