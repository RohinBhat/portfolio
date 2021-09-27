import { NavItem } from "./NavItem";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../images/portfolio-logo-white.png";
import { useState } from "react";

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Me",
      link: "/about",
    },
    {
      title: "What I Do",
      link: "/work",
    },
    {
      title: "Resume",
      link: "/resume",
    },
  ];

  return (
    <div className="sticky bg-gray-900 bg-opacity-80 z-50 top-0 pt-4 backdrop-filter backdrop-blur mx-auto flex flex-wrap lg:flex-nowrap items-center justify-between px-8 sm:px-6">
      <NavLink to="/">
        <img
          src={logo}
          className="max-h-12 sm:max-h-16 md:max-h-20 xl:max-h-24 transition duration-500 ease-in-out transform hover:scale-105"
          alt="Logo"
        />
      </NavLink>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-800 rounded h-10 w-10 justify-center align-middle lg:hidden"
        onClick={handleClick}
      >
        <i className={clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}></i>
      </button>

      <div
        className={
          clicked
            ? "transition ease-in-out duration-500 transform w-full lg:w-auto lg:flex"
            : "transition ease-in-out duration-500 transform hidden w-full lg:w-auto lg:flex"
        }
      >
        <div className="flex flex-col lg:flex lg:flex-row">
          {navItems.map((item, index) => {
            return <NavItem key={index} item={item} />;
          })}

          <NavLink to="/contact">
            <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-medium text-center transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-6 mb-4 lg:mt-0 lg:mb-0">
              Contact Me ☎️
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
