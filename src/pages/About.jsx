import React from 'react'

export default function About() {
  return (
    <>
    <div className="about container-fluid g-0 mt-5" id="about">
        <div className="about-content row g-0">
          <div className="col-6 side-left ">
            <div className=" d-flex justify-content-center align-items-center flex-column">
              <img src="./medias/logo white.png" alt="logo black" width={350} />
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
           <h4> WHO AM I ? </h4>
           <article className='text-justify'> Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</article>
          </div>
        </div>
      </div>
    </>
  )
}
