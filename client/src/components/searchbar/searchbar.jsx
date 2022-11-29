import React, {useState} from "react"; 
import Select from 'react-select'; 
import { planets } from '../../assets/JSON/planetsObj.js';
import './searchbar.css'; 


export const Searchbar = () => {
    const [selectOption, setOption] = useState('none');    
    const handlePlanetSelect = e => {
        setOption(e.value); 
    };
    const customTheme = (theme) => {
        return {
            ...theme,
            colors: {
                ...theme.colors,
                primary25: 'grey',
                primary: 'lightgrey',
            },
        };
    }

    return (
        
        <div className='searchbar-container'>         
         <Select 
         className='down' 
         options={planets.map((planet) => ({
            label: planet.name,
            value: planet.name,
         }))} 
         theme={customTheme}
         onChange={handlePlanetSelect}          
         label="single select" 
        />       
        </div>
        
    )
}