import React from "react";
import { useParams } from "react-router-dom";
import { planets } from "../../assets/JSON/planetsObj.js";

import "./planet.css";

const Planet = () => {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);
  return (
    <>
      <h1>{`Welcome to ${planet.name}`}</h1>
      <div className="style">
        {planet.content.map((item, k) =>
          item.img && item.text ? (
            <div className={`planet-${planet.name + k}`}>
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          ) : item.img ? (
            <img src={item.img} alt="" />
          ) : (
            <p>{item.text}</p>
          )
        )}
      </div>
    </>
  );
};

export default Planet;
