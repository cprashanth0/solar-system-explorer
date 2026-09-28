import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
import uranusImage from "../assets/icons/uranus.webp";

function Uranus({ onPlanetClick, resetKey, speedTimes }) {
  const planetSpeed = 0.007 * speedTimes;
  return (
    <Orbits
      orbitSize={0.82}
      planetSize={3}
      image={uranusImage}
      speed={planetSpeed}
      orbitColor="rgba(150, 235, 255, 0.26)"
      onPlanetClick={onPlanetClick}
      planetData={PlanetData.Uranus}
      rotateSpeed = {120}
      resetKey = {resetKey}
    />
  );
}

export default Uranus;
