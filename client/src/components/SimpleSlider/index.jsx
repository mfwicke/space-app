import React from "react";
import Slider from "react-slick";
import "./index.css";

import { Planet } from "../planet/Planet";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  const settings = {
    className: "responsive",
    centerMode: true,
    padding: "1rem",
    //autoplay: true,
    //dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    //fade: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: "unslick",
        // {
        //   slidesToShow: 1,
        //   slidesToScroll: 1,
        // },
      },
    ],
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
      <div className="what">
        <h1>STELLAR TRIPS - Space is the Limit!</h1>
        <Slider {...settings} className={"single_planet"}>
          {planets.map((planet, i) => (
            <Planet planet={planet} key={i} />
          ))}
        </Slider>
      </div>
    </>
  );
};
