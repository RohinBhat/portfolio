import React from "react";

export const SkillCard = (props) => {
  const { name, url } = props.details;
  return (
    <div className="w-28 my-3 mx-auto bg-gray-600 py-4 rounded-md flex flex-col items-center">
      <img className="w-12 mb-2" src={url} alt={name} />
      <p className="font-secondary text-white font-medium">{name}</p>
    </div>
  );
};
