import React from "react";
import "./about.css";
import { SelectDropdown } from "../planetSelect/SelectDropdown";
import CompanyStory from "../companyStory/CompanyStory";
import FoundersStory from "../foundersStory/FoundersStory"


const About = () => {
  return (
    <>
      <div className="about-wrapper">
        <h1 className="about-title">This is our About page!</h1>
        <div className="about-info">
          <CompanyStory />
          <FoundersStory />
        </div>
      </div>
    </>
  )
}

export default About
