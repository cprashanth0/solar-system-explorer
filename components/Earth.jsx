import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";

function Earth({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.03;
  return (
    <Orbits
      orbitSize={0.34}
      planetSize={2}
      image="images/icons/earth.png"
      speed={planetSpeed}
      orbitColor="rgba(100, 170, 255, 0.30)"
      onPlanetClick={() => onPlanetClick(PlanetData.Earth)}
      rotateSpeed = {10}
      isPaused = {isPaused}
    />
  );
}

export default Earth;