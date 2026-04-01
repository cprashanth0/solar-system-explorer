import SolarScene from "./SolarScene";
import { useState } from "react";
function App() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div style={styles.app}>
      <div style={styles.sceneWrapper}>
        <button style={styles.pauseButton} onClick={() => setIsPaused((prev) => !prev)}>
            {isPaused ? "▶︎ Play" : "⏸ Pause"}
          </button>
        <div style={styles.header}>
          
          <h1 style={styles.title}>Solar System Explorer</h1>
          <p style={styles.subtitle}>
            Click on any celestial body to explore what it is!
          </p>
        </div>

        <SolarScene isPaused = {isPaused}/>
      </div>
    </div>
  );
}

const styles = {
  app: {
    margin: 0,
    minHeight: "100vh",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    zIndex: 10,
    pointerEvents: "none",
    background: "transparent",
    width: "max-content",
    maxWidth: "80%",
  },

  title: {
    margin: 0,
    color: "white",
    fontSize: "28px",
    fontWeight: 600,
    background: "transparent",
  },

  subtitle: {
    margin: "6px 0 0 0",
    color: "rgba(255,255,255,0.75)",
    fontSize: "14px",
    fontWeight: 300,
    background: "transparent",
  },

  pauseButton: {
    position: "absolute",
    top: "24px",
    left: "24px",
    zIndex: 9999,
    padding: "10px 18px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(20,20,28,0.72)",
    color: "white",
    fontSize: "0.95rem",
    fontWeight: 300,
    letterSpacing: "0.04em",
    cursor: "pointer",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    boxShadow: "0 0 20px rgba(255,255,255,0.08)",
    fontFamily: "Outfit, sans-serif",
    width: "min(110px)",
  },

};

export default App;