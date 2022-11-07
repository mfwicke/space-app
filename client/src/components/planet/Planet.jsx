import React from "react";
import "./Planet.css";

export const Planet = ({ planet }) => {
  return (
    <>
      <div className="solar">
        <div className={"solar_system"}>
          <div className={"planet " + planet.name}>
            <div className={"planet_description"}>
              {/* <h2>Planet</h2> */}
              <h1>{`${planet.name}`}</h1>
              <p className={""}>{planet.description}</p>
            </div>
            {/* <div className="overlay"></div> */}
          </div>
        </div>
      </div>
    </>
  );
};
