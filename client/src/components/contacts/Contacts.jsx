import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
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
      <p>HOLA!!!!</p>
    </>
  );
};

export default Contacts;
