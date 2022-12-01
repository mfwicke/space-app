import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { planets } from "../../assets/JSON/planetsObj.js";
import Loading from "../loading/Loading.jsx";

import "./planet.css";

const Planet = () => {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);

  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    function loadingComplete() {
      setLoadingComplete(true);
    }

    setTimeout(() => {
      loadingComplete();
    }, 10000);
  }, []);

  return (
    <>
      <div>
        {loadingComplete ? (
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
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
};

export default Planet;
