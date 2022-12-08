import React, { useState } from "react";
import { planets } from "../../assets/JSON/planetsObj";
import "./packageBooking.css";

export const PackageBooking = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(planets);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [isBookingCompleted, setIsBookingCompleted] = useState(false);
  const [packagesBooked, setPackagesBooked] = useState([]); 

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (name) => {
    selectedItem === name ? setSelectedItem(null) : setSelectedItem(name);
    setOpen(false);
  };

  const handleProceed = (e) => {
    e.preventDefault();
    if (selectedItem !== null) {
      const findPlanet = planets.find((planet) => planet.name === selectedItem);
      setSelectedPlanet(findPlanet);
    }
  };

  const addPackage = (packageSupplied) => {
    console.log(packageSupplied)
    let packageFound = packagesBooked.findIndex((p) => p.name === packageSupplied.name)
    if(packageFound !== -1) {
      console.log(packageFound)
      let newArray = packagesBooked.filter((p) => p.name !== packageSupplied.name)
      setPackagesBooked(newArray); 
    }else {
      console.log('adding booking')
      setPackagesBooked([...packagesBooked, packageSupplied])
    }
  }

  const bookingSubmit = () => {
    console.log(packagesBooked)
    setIsBookingCompleted(true); 
  }  

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
                    item.name === selectedItem && "selected"
                  }`}
                ></span>
                {item.name}
              </div>

            ))}
          </div>
          {selectedPlanet !== null && !isBookingCompleted ? (
            <div className="redirect-form-container">
              <h1 id="redirect-message">{`Welcome to ${selectedPlanet.name}`}</h1>
              <div className="info">
                {selectedPlanet.package.map((item) => (
                  <>
                    <h4 className="items">
                      <input type="checkbox" onChange={() => addPackage(item)}/>
                      {` Package: ${item.name}, 
                      Price: ${item.price}, 
                      Description: ${item.description}`}
                    </h4>
                  </>
                ))}
              </div>
              <span className="btn-book">
                <button type="button" id="package-redirect-button" onClick={bookingSubmit}>
                  Book
                </button>
              </span>
            </div>
          ) : (
            ""
          )}
          ;
        </div>
          {
            isBookingCompleted ? (<div>
            
            <p>Booking completed</p>
            {packagesBooked.map((p) => (<p>{p.name}</p>))}
            </div>) : null
          }
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
