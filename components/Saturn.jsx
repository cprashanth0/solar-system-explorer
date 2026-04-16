import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Saturn({ onPlanetClick, resetKey, speedTimes }) {
  const planetSpeed = 0.01 * speedTimes;
  return (
    <Orbits
      orbitSize={0.70}
      planetSize={7.6} //4 actual
      image="images/icons/saturn2.png"
      speed={planetSpeed}
      orbitColor="rgba(230, 210, 140, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Saturn)}
      rotateSpeed = {90}
      resetKey = {resetKey}
    />
  );
}

export default Saturn;

