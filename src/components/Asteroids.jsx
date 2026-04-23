import { useState } from "react";
import { PlanetData } from "../Popup/PlanetData.js";

function AsteroidBelt({ onPlanetClick, speedTimes }) {
  const [asteroids] = useState(() => {
    const count = 220;

    return Array.from({ length: count }, (_, i) => {
      const radius = 0.24 + Math.random() * 0.01;
      const angle = Math.random() * Math.PI * 2;

      return {
        id: i,
        radius,
        angle,
        size: 0.3 + Math.random() * 0.6,
        opacity: 0.4 + Math.random() * 0.5,
      };
    });
  });

  const baseDuration = 200;
  const duration =
    speedTimes === 0 ? "999999s" : `${baseDuration / speedTimes}s`;

  return (
    <div
      style={{
        ...belt,
        animation: `spin ${duration} linear infinite`,
      }}
    >
      {asteroids.map((asteroid) => {
        const x = Math.cos(asteroid.angle) * asteroid.radius * 100;
        const y = Math.sin(asteroid.angle) * asteroid.radius * 100;

        return (
          <div
            key={asteroid.id}
            onClick={() => onPlanetClick(PlanetData.AsteroidBelt)}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${x}vmin, ${y}vmin) translate(-50%, -50%)`,
              width: "4vmin",
              height: "4vmin",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              zIndex: 3,
              pointerEvents: "auto",
            }}
          >
            <div
              style={{
                width: `${asteroid.size}vmin`,
                height: `${asteroid.size}vmin`,
                borderRadius: "50%",
                background: "#8f8f8f",
                opacity: asteroid.opacity,
                boxShadow: "0 0 3px rgba(255,255,255,0.15)",
                zIndex: 2,
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

const belt = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  animation: "spin 200s linear infinite",
  zIndex: 2,
};

export default AsteroidBelt;