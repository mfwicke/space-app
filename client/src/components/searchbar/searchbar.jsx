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
    const clone = [...planets]
    
    return (
        
        <div className='dropdown'>         
         <Select 
         className='down' 
         options={clone} 
         onChange={handlePlanetSelect} 
         value={clone.map(function(planet) { 
            return planet.name === selectOption;
            })} 
        label="single select" 
        />       
        </div>
        // <>
        //     <Select 
        //         options={clone}
        //         onChange={handlePlanetSelect}
        //         value={
        //             clone.reduce((prevValue, currentValue) => prevValue + currentValue.name, 0)
        //         }
        //     />
        // </>
    )
}




//map((option, i) => option.img + i && option.name + i) 