import React, { useState } from "react";
import { planets } from "../../assets/JSON/planetsObj";
import "./packageBooking.css";

export const PackageBooking = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(planets);
  const [selectedItem, setSelectedItem] = useState(null);

  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (name) => {
    console.log("I got clicked", name);
    selectedItem == name ? setSelectedItem(null) : setSelectedItem(name);

    //useNavigate in here
    setOpen(false);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    console.log(selectedItem);
    if (selectedItem !== null) {
      const findPlanet = planets.find((planet) => planet.name === selectedItem);
      setSelectedPlanet(findPlanet);
      console.log(findPlanet);
    }
  };

  return (
    <>
      <div className="booking-form-container">
        <h1 id="welcome-message">Welcome Traveler Book Your Planet</h1>

        <div className="dropdown-box">
          <div className="dropdown-header" onClick={toggleDropdown}>
            {selectedItem ? selectedItem : "Select your Planet:"}
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
                    item.name == selectedItem && "selected"
                  }`}
                ></span>
                {item.name}
              </div>
            ))}
          </div>
          {selectedPlanet !== null ? (
            <div className="redirect-form-container">
              <h1 id="redirect-message">{`Welcome to ${selectedPlanet.name}`}</h1>
              <div className="info">
                {selectedPlanet.package.map((item) => (
                  <>
                    <h4 className="items"><input type="checkbox" />{` Package: ${item.name}, 
                      Price: ${item.price}, 
                      Description: ${item.description}`}</h4>
                  </>
                ))}
              </div>
              <span className="btn-book">
                <button type="submit" id="package-redirect-button">
                  Book
                </button>
              </span>
            </div>
          ) : (
            ""
          )}
          ;
        </div>

        <span className="dropdown-package-proceed">
          <button
            type="submit"
            id="package-dropdown-button"
            onClick={handleProceed}
          >
            Proceed
          </button>
        </span>
      </div>
    </>
  );
};
