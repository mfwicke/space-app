import React from 'react'
import { SelectDropdown } from '../../components/planetSelect/SelectDropdown'


const About = () => {
  return (
    <div>
      <h1>This is our About page!</h1>
      <div className="searchbarContainer">
        <SelectDropdown />
      </div>
    </div>
  )
}

export default About
