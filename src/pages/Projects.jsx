import React from 'react'
import ProjectList from '../components/projects/ProjectList'


export default function Projects() {
  return (
    <>
      <div className="projects container-fluid" id="projects">
        <div className="projects-content flex-column container-fluid">
        <div className="header-project ">
          <h1> header </h1>
        </div>
          <ProjectList/>
        </div>
        <div className="footer-project">
          <h2> Les autres projets </h2>
        </div>
      </div>
    </>
  )
}
