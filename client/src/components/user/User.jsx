import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const User = (props) => {
  const [user, setUser] = useState(null);

  const url = "/api/users/profile/:id";

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(url, { user });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUser();
  }, [user]);

  return (
    <>
      <h1>{`Hello ${props.user}, Welcome back`}</h1>
      <p>{`This account was created on the ${props.dateCreated}`}</p>
    </>
  );
};

export default User;
