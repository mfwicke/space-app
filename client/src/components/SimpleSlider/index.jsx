import React from "react";
import Slider from "react-slick";
import "./index.css";

import { Planet } from "../planet/Planet";
import { planets } from "../../assets/JSON/planetsObj.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const SimpleSlider = () => {
  const settings = {
    className: "responsive",
    centerMode: true,
    padding: "1rem",
    autoplay: true,
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

  return (
    <>
      <div className="what">
        <Slider {...settings} className={"single_planet"}>
        <div className="dropdown">
          
        </div>
          {planets.map((planet, i) => (
            <Planet planet={planet} key={i} />
          ))}
        </Slider>
      </div>
    </>
  );
};
