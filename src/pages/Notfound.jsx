import React from "react";
import { NavLink } from "react-router-dom";

export default function Notfound() {
  return (
    <>
      <div className="">
        <div className="Notfound-content">
          <div>
            <h4>houlala cette page n'existe pas ! 😢 erreur 404 🤔</h4>
          </div>
          <div>
            <NavLink exact="true" to="/">
              <i className="fa-solid fa-house-user"></i>
              <span>Accueil</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
