import React from "react";
import { useParams } from "react-router-dom";
//import Routes from "../../routes/Routes.jsx";

import "./contacts.css";

const contacts = [
  {
    name: "STELLAR TRIPS Inc.",
    id: 0,
    image: "./assets/Images/foto-persona.jpg",
    age: "<1",
    info: "lorem ipsum dolor sit amet",
    email: "contactus@stellartrips.com",
  },

  {
    name: "Lorenz Schmid",
    id: 1,
    image: "./images/foto-persona.jpg",
    info: "lorem ipsum dolor sit amet",
    email: "mighty.lo.schmid@gmail.com",
  },

  {
    name: "Vincenzo Arena",
    id: 2,
    image: "./images/foto-persona.jpg",
    info: "lorem ipsum dolor sit amet",
    email: "penninoematita@gmail.com",
  },

  {
    name: "Miguel Wicke",
    id: 3,
    image: "./images/foto-persona.jpg",
    info: "lorem ipsum dolor sit amet",
    email: "mwicke@gmail.com",
  },
  {
    name: "Tareq Almasri",
    id: 4,
    image: "./images/foto-persona.jpg",
    info: "lorem ipsum dolor sit amet",
    email: "",
  },
];

const Contacts = () => {
  return (
    <>
      <h1>Contact</h1>
      <p>{contacts[4].name}</p>
      <img src={contacts[0].image} width={"2400px"} alt="planet" />
    </>
  );
};

export default Contacts;
