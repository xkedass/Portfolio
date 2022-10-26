import React from 'react'
import ProjectList from '../components/projects/ProjectList'


export default function Projects() {
  return (
    <>
      <div className="projects container-fluid gx-0" id="projects">
        <div className="projects-content flex-column container-fluid gx-0">
        {/* <div className="header-project ">
          <img src="./medias/logo black.png" width={90} alt="" />
        </div> */}
          <ProjectList/>
        </div>
      </div>
    </>
  )
}
