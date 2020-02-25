import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="navbar">
        <h1>iD</h1>
        <ul className="nav-links">
          <Link className="link-styles" to="/">
            <li>HOME</li>
          </Link>
          <Link className="link-styles" to="/about">
            <li>ABOUT</li>
          </Link>
          <Link className="link-styles" to="/services">
            <li>SERVICES</li>
          </Link>
          <Link className="link-styles" to="/categories">
            <li>CATEGORIES</li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default Nav;
