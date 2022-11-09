import React from "react";
import { useParams } from "react-router-dom";

const Planet = () => {
  const { name } = useParams();
  console.log(name);
  return <></>;
};

export default Planet;
