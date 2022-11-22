import React from "react";
import { useParams } from "react-router-dom";
import { planets } from "../../assets/JSON/planetsObj.js";

import "./planet.css";

const Planet = () => {
  const { name } = useParams();
  const planet = planets.find((planet) => planet.name === name);
  console.log(name);
  // const zipped = (arr1, arr2) => arr1.map((k, i) => [k, arr2[i]]);

  return (
    <>
      <h1>{planet.name}</h1>
      <div className="style">
        {planet.content.map((item, k) =>
          item.img && item.text ? (
            <div className={`planet-${planet.name + k}`}>
              <img src={item.img} alt="" />
              <p>{item.text}</p>
            </div>
          ) : item.img ? (
            <img src={item.img} alt="" />
          ) : (
            <p>{item.text}</p>
          )
        )}
      </div>
    </>
    //       <>
    //         {item.img && <img src={item.img} />}
    //         <span> {item.text}</span>
    //       </>
    //     )}
    //   </div>
    // </>
  );
};

export default Planet;

// {zipped(planet.description, planet.img).map((item) => (
//   <div className="style">
//     <p>{item[0]}</p>
//     <img src={item[1]} alt="planet" />
//   </div>
// ))}
// {/* /* {planet.img.map((img, k) => (
//           <img
//             className={`photo-${planet.name + k}`}
//             src={img}
//             alt={planet.name}
//             key={k}
//           />
//         ))} */}
//         {/* {zipped(planet.description, planet.img).map((item) => (
//           <div className="style">
//             <p>{item[0]}</p>
//             <img src={item[1]} alt="planet" />
//           </div>
//         ))} */}

//         {/* {planet.description.map((text, k) => (
//           <p className={`text-${planet.name + k}`} key={k}>
//             {text}
//           </p>
//         ))} */}
