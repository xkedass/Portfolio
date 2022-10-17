import React from 'react';


export default function TemplateProject({project}) {
  return (
    <div className="template">
       <div className="header-project ">
          <img src="../medias/logo black.png" width={90} alt="" />
        </div>
        <div className="template-content">
            <ul className="languages-icons">
                {project.languagesIcons.map(icon => 
                    <i className={icon} key= {icon}></i>)}
            </ul>
            <img src={`../${project.picture}`} alt={project.name} />
        </div>
        <div className="template-description">
            <h1> {project.name}</h1>
            <p> {project.info}</p>
        </div>
    </div>
  )
}
