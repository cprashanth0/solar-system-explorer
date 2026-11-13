import Sun from "../components/Sun";
import PlanetPopup from "../Popup/PlanetPopup";
import AsteroidBelt from "../components/Asteroids";
import Orbits from "./Orbits.jsx";
import { PLANETS, getPlanetView, getSunSize, getMaxZoom } from "../components/planetConfig.js";
import { PopupData } from "../Popup/PopupData.js";
import useZoomPan from "../hooks/useZoomPan";
import { useState } from "react";

function SolarScene({ resetKey, speedTimes, isRealistic }) {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [popupOrigin, setPopupOrigin] = useState(null);
  const { sceneRef, worldRef } = useZoomPan(resetKey, getMaxZoom(isRealistic));
  const handlePlanetClick = (planet, event) => {
    const rect = event.target.getBoundingClientRect();

    const origin = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
    };
    setPopupOrigin(origin);
    setSelectedPlanet(planet);
  };

  return (
    <>
      <div ref={sceneRef} style={styles.scene}>
        <div ref={worldRef} style={styles.world}>
          <Sun onPlanetClick={handlePlanetClick} size={getSunSize(isRealistic)} />
          <AsteroidBelt
            onPlanetClick={handlePlanetClick}
            resetKey={resetKey}
            speedTimes={speedTimes}
            isRealistic={isRealistic}
          />
          {PLANETS.map((p) => {
            const view = getPlanetView(p, isRealistic);
            return (
              <Orbits
                key={p.name}
                orbitSize={view.orbitSize}
                planetSize={view.planetSize}
                image={p.image}
                speed={view.speed * speedTimes}
                orbitColor={p.orbitColor}
                onPlanetClick={handlePlanetClick}
                popupData={PopupData[p.name]}
                rotateSpeed={p.rotateSpeed}
                isRinged={p.isRinged}
                resetKey={resetKey}
                minPx={view.minPx}
                orbitThickness={view.orbitThickness}
              />
            );
          })}
        </div>
      </div>

      <PlanetPopup
        planet={selectedPlanet}
        onClose={() => setSelectedPlanet(null)}
        origin={popupOrigin}
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
    touchAction: "none",
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
  world: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transformOrigin: "50% 50%",
  },
};

export default SolarScene;