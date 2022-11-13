import React from "react";
import { useParams } from "react-router-dom";


const planets = [
  {
    name: "mercury",
    description: "Mercury is the smallest planet in the Solar System.",
  },
  {
    name: "mars",

    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
  },
  {
    name: "venus",
    description: "Venus is the second planet from the Sun.",
  },
  {
    name: "earth",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
  },
  {
    name: "jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
  },
  {
    name: "saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
  },
  {
    name: "uranus",
    description: "Uranus is the seventh planet from the Sun.",
  },
  {
    name: "neptune",
    description:
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System.",
  },
];

const Planet = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <>
      <h1>Planet: {name}</h1>
      <p>{planets.find((planet) => planet.name === name).description}</p>      
    </>
  );
};

export default Planet;
