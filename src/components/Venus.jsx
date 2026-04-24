import Orbits from "../frames/Orbits.jsx";
import { PlanetData } from "../Popup/PlanetData.js";

function Venus({ onPlanetClick, resetKey, speedTimes }){
  const planetSpeed = 0.035 * speedTimes;
  return (
    <Orbits
      orbitSize={0.26}
      planetSize={1.8}
      image="images/icons/venus.png"
      speed={planetSpeed}
      orbitColor="rgba(230, 190, 120, 0.28)"
      onPlanetClick={onPlanetClick}
      planetData={PlanetData.Venus}
      rotateSpeed = {6}
      resetKey = {resetKey}
    />
  );
}

export default Venus;
