import React from "react";
import "./footer.css";
import { NavLink, useNavigate } from "react-router-dom";
import {FaInstagramSquare} from "@react-icons/all-files/fa/FaInstagramSquare";
import {FaSnapchatSquare} from "@react-icons/all-files/fa/FaSnapchatSquare";
import {FaTwitterSquare} from "@react-icons/all-files/fa/FaTwitterSquare";
import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", "/contacts", "/register", "/login", "/user");
  };


  return (
    <footer className="footerBox">
      <div className="social">
        <NavLink to="/"><FaInstagramSquare /></NavLink>
        <NavLink to="/"><FaSnapchatSquare /></NavLink>
        <NavLink to="/"><FaTwitterSquare /></NavLink>
        <NavLink to="/"><FaFacebookSquare /></NavLink>
      </div>
      <ul className="footerList">
        <li><NavLink to="/">Job Opportunities</NavLink></li>
        <li><NavLink to="/">Services</NavLink></li>
        <li><NavLink to="/">Terms & Conditions</NavLink></li>
        <li><NavLink to="/">Privacy Policy</NavLink></li>
      </ul>
      <div className="credits">
      <h6>Copyright © <span id="year"></span> STELLAR TRIPS Inc. All rights reserved.</h6>
      </div>
    </footer>
  );
}
