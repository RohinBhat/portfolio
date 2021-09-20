import "../styles/navbar.css";

import { BrowserRouter, Link, Route } from "react-router-dom";

import React from "react";
import logo from "../images/portfolio-logo-white.png";

export default function NavBar() {
  return (
    <BrowserRouter>
      <div className="navbar">
        <img src={logo} className="logo-image" alt="Logo" />
        <div className="navbar-tabs">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="/" className="nav-item">
            About Me
          </Link>
          <Link to="/" className="nav-item">
            What I do
          </Link>
          <Link to="/" className="nav-item">
            Projects
          </Link>
          <Link to="/" className="nav-item">
            Contact Me
          </Link>
        </div>
      </div>
    </BrowserRouter>
  );
}
