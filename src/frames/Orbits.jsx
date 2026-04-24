import { useEffect, useRef, useState } from "react";
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
}) {
  const [angle, setAngle] = useState(0);
  const lastTimeRef = useRef(null);
  useEffect(() => {
    let animationFrameId;
    lastTimeRef.current = null;
    
    const animate = (time) => {
      if (lastTimeRef.current !== null) {
        const deltaTime = time - lastTimeRef.current;

        setAngle((prev) => prev + speed * deltaTime);
      }

      lastTimeRef.current = time;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed, resetKey]);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAngle(0);
    lastTimeRef.current = null;
  }, [resetKey]);
  
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
    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
    zIndex: 4,
    pointerEvents: "none",
  };

  return (
    <>
      <div style={orbitRing}></div>

      <div style={rotatingLayer}>
        <Planet
          size={planetSize}
          image={image}
          onClick={(e) => onPlanetClick(planetData, e)}
          rotateSpeed={rotateSpeed}
        />
      </div>
    </>
  );
}

export default Orbits;