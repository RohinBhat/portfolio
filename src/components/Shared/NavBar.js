import { Link, NavLink } from "react-router-dom";

import React from "react";
import logo from "../../images/portfolio-logo-white.png";

export default function NavBar() {
  return (
    <div className="sticky bg-gray-900 bg-opacity-80 z-50 top-0 pt-4 backdrop-filter backdrop-blur mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between px-8 sm:px-6">
      <Link to="/">
        <img
          src={logo}
          className="max-h-16 md:max-h-20 xl:max-h-24 transition duration-500 ease-in-out transform hover:scale-105"
          alt="Logo"
        />
      </Link>
      <button className="text-white inline-flex p-3 hover:bg-gray-800 rounded lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>

      <div className="hidden w-full lg:w-auto lg:flex" id="navigation">
        <div className="flex flex-col lg:flex lg:flex-row">
          <NavLink
            to="/"
            className="text-white font-primary font-medium text-lg px-5 transition duration-500 ease-in-out hover:text-blue-500 mt-2 lg:my-auto"
          >
            Home
          </NavLink>
          <Link
            to="/"
            className="text-white font-primary font-medium text-lg px-5 transition duration-500 ease-in-out hover:text-blue-500 mt-2 lg:my-auto"
          >
            About Me
          </Link>
          <Link
            to="/"
            className="text-white font-primary font-medium text-lg px-5 transition duration-500 ease-in-out hover:text-blue-500 mt-2 lg:my-auto"
          >
            What I do
          </Link>
          <NavLink
            to="/resume"
            className="text-white font-primary font-medium text-lg px-5 transition duration-500 ease-in-out hover:text-blue-500 mt-2 lg:my-auto"
          >
            Resume
          </NavLink>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-2 mb-4 lg:mt-0 lg:mb-0">
            Contact Me ☎️
          </button>
        </div>
      </div>
    </div>
  );
}
