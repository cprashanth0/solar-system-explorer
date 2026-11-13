// Single source of truth for each planet's orbit and appearance settings.
// Array order = inner -> outer. "name" must match the key in Popup/PopupData.js.
import mercuryImage from "../assets/icons/mercury.webp";
import venusImage from "../assets/icons/venus.webp";
import earthImage from "../assets/icons/earth.webp";
import marsImage from "../assets/icons/mars.webp";
import jupiterImage from "../assets/icons/jupiter.webp";
import saturnImage from "../assets/icons/saturn.webp";
import uranusImage from "../assets/icons/uranus.webp";
import neptuneImage from "../assets/icons/neptune.webp";

// Display values (normal mode):
//   orbitSize   orbit DIAMETER as a fraction of vmin (0.18 = 18vmin across)
//   planetSize  planet diameter in vmin
//   speed       orbit speed in degrees per millisecond at 1x
//   rotateSpeed seconds per spin on its own axis
// Real values (realism mode):
//   au          average distance from the Sun (Earth = 1)
//   period      orbital period in Earth years
//   diameter    planet diameter (Earth = 1)
//   ringScale   (Saturn only) image size relative to the planet body, because the image includes the rings
export const PLANETS = [
  {
    name: "Mercury",
    image: mercuryImage,
    orbitColor: "rgba(180, 180, 180, 0.28)",
    orbitSize: 0.18,
    planetSize: 1.2,
    speed: 0.06,
    rotateSpeed: 70, // was never applied (typo'd prop); 70 is the Orbits.jsx default
    au: 0.387,
    period: 0.241,
    diameter: 0.383,
  },
  {
    name: "Venus",
    image: venusImage,
    orbitColor: "rgba(230, 190, 120, 0.28)",
    orbitSize: 0.26,
    planetSize: 1.8,
    speed: 0.035,
    rotateSpeed: 6,
    au: 0.723,
    period: 0.615,
    diameter: 0.95,
  },
  {
    name: "Earth",
    image: earthImage,
    orbitColor: "rgba(100, 170, 255, 0.30)",
    orbitSize: 0.34,
    planetSize: 2,
    speed: 0.03,
    rotateSpeed: 10,
    au: 1,
    period: 1,
    diameter: 1,
  },
  {
    name: "Mars",
    image: marsImage,
    orbitColor: "rgba(255, 120, 90, 0.28)",
    orbitSize: 0.42,
    planetSize: 1.6,
    speed: 0.024,
    rotateSpeed: 18,
    au: 1.524,
    period: 1.881,
    diameter: 0.532,
  },
  {
    name: "Jupiter",
    image: jupiterImage,
    orbitColor: "rgba(220, 170, 120, 0.26)",
    orbitSize: 0.58,
    planetSize: 4.5,
    speed: 0.013,
    rotateSpeed: 60,
    au: 5.203,
    period: 11.86,
    diameter: 10.97,
  },
  {
    name: "Saturn",
    image: saturnImage,
    orbitColor: "rgba(230, 210, 140, 0.26)",
    orbitSize: 0.7,
    planetSize: 7.4, // your original note: "4 actual"
    speed: 0.01,
    rotateSpeed: 90,
    isRinged: true,
    au: 9.537,
    period: 29.45,
    diameter: 9.14,
    ringScale: 1.85,
  },
  {
    name: "Uranus",
    image: uranusImage,
    orbitColor: "rgba(150, 235, 255, 0.26)",
    orbitSize: 0.82,
    planetSize: 3,
    speed: 0.007,
    rotateSpeed: 120,
    au: 19.19,
    period: 84.0,
    diameter: 3.98,
  },
  {
    name: "Neptune",
    image: neptuneImage,
    orbitColor: "rgba(110, 140, 255, 0.26)",
    orbitSize: 0.92,
    planetSize: 3,
    speed: 0.005,
    rotateSpeed: 150,
    au: 30.07,
    period: 164.8,
    diameter: 3.86,
  },
];

