const planets = [
  {
    name: "mercury",
    content: [
      {
        text:
          "Mercury is the smallest planet in our solar system and the closest to the Sun. It is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Mercury lacks an atmosphere to retain heat, so its surface experiences the greatest temperature variations of any planet in the solar system. Daytime temperatures can reach 430 degrees Celsius (800 degrees Fahrenheit).",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "mars",
    content: [
      {
        text:
          "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries a name of the Roman god of war, and is often referred to as the 'Red Planet'.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "venus",
    content: [
      {
        text:
          "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the second-brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and, rarely, is visible to the naked eye in broad daylight.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days.",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "earth",
    content: [
      {
        text:
          "Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29.2% of Earth's surface is land consisting of continents and islands. The remaining 70.8% is covered with water, mostly by oceans but also lakes, rivers and other fresh water, which together constitute the hydrosphere.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year.",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "jupiter",
    content: [
      {
        text:
          "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two-and-a-half times that of all the other planets in the Solar System combined.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "saturn",
    content: [
      {
        text:
          "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Saturn is named after the Roman god of agriculture; its astronomical symbol (♄) represents the god's sickle. Saturn is the only planet known to have rings, which were first seen in 1610.",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "uranus",
    content: [
      {
        text:
          "Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. Uranus is similar in composition to Neptune, and both have bulk chemical compositions which differ from that of the larger gas giants Jupiter and Saturn.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F).",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],
  },
  {
    name: "neptune",
    content: [
      {
        text:
          "Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
      },
      {
        text:
          "Neptune is 17 times the mass of Earth and is slightly more massive than its near-twin Uranus, which is 15 times the mass of Earth. Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.",
        img: [
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
        text: "",
      },
    ],

    // description: [
    //   "In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet.",
    //   "Neptune is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.",
    //   "Neptune is denser and physically smaller than Uranus because its greater mass causes more gravitational compression of its atmosphere.",
    // ],

    // img: [
    //   "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    //   "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    //   "https://photographylife.com/wp-content/uploads/2019/03/Canon-EOS-R-Image-Sample-19-960x640.jpg",
    // ],
  },
];

export { planets };
console.log(planets);
