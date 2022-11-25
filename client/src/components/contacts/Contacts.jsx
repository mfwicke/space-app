import React from "react";
//import { Route, Routes, Navigate } from "react-router-dom";
import "./contacts.css";

const contacts = [
  {
    name: "STELLAR TRIPS Inc.",
    id: 0,
    image: "",
    description: "We are a travel agency that specializes in space travel.",
    age: "<1",
    info: "lorem ipsum dolor sit amet",
    github: "",
    linkedin: "",
    email: "contactus@stellartrips.com",
  },

  {
    name: "Lorenz Schmid",
    id: 1,
    image: "",
    info: "lorem ipsum dolor sit amet",
    github: "https://github.com/Lorenzzschmid",
    linkedin: "https://www.linkedin.com/in/lorenz-schmid-0a8b8a24b/",
    email: "mighty.lo.schmid@gmail.com",
  },

  {
    name: "Vincenzo Arena",
    id: 2,
    image: "",
    info: "lorem ipsum dolor sit amet",
    github: "https://github.com/vincenzoarena/",
    linkedin: "https://www.linkedin.com/in/vincenzo-arena-032a064b/",
    email: "penninoematita@gmail.com",
  },

  {
    name: "Miguel Wicke",
    id: 3,
    image: "",
    info: "lorem ipsum dolor sit amet",
    github: "https://github.com/mfwicke/",
    linkedin: "https://www.linkedin.com/in/miguelwickeld/",
    email: "mwicke@gmail.com",
  },
];

const Contacts = () => {
  return (
    <>
      <p>
        {contacts.map((contact) => (
          <div className="contact">
            <h1>{contact.name}</h1>
            <p>{contact.info}</p>
            <p>{contact.email}</p>
          </div>
        ))}
      </p>
    </>
  );
};

export default Contacts;
