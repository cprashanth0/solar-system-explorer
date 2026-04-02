import Orbits from "../Orbits.jsx";

import { PlanetData } from "../Popup/PlanetData.js";
function Mercury({onPlanetClick, isPaused}){
  const planetSpeed = isPaused ? 0 : 0.06;
  return (
    <Orbits
      orbitSize={0.18}
      planetSize={1.2}
      image="images/icons/mercury.png"
      speed={planetSpeed}
      orbitColor="rgba(180, 180, 180, 0.28)"
      onPlanetClick={() => onPlanetClick(PlanetData.Mercury)}
      orbitSpeed = {3}
      isPaused = {isPaused}
    />
  );
}

export default Mercury;