// Fails loudly if a planet entry is missing a number that realism mode needs.
PLANETS.forEach((p) => {
  if (![p.diameter, p.au, p.period].every(Number.isFinite)) {
    console.error(`planetConfig: ${p.name} is missing diameter, au or period`);
  }
});

// ---------- Realism mode ----------
// Tuning knobs. All distances come from one scale, so changing
// REAL_ORBIT_PER_AU rescales the whole system consistently.
export const REAL_ORBIT_PER_AU = 0.03; // orbit diameter (fraction of vmin) per AU
export const REAL_EARTH_SPEED = 0.03;  // Earth's speed (deg/ms); same as normal mode
export const REAL_SUN_SIZE = 0.9;      // Sun diameter (vmin); exaggerated, true scale is sub-pixel
export const REAL_MIN_PLANET_PX = 5;   // no planet is drawn smaller than this on screen (px)
export const REAL_ORBIT_THICKNESS = 1; // orbit line thickness (px) in realism mode
export const NORMAL_MAX_ZOOM = 5;
export const REAL_MAX_ZOOM = 40;
// Belt edges (AU). Narrower than the real 2.2-3.2 so it reads as a thin ring.
const REAL_BELT_INNER_AU = 2.45;
const REAL_BELT_OUTER_AU = 2.95;

const SUN_SIZE = 9;                // normal-mode Sun diameter (vmin)
const SUN_DIAMETER_EARTHS = 109.2; // Sun diameter in Earth diameters (1,391,400 / 12,742 km)

export function getMaxZoom(isRealistic) {
  return isRealistic ? REAL_MAX_ZOOM : NORMAL_MAX_ZOOM;
}

export function getSunSize(isRealistic) {
  return isRealistic ? REAL_SUN_SIZE : SUN_SIZE;
}

// minPx = smallest on-screen size in px (0 = no minimum). orbitThickness is in px.
export function getPlanetView(planet, isRealistic) {
  if (!isRealistic) {
    return {
      orbitSize: planet.orbitSize,
      planetSize: planet.planetSize,
      speed: planet.speed,
      minPx: 0,
      orbitThickness: 2,
    };
  }
  const ring = planet.ringScale ?? 1;
  return {
    orbitSize: planet.au * REAL_ORBIT_PER_AU,
    planetSize: (REAL_SUN_SIZE * planet.diameter * ring) / SUN_DIAMETER_EARTHS,
    speed: REAL_EARTH_SPEED / planet.period,
    minPx: REAL_MIN_PLANET_PX * ring,
    orbitThickness: REAL_ORBIT_THICKNESS,
  };
}

// Belt: "radius" and "width" are radius fractions of vmin (this matches Asteroids.jsx);
// "duration" is seconds per full rotation at 1x; dotMinPx = smallest dot size in px.
export function getBeltView(isRealistic) {
  if (!isRealistic) {
    return { radius: 0.24, width: 0.01, duration: 200, dotScale: 1, dotMinPx: 0 };
  }
  const midAu = (REAL_BELT_INNER_AU + REAL_BELT_OUTER_AU) / 2;
  return {
    radius: (REAL_BELT_INNER_AU * REAL_ORBIT_PER_AU) / 2, // /2: orbitSize is a diameter, belt radius is a radius
    width: ((REAL_BELT_OUTER_AU - REAL_BELT_INNER_AU) * REAL_ORBIT_PER_AU) / 2,
    duration: (360 / (REAL_EARTH_SPEED * 1000)) * Math.pow(midAu, 1.5), // Kepler: period^2 = distance^3
    dotScale: 0.3,
    dotMinPx: 2,
  };
}

// Seconds of real time that one Earth year takes at the current speed multiplier,
// or null when paused. It reads Earth's actual on-screen speed, so it stays correct
// if you retune the speeds above. (Used by the speed box text, next step.)
export function getEarthYearSeconds(isRealistic, speedTimes) {
  const earth = PLANETS.find((p) => p.name === "Earth");
  const degreesPerMs = getPlanetView(earth, isRealistic).speed * speedTimes;
  if (degreesPerMs <= 0) return null;
  return 360 / (degreesPerMs * 1000);
}