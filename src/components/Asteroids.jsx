import { useState } from "react";
import { PopupData } from "../Popup/PopupData.js";
import { getBeltView } from "./planetConfig.js";

function AsteroidBelt({ onPlanetClick, speedTimes, isRealistic }) {
  const [asteroids] = useState(() => {
    const count = 220;

    return Array.from({ length: count }, (_, i) => {
      const spread = Math.random();
      const angle = Math.random() * Math.PI * 2;

      return {
        id: i,
        spread,
        angle,
        size: 0.2 + Math.random() * 0.3,
        opacity: 0.4 + Math.random() * 0.5,
      };
    });
  });

  const view = getBeltView(isRealistic);
  const duration =
    speedTimes === 0 ? "999999s" : `${view.duration / speedTimes}s`;
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPlanetClick(PopupData.AsteroidBelt, e);
    }
  };
  return (
    <div
      style={{
        ...belt,
        animation: `spin ${duration} linear infinite`,
      }}
      role="button"
      tabIndex={0}
      aria-label="View information about the Asteroid Belt"
      onKeyDown={handleKeyDown}
    >
      {asteroids.map((asteroid) => {
        const radius = view.radius + asteroid.spread * view.width;
        const x = Math.cos(asteroid.angle) * radius * 100;
        const y = Math.sin(asteroid.angle) * radius * 100;

        return (
          <div
            key={asteroid.id}
            onClick={(e) => onPlanetClick(PopupData.AsteroidBelt, e)}
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: `translate(${x}vmin, ${y}vmin) translate(-50%, -50%)`,
              width: `${4 * view.dotScale}vmin`,
              height: `${4 * view.dotScale}vmin`,
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
                width: `max(${asteroid.size * view.dotScale}vmin, calc(var(--px, 0.1) * ${view.dotMinPx} * 1vmin))`,
                height: `max(${asteroid.size * view.dotScale}vmin, calc(var(--px, 0.1) * ${view.dotMinPx} * 1vmin))`,
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