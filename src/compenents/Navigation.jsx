import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='nav'>
        <ul>
            <NavLink exact="true" to="/projects"> <li>  <span> PROJECTS </span>  </li> </NavLink>
            <NavLink exact="true" to="/skills"> <li>  <span> SKILLS </span>  </li> </NavLink>
            <NavLink exact="true" to="/contact"> <li>  <span> CONTACT </span>  </li> </NavLink>
        </ul>
    </div>
  )
}
