import { NavLink } from "react-router-dom";
import React from "react";

export const NavItem = (props) => {
  const { title, link } = props.item;
  return (
    <NavLink
      to={link}
      className="text-white font-primary font-medium text-lg px-5 text-center transition duration-500 ease-in-out hover:text-blue-500 mt-6 lg:my-auto"
    >
      {title}
    </NavLink>
  );
};
