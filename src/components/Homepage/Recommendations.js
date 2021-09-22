import React from "react";
import { RecommendationCard } from "./RecommendationCard";
import recommendationsData from "../../data/recommendations.json";
import { useState } from "react";

export default function Recommendations() {
  const [current, setCurrent] = useState(recommendationsData[0]);

  const [active, setActive] = useState(0);

  const clickHandler = (event) => {
    setCurrent(
      recommendationsData[event.target.getAttribute("data-recommendation")]
    );
    setActive(parseInt(event.target.getAttribute("data-recommendation")));
  };

  return (
    <div className="mt-20 mx-3">
      <h1 className="text-center font-secondary font-semibold text-2xl capitalize text-blue-500">
        WHAT MY SENIORS SAY
      </h1>
      <h1 className="text-center mt-2 font-primary font-black text-5xl capitalize text-gray-300">
        Recommendations
      </h1>
      <div className="mt-20 grid grid-cols-1 gap-8">
        <RecommendationCard recommendation={current} />
      </div>
      <div>
        <div className="flex flex-row justify-center space-x-2 py-4">
          {recommendationsData.map((recommendation, index) => (
            <span
              className={`h-4 w-4 rounded-full cursor-pointer transition duration-300 ease-in-out ${
                index === active
                  ? `bg-gray-300 hover:bg-blue-500`
                  : `border-gray-300 hover:border-blue-500 border`
              }`}
              onClick={(event) => clickHandler(event)}
              data-recommendation={index}
              key={index}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}
