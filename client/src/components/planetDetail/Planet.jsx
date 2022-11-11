import React from "react";
import { useParams } from "react-router-dom";
import Picture from "../../assets/Images/picture_one.jpg";

const planets = [
  {
    name: "mercury",
    description: "Mercury is the smallest planet in the Solar System.",
    numberOfImages: 0,
  },
  {
    name: "mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
    numberOfImages: 0,
  },
  {
    name: "venus",
    description: "Venus is the second planet from the Sun.",
    numberOfImages: 0,
  },
  {
    name: "earth",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
    numberOfImages: 0,
  },
  {
    name: "jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
    numberOfImages: 0,
  },
  {
    name: "saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
    numberOfImages: 0,
  },
  {
    name: "uranus",
    description: "Uranus is the seventh planet from the Sun.",
    numberOfImages: 1,
    img: "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
  },
  {
    name: "neptune",
    description:
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System.",
    numberOfImages: 2,
    img: "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    img2: Picture,
    img3: Picture,
  },
];

const Planet = () => {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);
  return (
    <div>
      <h1>Planet: {name}</h1>
      <p>{planets.find((planet) => planet.name === name).description}</p>
      {planet.numberOfImages === 1 ? (
        <img src={planet.img} alt="planet" />
      ) : (
        <>
          <img src={planet.img} alt="planet" />
          <img src={planet.img2} alt="planet" />
        </>
      )}
    </div>
  );
};

export default Planet;
