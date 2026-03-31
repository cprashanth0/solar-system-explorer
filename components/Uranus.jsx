import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
function Uranus({ onPlanetClick, isPaused }) {
  const planetSpeed = isPaused ? 0 : 0.007;
  return (
    <Orbits
      orbitSize={910}
      planetSize={22}
      image="images/icons/uranus.png"
      speed={planetSpeed}
      orbitColor="rgba(150, 235, 255, 0.26)"
      onPlanetClick={() => onPlanetClick(PlanetData.Uranus)}
    />
  );
}

export default Uranus;
