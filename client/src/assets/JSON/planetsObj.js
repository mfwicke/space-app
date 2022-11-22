const planets = [
  {
    name: "mercury",
    content: [
      {
        text:
          "Mercury is the smallest planet in our solar system and the closest to the Sun. It is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
        img:
          "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20146/53d0396e299b5059f6001964_Mercury+%28enhanced+color+image%2C+based+on+MESSENGER+measurements%2C+credit+NASA%29/Mercury+%28enhanced+color+image%2C+based+on+MESSENGER+measurements%2C+credit+NASA%29_1875e677-1471-4a45-ae88-e650fbd5d07a-prv.jpg",
      },
      {
        text:
          "Mercury lacks an atmosphere to retain heat, so its surface experiences the greatest temperature variations of any planet in the solar system. Daytime temperatures can reach 430 degrees Celsius (800 degrees Fahrenheit).",
        img: [
          "https://s3.amazonaws.com/cms.ipressroom.com/173/files/20146/53d03a08bd26f560b700268d_Mercury+image+%28credit%2C+NASA-Johns+Hopkins+University+Applied+Physics+Laboratory-Carnegie+Institution+of+Washington%29/Mercury+image+%28credit%2C+NASA-Johns+Hopkins+University+Applied+Physics+Laboratory-Carnegie+Institution+of+Washington%29_c4cb4245-54f8-4b21-bcd1-b6915e8cd97f-prv.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/msnbc/Components/Photo_StoryLevel/080114/080114-mercury-hmed-10a.jpg",
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
          "https://www.planet-wissen.de/natur/weltall/mars/intromarsteleskopgjpg100~_v-gseapremiumxl.jpg",
      },
      {
        text:
          "Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the valleys, deserts, and polar ice caps of Earth.",
        img: [
          "https://www.planet-wissen.de/natur/weltall/mars/intromarspathfindergjpg100~_v-gseapremiumxl.jpg",
        ],
      },
      {
        img:
          "https://www.planet-wissen.de/natur/weltall/mars/intromarsteleskopgjpg100~_v-gseapremiumxl.jpg",
        text: "hellooo",
      },
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
          "https://www.fr.de/bilder/2021/06/03/90787980/26262333-die-venus-birgt-noch-viele-geheimnisse-die-zwei-kuenftige-nasa-missionen-ihr-entlocken-sollen-das-bild-entstand-aus-daten-der-nasa-raumsonden-magellan-2xec.jpg",
      },
      {
        text:
          "Venus lies within Earth's orbit, and so never appears to venture far from the Sun, either setting in the west just after dusk or rising in the east a bit before dawn. Venus orbits the Sun every 224.7 Earth days.",
        img: [
          "https://img.welt.de/img/wissenschaft/mobile100644536/8352503157-ci102l-w1024/Venus-DW-Wissenschaft-Hamburg-jpg.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://cdn.shortpixel.ai/spai/q_lossy+ret_img+to_webp/https://cosmosmagazine.com/wp-content/uploads/2021/10/Venus-oceans.jpg",
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
          "https://spectrum.ieee.org/media-library/earth-in-space.jpg?id=27044580&width=1200&height=900",
      },
      {
        text:
          "Earth's gravity interacts with other objects in space, especially the Sun and the Moon, Earth's only natural satellite. Earth revolves around the Sun in 365.26 days, a period known as an Earth year.",
        img: [
          "https://gruposaedal.com/wp-content/uploads/2022/09/Earths-First-Continents-Sank-Into-The-Planet-Before-Rising-Up.jpg",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img: "https://www.propeller.la/files/Earth%20Lil%20Dicky/earth-hug.png",
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
          "https://www.scinexx.de/wp-content/uploads/0/1/01-33573-jupiter.jpg",
      },
      {
        text:
          "Jupiter is one of the brightest objects visible to the naked eye in the night sky, and has been known to ancient civilizations since before recorded history. It is named after the Roman god Jupiter.",
        img: ["https://media.timeout.com/images/105903888/320/210/image.jpg"],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://www.franz-ploetz.de/s/cc_images/teaserbox_20304591.jpg?t=1638989526",
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
          "https://im.contentlounge.net/styles/manual_crop/s3/2022-02/imago_96778830-v1.jpg?im=AspectCrop%2Csize%3D%2816%2C9%29%2Cgravity%3DCenter%2CallowExpansion%2CBackgroundColor%2Ccolor%3Dtransparent&hash=90fd58fe960da0ae2c631c37d66221c1c9e676983cc3d9a79d59ecc26db1baf7",
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
          "https://www.br-online.de/wissen-bildung/spacenight/sterngucker/foto/saturn-hubble-gr.jpg",
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
        img: "https://www.wissenschaft.de/wp-content/uploads/u/r/uranus_lp.jpg",
      },
      {
        text:
          "Uranus's atmosphere is similar to Jupiter's and Saturn's in its primary composition of hydrogen and helium, but it contains more 'ices' such as water, ammonia, and methane, along with traces of other hydrocarbons. It is the coldest planetary atmosphere in the Solar System, with a minimum temperature of 49 K (−224 °C; −371 °F).",
        img: [
          "https://img.zeit.de/wissen/2022-04/uranus-planet-forschung-raumfahrt-nasa-raumsonde-bild/wide__1300x731",
        ],
      },
      { img: "", text: "hellooo" },
      {
        img:
          "https://www.futurezone.de/wp-content/uploads/sites/11/2021/09/uranus.jpg",
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
  },
];

export { planets };
console.log(planets);
