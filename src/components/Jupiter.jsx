import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Jupiter({ onPlanetClick, resetKey, speedTimes }) {
  const planetSpeed = 0.013 * speedTimes;
  return (
    <Orbits
      orbitSize={0.58}
      planetSize={4.5}
      image="images/icons/jupiter.png"
      speed={planetSpeed}
      orbitColor="rgba(220, 170, 120, 0.26)"
      onPlanetClick={onPlanetClick}
      planetData={PlanetData.Jupiter}
      rotateSpeed = {60}
      resetKey = {resetKey}
    />
  );
}

export default Jupiter;

