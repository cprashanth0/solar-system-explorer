import { useState } from "react";
import { PlanetData } from "../Popup/PlanetData.js";

function AsteroidBelt({ onPlanetClick, isPaused }) {
  const [asteroids] = useState(() => {
    const count = 220;

    return Array.from({ length: count }, (_, i) => {
      const radius = 240 + Math.random() * 35;
      const angle = Math.random() * Math.PI * 2;

      return {
        id: i,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        size: 2 + Math.random() * 4,
        opacity: 0.4 + Math.random() * 0.5,
      };
    });
  });

  return (
    <div style={{...belt, animationPlayState: isPaused ? "paused" : "running",
  }}>
      {asteroids.map((asteroid) => (
        <div
          key={asteroid.id}
          onClick={() => onPlanetClick(PlanetData.AsteroidBelt)}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(${asteroid.x}px, ${asteroid.y}px) translate(-50%, -50%)`,
            width: "16px",
            height: "16px",
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
              width: `${asteroid.size}px`,
              height: `${asteroid.size}px`,
              borderRadius: "50%",
              background: "#8f8f8f",
              opacity: asteroid.opacity,
              boxShadow: "0 0 3px rgba(255,255,255,0.15)",
              zIndex: 2,
            }}
          />
        </div>
      ))}
    </div>
  );
}

const belt = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  animation: "spin 220s linear infinite",
  zIndex: 2,
};

export default AsteroidBelt;