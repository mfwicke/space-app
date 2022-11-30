import React, { useState } from "react";
import Select from "react-select";
import { planets } from "../../assets/JSON/planetsObj.js";
import "./selectDropdown.css";

export const SelectDropdown = ({ dropdownStyles }) => {
  const [selectOption, setOption] = useState(""); //selectOption not used!!!
  const handlePlanetSelect = (e) => {
    setOption(e.value);
  };
  const customTheme = (theme) => {
    return {
      ...theme,
      color: "#1a2942",
      cursor: "pointer",
      ":hover": {
        color: "#fff",
      },
    };
  };

  return (
    <div className="searchbar-container">
      <Select
        className="down"
        options={planets.map((planet) => ({
          label: planet.name,
          value: planet.name,
        }))}
        theme={customTheme}
        onChange={handlePlanetSelect}
        label="single select"
      />
      <button type="submit" id="search-button">
        Proceed
      </button>
    </div>
  );
};
