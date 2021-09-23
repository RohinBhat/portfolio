import { Link } from "react-router-dom";
import React from "react";
import notfound from "../images/404.svg";

export default function NotFound() {
  return (
    <div className="w-full mx-auto">
      {/* <h1 className="text-center mt-2 font-primary font-black text-9xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
        404
      </h1> */}
      <div>
        <img
          className="mx-auto w-auto h-auto max-w-lg"
          src={notfound}
          alt="Not Found"
        />
      </div>
      <h3 className="text-center font-primary font-black text-5xl text-white transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
        Looks like you've reached a Dead End!
      </h3>
      <p className="text-center mt-2 font-secondary font-normal text-xl text-gray-400">
        The page you are looking for does not exist. Please check the URL for
        spelling mistakes or capitalization and try again. If you are having
        trouble locating your destination, try to visit the
        <span className="text-blue-500 hover:text-blue-700">
          <Link to="/"> Home Page</Link>
        </span>
        .
      </p>
      <div className="text-center">
        <Link to="/">
          <button className="w-full mt-8 bg-transparent transition duration-500 ease-in-out hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded lg:w-auto">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}
