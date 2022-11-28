
import Select from 'react-select'; 
import options from '../../assets/JSON/searchbarObj.js';

import './searchbar.css'; 

export const Searchbar = () => {
    const handleChange = (selectedOption) => {
        console.log("handleChange", selectedOption)
    }; 
    const list = options.map((option) => option.name)
    
    return (
        
        <div className='dropdown'>
       
         
         return   <Select className='down' display={list} onChange={handleChange}/>
       
        </div>
    )
}




//map((option, i) => option.img + i && option.name + i) 