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
    description: [
      "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System.",
      "Named after the Roman god of war, it is often referred to as the Red Planet because the iron oxide prevalent on its surface gives it a reddish appearance.",
      "Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
    ],
    img: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/MarsPanoramaa.jpg/1920px-MarsPanoramaa.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg/400px-Curiosity_at_Work_on_Mars_%28Artist%27s_Concept%29.jpg",
    ],
  },
  {
    name: "venus",
    description: [
      "Venus is the second planet from the Sun.",
      "It is named after the Roman goddess of love and beauty.",
      "As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.",
      "Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn.",
    ],
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "earth",
    description: [
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
      "About 29% of Earth's surface is land consisting of continents and islands.",
      "The remaining 71% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere.",
      "Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite.",
    ],
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "jupiter",
    description: [
      "Jupiter is the fifth planet from the Sun and the largest in the Solar System.",
      "It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
      " Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history.",
    ],
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "saturn",
    description: [
      "Saturn is the sixth planet from the Sun and the second-largest in the Solar System.",
      "Adorned with a dazzling system of icy rings, Saturn is unique in our Solar System.",
      "It is not the only planet to have rings — Jupiter and Uranus are also ringed — but none are as spectacular or as complicated as Saturn's.",
    ],
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "uranus",
    description: [
      "Uranus is the seventh planet from the Sun.",
      "It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.",
      "Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.",
    ],
    img: [
      "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    ],
  },
  {
    name: "neptune",
    description: [
      "Neptune is the eighth and farthest known planet from the Sun in the Solar System.",
      "In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
      "Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
      "Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.",
    ],

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
      <p>
        {planet.description.map((text, k) => (
          <p key={k}>{text}</p>
        ))}
      </p>

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
