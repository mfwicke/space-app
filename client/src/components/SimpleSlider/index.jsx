import React from "react";
import Slider from "react-slick";
//import Mars from "../planets/Mars/Mars";
//import Mercury from "../planets/mercury/Mercury";

import { Planet } from "../planet/Planet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  const settings = {
    className: "center",
    centerMode: true,
    padding: "60px",
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 2.5,
    slidesToScroll: 1,
  };

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

  return (
    <>
      <div>
        <Slider {...settings}>
          {planets.map((planet) => (
            <Planet planet={planet} />
          ))}
        </Slider>
      </div>
    </>
  );
};

// export SimpleSlider;
