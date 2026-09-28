import sunImage from "../assets/icons/sun.webp";
import { PlanetData } from "../Popup/PlanetData";

function Sun({ onPlanetClick }) {
  const size = "9"
  const sun = {
    position: "absolute",
    width: `${size}vmin`,
    height: `${size}vmin`,
    borderRadius: "50%",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffb11a",
    backgroundImage: `url(${sunImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    boxShadow: `
      0 0 ${size * 0.4}vmin rgba(255, 210, 80, 0.9),
      0 0 ${size * 1}vmin rgba(255, 170, 40, 0.7),
      0 0 ${size * 1}vmin rgba(255, 120, 0, 0.45)
    `,
    zIndex: 10,
    cursor: "pointer",
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onPlanetClick(PlanetData.Sun, e);
    }
  };
    return (
    <div
      style={sun}
      onClick={(e) => onPlanetClick(PlanetData.Sun, e)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label="View information about the Sun"
    ></div>
  );
}

export default Sun;

