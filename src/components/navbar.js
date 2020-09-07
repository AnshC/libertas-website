import React from "react";

import { Link } from "react-router-dom";

import { slide } from "./flexyJS/flexy-navbar";
import { clickToggle } from "./flexyJS/flexy-navbar";
import "./flexy.ss.css";
import "./navbar.css";

function Nav() {
  return (
    <div className="navigationbar">
      <nav>
        <h2 className="navBrand">Libertas</h2>
        <ul className="nav-links" id="nav-links">
          <li className="nav-li">
            <Link to="/" className="a-none" onClick={clickToggle}>
              <p className="nav-link">Home</p>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/news" className="a-none" onClick={clickToggle}>
              <p className="nav-link">News</p>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/blog" className="a-none" onClick={clickToggle}>
              <p className="nav-link">Blog</p>
            </Link>
          </li>
          <li className="nav-li">
            <Link to="/about" className="a-none" onClick={clickToggle}>
              <p className="nav-link">About</p>
            </Link>
          </li>
        </ul>
        <div className="burger" id="burgerId" onClick={slide}>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
