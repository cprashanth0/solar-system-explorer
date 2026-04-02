import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Jupiter({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.013;
  return (
    <Orbits
      orbitSize={0.58}
      planetSize={4.5}
      image="images/icons/jupiter.png"
      speed={planetSpeed}
      orbitColor="rgba(220, 170, 120, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Jupiter)}
      rotateSpeed = {60}
      isPaused = {isPaused}
    />
  );
}

export default Jupiter;

