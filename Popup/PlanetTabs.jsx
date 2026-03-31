import PopupStyles from "./PopupStyles";

function PlanetTabs({ activeTab, setActiveTab, planetName }) {
  const tabs = [
    { key: "statistics", label: "Statistics" },
    { key: "overview", label: planetName || "Planet" },
    { key: "image", label: "Image" },
  ];

  return (
    <div style={PopupStyles.tabsWrap}>
      {tabs.map((tab, index) => (
        <button
          key={tab.key}
          onClick={() => setActiveTab(tab.key)}
          style={{
            ...PopupStyles.tabButton,
            ...(activeTab === tab.key ? PopupStyles.activeTab : {}),
            ...(index === tabs.length - 1 ? PopupStyles.lastTab : {}),
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default PlanetTabs;