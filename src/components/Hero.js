import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../images/me.png";

export default function Hero() {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
      <div className="my-auto px-5 flex flex-col justify-start md:justify-center lg:justify-start">
        <h1 className="font-primary font-bold text-white text-5xl text-left">
          Hey there,
        </h1>
        <h1 className="mt-2 font-primary font-bold text-white text-5xl text-left">
          I'm Rohin Bhat
        </h1>
        <div className="mt-4 font-primary font-medium text-blue-500 text-4xl text-left">
          <Typewriter
            options={{
              loop: true,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Mobile App Developer")
                .pauseFor(500)
                .deleteAll()
                .typeString("Web Developer")
                .pauseFor(500)
                .deleteAll()
                .typeString("Graphic Designer")
                .pauseFor(500)
                .deleteAll()
                .start();
            }}
          />
        </div>
        <h1 className="mt-4 font-secondary font-normal text-gray-400 text-xl text-left">
          I am a Computer Engineering Undergraduate at Pune Institute of
          Computer Technology with a keen interest in the field of Mobile App
          Development and Graphic Design.
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-around">
          <button className="mt-8 bg-transparent transition duration-500 ease-in-out hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded">
            See my Resume
          </button>
          <button className="mt-4 bg-transparent transition duration-500 ease-in-out hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded lg:mt-8">
            Hire me now
          </button>
        </div>
      </div>

      <div className="px-5 flex flex-col items-center">
        <img
          src={photo}
          className="rounded-full shadow-2xl mt-8 lg:mt-0"
          alt="Rohin Bhat"
        />
      </div>
    </div>
  );
}
