import React from 'react';
import Navigation from '../components/Navigation';


export default function Navigations() {
  return (
    <>
    <div className="navigation container-fluid" id="navigation">
        <div className="navigation-content row">
          <div className="col-6 side-left ">
            <div className="logo d-flex justify-content-center align-items-center flex-column">
              <img src="./medias/logo black.png" alt="logo black" width={350} />
              {/* <a
                className="text-center linkCv"
                href="./medias/CV Fatiha SADEQ - Développeuse Web (1).pdf"
                target="blank"
              >
                TELECHARGEZ MON CV
              </a> */}
            </div>
          </div>
          <div className="col-6 side-right bg-light d-flex justify-content-center align-items-center flex-column">
            <Navigation />
          </div>
        </div>
      </div>
    </>
  )
}
