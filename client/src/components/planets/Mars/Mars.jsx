import React from "react";
import "./mars.css";

const Mars = ({ planet }) => {
  return (
    <>
      <div className="solar">
        <div className="solar_system">
          <div className="planet mars">
            <div className="planet_description mars">
              <h2>Planet</h2>
              <h1>{`${planet}`}</h1>
              <p className={""}>{}</p>
              <label for="readMars">
                <a>
                  Read Mor
                  <span>e</span>
                </a>
              </label>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
      <input className="read" id="readMars" name="marsRead" type="radio" />
      <label className="closeBig" for="closeMars"></label>
      <input className="read" id="closeMars" name="marsRead" type="radio" />
      <div className="panel"></div>
    </>
  );
};

export default Mars;
