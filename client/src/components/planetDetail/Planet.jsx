import React from "react";
import { useParams } from "react-router-dom";

import "./index.css";

const planets = [
  {
    name: "mercury",
    description: "Mercury is the smallest planet in the Solar System.",
    img: [],
  },
  {
    name: "mars",
    description:
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MarsPanoramaa.jpg/1920px-MarsPanoramaa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg/400px-Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg",
    ],
  },
  {
    name: "venus",
    description: "Venus is the second planet from the Sun.",
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "earth",
    description:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "jupiter",
    description:
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "saturn",
    description:
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "uranus",
    description: "Uranus is the seventh planet from the Sun.",
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "neptune",
    description:
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System.",

    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
];

const Planet = () => {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);
  console.log(name);
  return (
    <>
      <h1>{planet.name}</h1>
      <p>{planet.description}</p>

      {planet.img.map((img, k) => (
        <img
          className={`photo-${planet.name + k}`}
          src={img}
          alt={planet.name}
          key={k}
        />
      ))}
    </>
  );
};

export default Planet;
