import React from "react";
//import { useParams } from "react-router-dom";
import { Login } from "../login/Login.jsx";
//import { TripForm } from "../trips/TripForm.jsx";
import { SignIn } from "../sign-in/Sign-in.jsx";
//import Routes from "../../routes/Routes.jsx";

import "./contacts.css";

const contacts = [
  {
    name: "STELLAR TRIPS Inc.",
    id: 0,
    image: "",
    description: "We are a travel agency that specializes in space travel.",
    age: "<1",
    info: "lorem ipsum dolor sit amet",
    email: "contactus@stellartrips.com",
  },

  {
    name: "Lorenz Schmid",
    id: 1,
    image: "",
    info: "lorem ipsum dolor sit amet",
    email: "mighty.lo.schmid@gmail.com",
  },

  {
    name: "Vincenzo Arena",
    id: 2,
    image: "",
    info: "lorem ipsum dolor sit amet",
    email: "penninoematita@gmail.com",
  },

  {
    name: "Miguel Wicke",
    id: 3,
    image: "",
    info: "lorem ipsum dolor sit amet",
    email: "mwicke@gmail.com",
  },
];

const Contacts = () => {
  return (
    <>
      <h1>{`Contact ${contacts.id[3]}`}</h1>

      <p>{}</p>
      <Login />
      <SignIn />
    </>
  );
};

export default Contacts;
