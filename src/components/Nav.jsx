import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/phones">phones</NavLink>
        </li>
        <li>
          <NavLink to="/todos">todos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
