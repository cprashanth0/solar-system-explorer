import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Saturn({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.01;
  return (
    <Orbits
      orbitSize={770}
      planetSize={47} //28 actual
      image="/public/images/icons/saturn2.png"
      speed={planetSpeed}
      orbitColor="rgba(230, 210, 140, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Saturn)}
    />
  );
}

export default Saturn;

