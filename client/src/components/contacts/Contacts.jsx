import React from "react";
//import { Route, Routes, Navigate } from "react-router-dom";
import "./contacts.css";
import { contacts } from "../../assets/JSON/contactsInfo.js";

const Contacts = () => {
  return (
    <>
      <div className={`contacts-wrapper id${contacts.id}`}>
        {contacts.map((contact, k) => (
          <div className="contact">
            <img src={contact.image} alt="" key={k} className="art" />
            <h1 className="contact-name">{contact.name}</h1>
            <p>{contact.email}</p>
            <p>{contact.linkedin}</p>
            <p>{contact.github}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Contacts;
