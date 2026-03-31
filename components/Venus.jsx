import Orbits from "../Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";

function Venus({ onPlanetClick, isPaused }){
  const planetSpeed = isPaused ? 0 : 0.035;
  return (
    <Orbits
      orbitSize={250}
      planetSize={15}
      image="images/icons/venus.png"
      speed={planetSpeed}
      orbitColor="rgba(230, 190, 120, 0.28)"
      onPlanetClick={() => onPlanetClick(PlanetData.Venus)}
    />
  );
}

export default Venus;
