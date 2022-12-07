import React, { useState } from "react";
import { planets } from "../../assets/JSON/planetsObj";
import "./packageRedirect.css";

export const SecondPackage = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(planets);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (name) => {
    console.log("I got clicked", name);
    selectedItem === name ? setSelectedItem(null) : setSelectedItem(name);

    //useNavigate in here
    setOpen(false);
  };

  return (
    <>
      <div className="redirect-form-container">
        <h1 id="welcome-message">Welcome to $'your Planet'`</h1>
        <div className="dropdown-box">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedItem ? selectedItem : "Select your Package:"}
          </div>
          <div className={`dropdown-body ${isOpen && "open"}`}>
            {items.map((item) => (
              <div
                className="dropdown-item"
                onClick={() => handleItemClick(item.name)}
                key={item.name}
                name={item.name}
              >
                <span
                  className={`dropdown-item-dot ${
                    item.name === selectedItem && "selected"
                  }`}
                ></span>
                {item.package[0].name}
                {/* <span className="second-ddwn">{item.name === item.submenu[0].name ? <span>{item.submenu[0].packages}</span> : ""}</span> */}
              </div>
            ))}
          </div>
        </div>
        <span className="redirect-package-proceed">
          <button type="submit" id="package-redirect-button">
            Book
          </button>
        </span>
      </div>
    </>
  );
};
