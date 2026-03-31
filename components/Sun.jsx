import sunImage from "/images/icons/sun.png";
import { PlanetData } from "../Popup/PlanetData";

function Sun({ onPlanetClick }) {
  const sun = {
    position: "absolute",
    width: "110px",
    height: "110px",
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
      0 0 25px rgba(255, 210, 80, 0.9),
      0 0 55px rgba(255, 170, 40, 0.7),
      0 0 110px rgba(255, 120, 0, 0.45)
    `,
    zIndex: 10,
    cursor: "pointer",
  };

  return <div style={sun} onClick={() => onPlanetClick(PlanetData.Sun)}></div>;
}

export default Sun;

