import React, { useState } from 'react';
import {planets} from '../../assets/JSON/planetsObj'; 
import './selectDropdown.css';  



export const SelectDropdown = () => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(planets);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (name) => {
    console.log("I got clicked", name)
    selectedItem == name ? setSelectedItem(null) : setSelectedItem(name);
    //useNavigate in here
    setOpen(false); 
  }
 
  
  return (
    <>
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        {selectedItem ? selectedItem : "Select your Planet"}
        <i className={`fa fa-chevron-right icon ${isOpen && "open"}`}></i>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>

        {items.map(item => (
          <div className="dropdown-item" onClick={() => handleItemClick(item.name)} key={item.name} name={item.name}>
            <span className={`dropdown-item-dot ${item.name == selectedItem && 'selected'}`}>• </span>
            {item.name}
          </div>
        ))}

      </div>
    </div>
      <div className="dropdown-proceed">
      <button type="submit" id="button-dropdown">
              proceed
            </button>
      </div>
      </>
  )
}

