import React, { useState, useContext } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { SelectDropdown } from "../planetSelect/SelectDropdown";
import { planets } from "../../assets/JSON/planetsObj";
import "./user.css";

const User = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const url = "/api/users/profile/";
  const { firstName, lastName } = useContext(AuthContext);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(url, { user });
        setUser(response.data);
        navigate("/profile");
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [(user, navigate)]);

  return (
    <>
      <h1>{`Hello ${firstName}, Welcome back`}</h1>

      <SelectDropdown />
    </>
  );
};

export default User;
