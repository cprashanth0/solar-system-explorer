import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";

function Neptune({ onPlanetClick, resetKey, speedTimes }) {
  const planetSpeed = 0.005 * speedTimes;
  return (
    <Orbits
      orbitSize={0.92}
      planetSize={3}
      image="images/icons/neptune.png"
      speed={planetSpeed}
      orbitColor="rgba(110, 140, 255, 0.26)"
      onPlanetClick={onPlanetClick}
      planetData={PlanetData.Neptune}
      rotateSpeed = {150}
      resetKey = {resetKey}
    />
  );
}

export default Neptune;
