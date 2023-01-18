// import { useState } from "react";
// const Particle = () => {
//   const [x, setX] = useState(Math.random() * w);
//   const [y, setY] = useState(Math.random() * h);
//   const [color] = useState(options.particleColor);
//   const [radius] = useState(
//     options.defaultRadius + Math.random() * options.variantRadius
//   );
//   const [speed] = useState(
//     options.defaultSpeed + Math.random() * options.variantSpeed
//   );
//   const [directionAngle] = useState(Math.floor(Math.random() * 360));
//   const [vector] = useState({
//     x: Math.cos(directionAngle) * speed,
//     y: Math.sin(directionAngle) * speed,
//   });
//   const update = () => {
//     border();
//     setX(x + vector.x);
//     setY(y + vector.y);
//   };
//   const border = () => {
//     if (x >= w || x <= 0) {
//       vector.x *= -1;
//     }
//     if (y >= h || y <= 0) {
//       vector.y *= -1;
//     }
//   };
//   return { x, y, color, radius, update };
// };

// export default Particle;