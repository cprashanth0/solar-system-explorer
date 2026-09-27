import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";
import mercuryImage from "/images/icons/mercury.png";

function Mercury({onPlanetClick, resetKey, speedTimes}){
  const planetSpeed = 0.06 * speedTimes;
  return (
    <Orbits
      orbitSize={0.18}
      planetSize={1.2}
      image={mercuryImage}
      speed={planetSpeed}
      orbitColor="rgba(180, 180, 180, 0.28)"
      onPlanetClick={onPlanetClick}
      planetData={PlanetData.Mercury}
      orbitSpeed = {3}
      resetKey = {resetKey}
    />
  );
}

export default Mercury;