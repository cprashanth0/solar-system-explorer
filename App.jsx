import SolarScene from "./frames/SolarScene";
import { useState } from "react";
function App() {
  const [resetKey, setResetKey] = useState(0);
  const [speedTimes, setSpeedTimes] = useState(1)
  return (
    <div style={styles.app}>
      <div style={styles.sceneWrapper}>
        <div style={styles.controls}>
          <button style={styles.resetButton} onClick={() => setResetKey((prev) => prev + 1)}>
            ⟲ Reset
          </button>
          <div style={styles.speedControl}>
            <label style={styles.speedLabel}>Speed: {speedTimes.toFixed(1)}</label>
            <input type="range" min="0" max="5" step="0.2" value={speedTimes} onChange={(e)=>setSpeedTimes(parseFloat(e.target.value))} style={styles.slider}/>
          </div>
        </div>
        <div style={styles.header}>
          
          <h1 style={styles.title}>Solar System Explorer</h1>
          <p style={styles.subtitle}>
            Click on any celestial body to explore what it is!
          </p>
        </div>

        <SolarScene resetKey = {resetKey} speedTimes = {speedTimes} />
      </div>
    </div>
  );
}
const glassBase = {
  borderRadius: "999px",
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(20,20,28,0.72)",
  color: "white",
  backdropFilter: "blur(8px)",
  WebkitBackdropFilter: "blur(8px)",
  boxShadow: "0 0 20px rgba(255,255,255,0.08)",
  zIndex: 9999,
};

const absoluteTop = {
  position: "absolute",
  top: "3vmin",
};

const textBase = {
  fontFamily: "Outfit, sans-serif",
  fontWeight: 300,
  letterSpacing: "0.04em",
};

const styles = {
  app: {
    margin: 0,
    minHeight: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  sceneWrapper: {
    position: "relative",
    display: "inline-block",
  },

  header: {
    position: "absolute",
    top: "18px",
    left: "50%",
    transform: "translateX(-50%)",
    textAlign: "center",
    zIndex: 1,
    pointerEvents: "none",
    background: "transparent",
    width: "max-content",
    maxWidth: "80%",
  },

  title: {
    ...textBase,
    margin: 0,
    color: "white",
    fontSize: "4.5vmin",
    fontWeight: 600,
    background: "transparent",
    
  },

  subtitle: {
    ...textBase,
    margin: "6px 0 0 0",
    color: "rgba(255,255,255,0.75)",
    fontSize: "1.7vmin",
    background: "transparent",
    
  },

  controls: {
    ...textBase,
    position: "absolute",
    width: "100%",
    
  },

  resetButton: {
    ...glassBase,
    ...absoluteTop,
    ...textBase,
    left: "3vmin",
    padding: "2vmin 3vmin",
    width: "16vmin",
    height: "7.5vmin",
    fontSize: "2.25vmin",
    cursor: "pointer",
  },

  speedControl: {
    ...glassBase,
    ...absoluteTop,
    right: "3vmin",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    padding: "2vmin 3vmin 3vmin",
    width: "20vmin",
    height: "4.5vmin",
  },

  speedLabel: {
    ...textBase,
    fontSize: "2.25vmin",
    color: "#ddd",
    
  },

  slider: {
    
    width: "20vmin",
    marginTop: "1vmin",
    height: "4px",
    cursor: "pointer",
    appearance: "none",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "999px",
    outline: "none",
  },
};

export default App;