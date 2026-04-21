import { useEffect, useState } from "react";
import PlanetTabs from "./PlanetTabs";
import PopupStyles from "./PopupStyles";

function PlanetPopup({ planet, onClose }) {
  if (!planet) return null;

  return <PlanetPopupContent key={planet.name} planet={planet} onClose={onClose} />;
}

function PlanetPopupContent({ planet, onClose }) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const isSun = planet.name === "Sun";
  const isAsteroidBelt = planet.name === "The Asteroid Belt";
  const noteworthyValue = Array.isArray(planet.moons) ? planet.moons.join(", ") : planet.moons;

  const stats = [
    { label: "Type", value: planet.type },
    { label: "Diameter", value: planet.diameter },
    { label: "Distance from Sun", value: planet.distance },
    { label: "Length of Day", value: planet.dayLength },
    { label: "Length of Year", value: planet.yearLength },
    ...(!isSun
      ? [{label: isAsteroidBelt ? "Objects in Total" : "Number of Moons", value: planet.numMoons,},]: []),
    {
      label: isAsteroidBelt ? "Major Objects" : isSun ? "Principal Objects" : "Noteworthy Moons",
      value: noteworthyValue,
    },
    { label: planet.extraStatLabel, value: planet.extraStat },
  ].filter((item) => item.value !== undefined && item.value !== null && item.value !== "");

  const renderOverview = () => (
    <div style={PopupStyles.heroSection}>
      <div style={PopupStyles.centerPanel}>
        <div style={PopupStyles.planetName}>{planet.name}</div>

        <p style={PopupStyles.description}>
          {planet.description || "No description available yet."}
        </p>

        {planet.fact ? <p style={PopupStyles.factText}>{planet.fact}</p> : null}

        <p style={PopupStyles.detailsText}>
          {planet.details || "No additional details available yet."}
        </p>
      </div>
    </div>
  );

  const renderStatistics = () => (
    <div style={PopupStyles.tabSection}>
      <div style={PopupStyles.sectionHeading}>Statistics</div>

      <div style={PopupStyles.statCardGrid}>
        {stats.map((stat) => (
          <div key={stat.label} style={PopupStyles.statCard}>
            <div style={PopupStyles.statCardLabel}>{stat.label}</div>
            <div style={PopupStyles.statCardValue}>{stat.value}</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderImage = () => (
    <div style={PopupStyles.tabSection}>
      <div style={PopupStyles.sectionHeading}>{planet.name} as seen from Space</div>

      <div style={PopupStyles.imageOnlyPanel}>
        {planet.image ? (
          <div style={PopupStyles.imageWrapper}>
            <img
              src={planet.image}
              alt={planet.alt}
              style={PopupStyles.largePlanetImage}
            />

            {planet.caption && (
              <div style={PopupStyles.imageCaption}>{planet.caption}</div>
            )}
            {planet.credit && (
              <div style={PopupStyles.imageCredit}>Credit: {planet.credit}</div>
            )}
          </div>
        ) : (
          <div style={PopupStyles.emptyText}>No image available</div>
        )}
      </div>
    </div>
  );

  return (
    <div style={PopupStyles.overlay} onClick={onClose}>
      <div style={PopupStyles.popup} onClick={(e) => e.stopPropagation()}>
        <button style={PopupStyles.closeButton} onClick={onClose}>
          ×
        </button>

        <PlanetTabs
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          planetName={planet.name}
        />

        <div style={PopupStyles.content}>
          {activeTab === "overview" && renderOverview()}
          {activeTab === "statistics" && renderStatistics()}
          {activeTab === "image" && renderImage()}
        </div>
      </div>
    </div>
  );
}

export default PlanetPopup;