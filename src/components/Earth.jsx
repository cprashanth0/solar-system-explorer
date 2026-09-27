import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
import earthImage from "/images/icons/earth.png";

function Earth({ onPlanetClick, resetKey, speedTimes }) {
  const planetSpeed = 0.03 * speedTimes;
  return (
    <Orbits
      orbitSize={0.34}
      planetSize={2}
      image={earthImage}
      speed={planetSpeed}
      orbitColor="rgba(100, 170, 255, 0.30)"
      onPlanetClick={onPlanetClick}
      planetData={PlanetData.Earth}
      rotateSpeed = {10}
      resetKey = {resetKey}
    />
  );
}

export default Earth;