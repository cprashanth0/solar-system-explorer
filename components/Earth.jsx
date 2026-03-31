import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";

function Earth({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.03;
  return (
    <Orbits
      orbitSize={330}
      planetSize={15}
      image="images/icons/earth.png"
      speed={planetSpeed}
      orbitColor="rgba(100, 170, 255, 0.30)"
      onPlanetClick={() => onPlanetClick(PlanetData.Earth)}
    />
  );
}

export default Earth;