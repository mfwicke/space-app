import React from "react";
import "./mercury.css";

const Mercury = ({ planet }) => {
  return (
    <>
      <div className="solar">
        <div className="solar_system">
          <div className="planet mercury">
            <div className="planet_description mercury">
              <h2>Planet</h2>
              <h1>{`${planet}`}</h1>
              <p className={""}>{}</p>
              <label for="readMercury">
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
      <input
        className="read"
        id="readMercury"
        name="mercuryRead"
        type="radio"
      />
      <label className="closeBig" for="closeMercury"></label>
      <input
        className="read"
        id="closeMercury"
        name="mercuryRead"
        type="radio"
      />
      <div className="panel"></div>
    </>
  );
};

export default Mercury;
