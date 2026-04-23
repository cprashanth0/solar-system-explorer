import SolarScene from "./frames/SolarScene";
import styles from "./styles/appStyles"
import { useState } from "react";
import AboutPanel from "./frames/AboutPanel";
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
        <AboutPanel />
      </div>
    </div>
  );
}
export default App;