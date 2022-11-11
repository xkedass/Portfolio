import React from 'react'

export default function About() {
  return (
    <>
    <div className="about container-fluid g-0 " id="about">
        <div className="about-content row g-0">
          <div className="col-6 side-left ">
            <div className=" d-flex justify-content-center align-items-center flex-column bg-white">
              <img src="./medias/objet moving.gif" alt="logo black" />
              {/* <a
                className="text-center linkCv"
                href="./medias/CV Fatiha SADEQ - Développeuse Web (1).pdf"
                target="blank"
              >
                TELECHARGEZ MON CV
              </a> */}
            </div>
          </div>
          <div className="col-6 side-right d-flex justify-content-center align-items-center flex-column">
           <h4> ABOUT ME </h4>
           <article className='text-justify'>  Having a great affinity with the web world, I naturally turned to web development. Expressing my creativity through technology and being able to help my fellow man in an unknown field are the reasons why I chose to become a web developer.</article>
          </div>
        </div>
      </div>
    </>
  )
}
