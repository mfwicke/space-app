
import "./header.css"
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", "/contact");
  };

  return (
    <header class="header">
    <NavLink to="/"><img src={process.env.PUBLIC_URL + "/assets/Images/stlogo-green.png"} alt="Logo" className="logo"/></NavLink>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
    <ul class="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
            <NavLink to="/contacts">Contacts</NavLink>
        </li>
        <li>
          <NavLink to="/Register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/User">Welcome User</NavLink>
        </li>
    </ul>
</header>
  );
}