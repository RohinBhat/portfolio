import AchievementCard from "./AchievementCard";
import Fade from "react-reveal/Fade";
import React from "react";
import achievementsData from "../../data/achievements.json";

export default function Achievements() {
  return (
    <div className="mb-8 mt-20">
      <Fade up>
        <div>
          <h1 className="heading-main mb-8">Achievements</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="flex flex-wrap w-full justify-center">
          {achievementsData.map((achievement, index) => (
            <AchievementCard achievement={achievement} key={index} />
          ))}
        </div>
      </Fade>
    </div>
  );
}
