import { useEffect, useRef } from "react";
import Planet from "./Planet";

function Orbits({
  orbitSize, //percentage of screen
  planetSize, //vmin units
  image,
  speed = 0.02,
  orbitColor = "rgba(255,255,255,0.18)",
  orbitThickness = 2,
  onPlanetClick,
  planetData,
  rotateSpeed=70,
  resetKey,
  isRinged = false,
}) {
  const angleRef = useRef(0);
  const lastTimeRef = useRef(null);
  const rotatingLayerRef = useRef(null);

  useEffect(() => {
    let animationFrameId;
    lastTimeRef.current = null;
    angleRef.current = 0;

    const animate = (time) => {
      if (lastTimeRef.current !== null) {
        const deltaTime = time - lastTimeRef.current;
        angleRef.current += speed * deltaTime;

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
  }, [speed, resetKey]);
  
  const size = `${orbitSize * 100}vmin`;

  const orbitRing = {
    position: "absolute",
    width: size,
    height: size,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    border: `${orbitThickness}px dashed ${orbitColor}`,
    transform: "translate(-50%, -50%)",
    zIndex: 1,
    pointerEvents: "none",
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
      <div style={orbitRing}></div>

      <div style={rotatingLayer} ref={rotatingLayerRef}>
        <Planet
          size={planetSize}
          image={image}
          onClick={(e) => onPlanetClick(planetData, e)}
          rotateSpeed={rotateSpeed}
          label={planetData.name}
          isRinged={isRinged}
        />
      </div>
    </>
  );
}

export default Orbits;