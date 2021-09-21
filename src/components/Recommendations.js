import React from "react";
import { RecommendationCard } from "./RecommendationCard";
import recommendationsData from "../data/recommendations.json";

export default function Recommendations() {
  return (
    <div className="mt-20 mx-3">
      <h1 className="font-secondary font-semibold text-2xl capitalize text-blue-500">
        WHAT MY SENIORS SAY
      </h1>
      <h1 className="mt-2 font-primary font-black text-5xl capitalize text-gray-300">
        Recommendations
      </h1>
      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {recommendationsData.map((recommendation, index) => (
          <RecommendationCard recommendation={recommendation} key={index} />
        ))}
      </div>
    </div>
  );
}
