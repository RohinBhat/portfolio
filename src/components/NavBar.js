import { BrowserRouter, Link, Route } from "react-router-dom";

import React from "react";
import logo from "../images/portfolio-logo-white.png";

export default function NavBar() {
  return (
    <BrowserRouter>
      <div className="sticky z-50 top-0 backdrop-filter backdrop-blur mx-auto flex items-center justify-between px-8 sm:px-6">
        <img src={logo} className="h-20 lg:h-24" alt="Logo" />
        <div className="flex">
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5 hover:text-blue-500"
          >
            Home
          </Link>
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5 hover:text-blue-500"
          >
            About Me
          </Link>
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5 hover:text-blue-500"
          >
            What I do
          </Link>
          <Link
            to="/"
            className="my-auto text-white font-primary font-medium text-lg px-5 hover:text-blue-500"
          >
            Projects
          </Link>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded font-primary text-lg ">
            Contact Me ☎️
          </button>
        </div>
      </div>
    </BrowserRouter>
  );
}
