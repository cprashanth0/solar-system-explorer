import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";

function Neptune({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.005;
  return (
    <Orbits
      orbitSize={1030}
      planetSize={22}
      image="images/icons/neptune.png"
      speed={planetSpeed}
      orbitColor="rgba(110, 140, 255, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Neptune)}
    />
  );
}

export default Neptune;
