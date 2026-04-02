import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Saturn({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.01;
  return (
    <Orbits
      orbitSize={0.70}
      planetSize={7.6} //4 actual
      image="images/icons/saturn2.png"
      speed={planetSpeed}
      orbitColor="rgba(230, 210, 140, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Saturn)}
      rotateSpeed = {90}
      isPaused = {isPaused}
    />
  );
}

export default Saturn;

