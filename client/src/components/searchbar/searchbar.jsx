import React, {useState} from "react"; 
import Select from 'react-select'; 
import { planets } from '../../assets/JSON/planetsObj.js';
import './searchbar.css'; 


export const Searchbar = () => {
    const [selectOption, setOption] = useState('none'); 
   
    const handlePlanetSelect = e => {
        setOption(e.value); 
    };

// const dropdown = planets.map((planet) => planet.name); 
    
    return (
        
        <div className='dropdown'>      
         
         <Select 
         className='down' 
         options={planets} 
         onChange={handlePlanetSelect} 
         value={planets.filter(function(planet) { 
            return planet.name === selectOption;
            })} 
        label="single select" 
        />
       
        </div>
    )
}




//map((option, i) => option.img + i && option.name + i) 