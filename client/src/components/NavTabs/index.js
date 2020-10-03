import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { Navbar } from "react-bootstrap";

function NavTabs() {
  const location = useLocation();

  return (
    <Navbar sticky="top">
        <div className="collapse navbar-collapse" id="navbarNav">
        <Link
          to="/about"
          className={location.pathname === "/about" ? "navbar-brand active" : "navbar-brand"}
        >
          Tatyana Khan
        </Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="/about"
                className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
              >
                About
              <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Protfolio
              </Link>
            </li>
            <li className="nav-item">

              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact Me
              </Link>
            </li>

          </ul>
        </div>
    </Navbar>
  );
}

export default NavTabs;