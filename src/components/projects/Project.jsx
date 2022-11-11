import React, { useState } from "react";
import { Link } from "react-router-dom";

const Project = ({ item }) => {
  const [isHovering, setIsHovering] = useState(false);
  

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div className="project container-fluid gx-0">
      <div
        className="banner"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <h3 className="hide-title slide-top">{item.name}</h3>
        <div> 
          {isHovering && <Link to={`/project-page/${item.id}`} ><h3 className="slide-top"> SEE MORE </h3> </Link>  } 
        </div>
        <img src={item.picture} alt="presentation du projet" />
      </div>
      
      

      </div>
  );
};

export default Project;
