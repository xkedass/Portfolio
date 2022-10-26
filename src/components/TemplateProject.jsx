import React from 'react';


export default function TemplateProject({project}) {
  return (
    <div className="template">
       <div className="header-project d-flex justify-content-between align-items-center">
          <img src="../medias/logo black.png" width={90} alt="" />
          <p className='m-3'> PROJECTS </p>
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
        <div className="button-space">
          <a href="/"> <i class="fa-solid fa-rotate-left"></i>  retour </a>
          <a href="/"> <i class="fa-brands fa-github"></i> github </a>
        </div>
    </div>
  )
}
