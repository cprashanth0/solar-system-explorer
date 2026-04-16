import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Mars({ onPlanetClick, resetKey, speedTimes }) {
  const planetSpeed = 0.024 * speedTimes;
  return (
    <Orbits
      orbitSize={0.42}
      planetSize={1.6}
      image="images/icons/mars.png"
      speed={planetSpeed}
      orbitColor="rgba(255, 120, 90, 0.28)"
      onPlanetClick={() => onPlanetClick(PlanetData.Mars)}
      rotateSpeed = {18}
      resetKey = {resetKey}
    />
  );
}

export default Mars;
