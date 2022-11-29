import React from "react";
//import { Route, Routes, Navigate } from "react-router-dom";
import "./contacts.css";
import { contacts } from "../../assets/JSON/contactsInfo.js";


const Contacts = () => {
  console.log(contacts);
  return (
    <>
      <div className="contacts-wrapper">
        {contacts.map((contact) => (
          <div className="contact">
            <h1>{contact.name}</h1>
            <p>{contact.info}</p>
            <p>{contact.email}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
