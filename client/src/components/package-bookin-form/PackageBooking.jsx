import React, {useState} from 'react'; 
import { planets } from '../../assets/JSON/planetsObj';
import './packageBooking.css'; 

const packageData = [
  {
    name: 'mars', 
    title: 'mars package',
    packages: ['Mars Package 1', 'Mars Package 2', 'Mars Package 3']
  },
  {
    name: 'Mars Package 2',
  },
  {
    name: '`${lksd} Package 3`',
  }
]

export const PackageBooking = () => {

  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(planets);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);

  const submenu = packageData.map((item => item))
  
  const handleItemClick = (name) => {
    console.log("I got clicked", name)
    selectedItem == name ? setSelectedItem(null) : setSelectedItem(name);

    //useNavigate in here
    setOpen(false); 
  }
 

  return (
    <>
      <div className="booking-form-container">

        <h1 id='welcome-message'>Welcome To ...`$Your Planet`</h1>
      
      <div className="dropdown-and-btn">

        <div className="dropdown-box">

          <div className='dropdown-header' onClick={toggleDropdown}>
              {selectedItem ? selectedItem : "Select your Planet:"}
          </div>

          <div className={`dropdown-body ${isOpen && 'open'}`}>
            {items.map(item => (
              <div className="dropdown-item" onClick={() => handleItemClick(item.name)} key={item.name} name={item.name}>
                <span className={`dropdown-item-dot ${item.name == selectedItem && 'selected'}`}></span>
                {item.name}
                {/* <span className="submenu">{item.name === item.submenu[0].name ? <span>{item.submenu[0].packages}</span> : ""}</span> */}
              </div>
              ))}
          </div>
          
        </div>

        <div className="btn-proceed-box">
          <span className="dropdown-package-proceed">
            <button type="submit" id="package-dropdown-button">Book</button>
          </span>
        </div>

      </div>
      </div>
    </>
  )
}