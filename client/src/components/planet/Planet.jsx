import React from "react";
import "./Planet.css";
//import styled from "styled-components";

// const Slide = styled.box`
//   width: 100%;
//   height: 100%;
//   background: #fff;
//   border-radius: 10px;
//   box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   transition: 0.5s;
//   &:hover {
//     transform: scale(1.05);
//   }
// `;

export const Planet = ({ planet }) => {
  return (
    <>
      <div className={"slide"}>
        <p className={"planet_description"}>{planet.description}</p>
        <h1>{`${planet.name}`}</h1>
        <div className={"planet"}>
          <div className={"bg " + planet.name}></div>
        </div>
      </div>
    </>
  );
};
