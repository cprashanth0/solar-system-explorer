import { useEffect, useRef, useState } from "react";
import Planet from "./Planet";

function Orbits({
  orbitSize,     // now expected as 0–1 (e.g., 0.9 = 90% of screen)
  planetSize,    // now in vmin units (e.g., 2, 3, 5)
  image,
  speed = 0.02,
  orbitColor = "rgba(255,255,255,0.18)",
  orbitThickness = 2,
  onPlanetClick,
  rotateSpeed=70,
  isPaused,
}) {
  const [angle, setAngle] = useState(0);
  const lastTimeRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

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
  }, [speed]);

  // ✅ Responsive orbit size using vmin
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
          onClick={onPlanetClick}
          rotateSpeed={rotateSpeed}
          isPaused={isPaused}
        />
      </div>
    </>
  );
}

export default Orbits;