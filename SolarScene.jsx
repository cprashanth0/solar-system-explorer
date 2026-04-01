import Sun from "./components/Sun";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import PlanetPopup from "./Popup/PlanetPopup";
import AsteroidBelt from "./components/Asteroids";
import { useState } from "react";

function SolarScene({isPaused}) {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  //console.log(selectedPlanet);
  return (
    <>
      <div style={styles.scene}>
      <Sun onPlanetClick={setSelectedPlanet}/>
      <Mercury onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Venus onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Earth onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Mars onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <AsteroidBelt onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Jupiter onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Saturn onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Uranus onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      <Neptune onPlanetClick={setSelectedPlanet} isPaused = {isPaused}/>
      
    </div>
    <PlanetPopup
        planet={selectedPlanet}
        onClose={() => setSelectedPlanet(null)}
      />
    </>
  );
}

const styles = {
  scene: {
    position: "relative",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "#000000",
    zIndex: 0,
    backgroundImage: `
      radial-gradient(2px 2px at 40px 60px, rgba(255,255,255,0.95), transparent),
      radial-gradient(1.5px 1.5px at 140px 130px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 280px 90px, rgba(255,255,255,0.75), transparent),
      radial-gradient(1.5px 1.5px at 430px 220px, rgba(255,255,255,0.9), transparent),
      radial-gradient(2px 2px at 610px 150px, rgba(255,255,255,0.8), transparent),
      radial-gradient(1.5px 1.5px at 760px 70px, rgba(255,255,255,0.85), transparent),
      radial-gradient(2px 2px at 920px 210px, rgba(255,255,255,0.8), transparent),
      radial-gradient(1.5px 1.5px at 1080px 110px, rgba(255,255,255,0.9), transparent),
      radial-gradient(1px 1px at 180px 260px, rgba(255,255,255,0.75), transparent),
      radial-gradient(1px 1px at 540px 40px, rgba(255,255,255,0.7), transparent),
      radial-gradient(1px 1px at 840px 280px, rgba(255,255,255,0.75), transparent),
      radial-gradient(1px 1px at 1160px 180px, rgba(255,255,255,0.7), transparent)
    `,
    backgroundRepeat: "repeat",
    backgroundSize:
      "1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px, 1200px 320px",
  },
};


export default SolarScene;