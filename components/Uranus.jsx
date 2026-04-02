import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
import uranusImage from "/images/icons/uranus.png";
function Uranus({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.007;
  return (
    <Orbits
      orbitSize={0.82}
      planetSize={3}
      image={uranusImage}
      speed={planetSpeed}
      orbitColor="rgba(150, 235, 255, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Uranus)}
      rotateSpeed = {120}
      isPaused = {isPaused}
    />
  );
}

export default Uranus;
