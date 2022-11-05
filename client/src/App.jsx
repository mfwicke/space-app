import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Mercury from "./components/planets/mercury/Mercury";

function App() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    <Mercury
      planet="Mercury"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <Mercury
      planet="Mercury"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <Mercury
      planet="Mercury"
      onDragStart={handleDragStart}
      role="presentation"
    />,
    <Mercury
      planet="Mercury"
      onDragStart={handleDragStart}
      role="presentation"
    />,
  ];
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <AliceCarousel mouseTracking items={items} />
      {/* <Mercury planet={"Mercury"} /> */}
    </div>
  );
}

export default App;
