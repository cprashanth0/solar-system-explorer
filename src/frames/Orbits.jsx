import { useEffect, useRef } from "react";
import Planet from "./Planet";

const DASH_PX = 6; // orbit line dash length (screen px)
const GAP_PX = 5;  // orbit line gap length (screen px)

function Orbits({
  orbitSize, //percentage of screen
  planetSize, //vmin units
  minPx = 0, //smallest on-screen planet size in px (0 = no minimum)
  image,
  speed = 0.02,
  orbitColor = "rgba(255,255,255,0.18)",
  orbitThickness = 2, //px, constant on screen at any zoom
  onPlanetClick,
  popupData,
  rotateSpeed=70,
  resetKey,
  isRinged = false,
}) {
  const angleRef = useRef(0);
  const lastTimeRef = useRef(null);
  const rotatingLayerRef = useRef(null);
  const speedRef = useRef(speed);
  useEffect(() => {
    speedRef.current = speed;
  }, [speed]);
  useEffect(() => {
    let animationFrameId;
    lastTimeRef.current = null;
    angleRef.current = 0;

    const animate = (time) => {
      if (lastTimeRef.current !== null) {
        const deltaTime = Math.min(time - lastTimeRef.current, 50);
        angleRef.current += speedRef.current * deltaTime;

        if (rotatingLayerRef.current) {
          rotatingLayerRef.current.style.transform =
            `translate(-50%, -50%) rotate(${angleRef.current}deg)`;
        }
      }

      lastTimeRef.current = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [resetKey]);

  const diameter = orbitSize * 100; // orbit diameter in vmin
  const size = `${diameter}vmin`;

  // The ring is an SVG whose drawing units are vmin (viewBox = diameter x diameter),
  // so "--px" (one screen pixel in vmin) converts directly to stroke widths.
  const orbitRing = {
    position: "absolute",
    width: size,
    height: size,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "visible",
    zIndex: 1,
    pointerEvents: "none",
  };

  const ringStroke = {
    strokeWidth: `calc(${orbitThickness} * var(--px, 0.1))`,
    strokeDasharray: `calc(${DASH_PX} * var(--px, 0.1)) calc(${GAP_PX} * var(--px, 0.1))`,
  };

  const rotatingLayer = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
    pointerEvents: "none",
  };

  return (
    <>
      <svg style={orbitRing} viewBox={`0 0 ${diameter} ${diameter}`} aria-hidden="true">
        <circle
          cx={diameter / 2}
          cy={diameter / 2}
          r={diameter / 2}
          fill="none"
          stroke={orbitColor}
          style={ringStroke}
        />
      </svg>

      <div style={rotatingLayer} ref={rotatingLayerRef}>
        <Planet
          size={planetSize}
          minPx={minPx}
          image={image}
          onClick={(e) => onPlanetClick(popupData, e)}
          rotateSpeed={rotateSpeed}
          label={popupData.name}
          isRinged={isRinged}
        />
      </div>
    </>
  );
}

export default Orbits;