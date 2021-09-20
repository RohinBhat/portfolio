import "../styles/navbar.css";

import { BrowserRouter, Link, Route } from "react-router-dom";

import React from "react";
import logo from "../images/portfolio-logo-white.png";

export default function NavBar() {
  return (
    <BrowserRouter>
      <div className="w-11/12 relative max-w-screen-xl mx-auto flex items-center justify-between px-8 sm:px-6">
        <img src={logo} className="h-24" alt="Logo" />
        <div className="flex">
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5"
          >
            Home
          </Link>
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5"
          >
            About Me
          </Link>
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5"
          >
            What I do
          </Link>
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5"
          >
            Projects
          </Link>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded font-primary text-lg ">
            Contact Me
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}
