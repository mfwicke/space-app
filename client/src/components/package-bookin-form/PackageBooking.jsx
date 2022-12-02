import React, {useState} from 'react'; 
import './packageBooking.css'; 

const packageData = [
  {
    name: 'Mars Package 1', 
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
  const [items, setItem] = useState(packageData);
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
      <div className="booking-form-container">

        <h1 id='welcome-message'>Welcome To ...`$Your Planet`</h1>
      
      <div className="dropdown-and-btn">

        <div className="dropdown-box">

          <div className='dropdown-header' onClick={toggleDropdown}>
              {selectedItem ? selectedItem : "Select your Travel-Package:"}
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