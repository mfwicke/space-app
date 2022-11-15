import "./header.css"
import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/about", "/contact");
  };

  return (
    <div className="barContainer">
      <nav className="barLeft">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
      <nav className="barRight">
        <ul>
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
      </nav>
    </div>
  );
}