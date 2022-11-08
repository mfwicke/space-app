import React from "react";
import "./Planet.css";

export const Planet = ({ planet }) => {
  return (
    <>
      <div className={"planet_description"}>
        <div className="solar">
          <h1>{`${planet.name}`}</h1>
          <p className={""}>{planet.description}</p>
          <div className={"solar_system rotate"}>
            <div className={"planet " + planet.name}></div>
          </div>
        </div>
      </div>
    </>
  );
};
