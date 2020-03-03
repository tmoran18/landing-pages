import React from "react";
import { Link } from "react-router-dom";

const SideDrawNav = props => {
  let sideDrawClass = "sideDrawNav";
  if (props.show) {
    sideDrawClass = "sideDrawNav open";
  }

  return (
    <nav className="sideDrawNav">
      <ul className="sideDrawNav-list">
        <Link className="sideDrawNav-link" to="/">
          <li>HOME</li>
        </Link>
        <Link className="sideDrawNav-link" to="/about">
          <li>ABOUT</li>
        </Link>
        <Link className="sideDrawNav-link" to="/services">
          <li>SERVICES</li>
        </Link>
        <Link className="sideDrawNav-link" to="/categories">
          <li>CATEGORIES</li>
        </Link>
      </ul>
    </nav>
  );
};

export default SideDrawNav;
