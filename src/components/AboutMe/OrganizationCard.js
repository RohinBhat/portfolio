import React from "react";

export const OrganizationCard = (props) => {
  const { date, position, name, logo } = props.organization;
  return (
    <div className="w-full xl:w-1/2 my-4">
      <div className="bg-gray-800 rounded-lg px-8 py-6 m-4 h-full">
        <div className="flex space-x-8 h-full">
          <img
            className="rounded-full h-24 w-24 bg-white my-auto"
            src={logo}
            alt={name}
          />
          <div className="my-auto">
            <h3 className="text-blue-500 font-primary font-bold text-2xl">
              {name}
            </h3>
            <h4 className="text-gray-300 font-secondary font-medium text-lg">
              {position}
            </h4>
            <p className="text-gray-400 font-secondary font-medium text-md">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
