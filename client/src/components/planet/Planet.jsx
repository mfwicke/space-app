import React from "react";
import "./Planet.css";

export const Planet = ({ planet }) => {
  return (
    <>
      <div className={"planet_description"}>
        <div className="solar">
          <p className={""}>{planet.description}</p>
          <h1>{`${planet.name}`}</h1>
          <div className={"solar_system rotate"}>
            <div className={"planet"}>
              <div className={"bg " + planet.name}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
