import SolarScene from "./frames/SolarScene";
import styles from "./styles/appStyles"
import { useState } from "react";
import AboutPanel from "./frames/AboutPanel";
import ErrorBoundary from "./frames/ErrorBoundary";
import { getEarthYearSeconds } from "./components/planetConfig.js";

// Text for the speed box, e.g. "1 Earth year = 12 sec".
function describeEarthYear(isRealistic, speedTimes) {
  if (Math.abs(speedTimes) < 0.01) return "Paused";
  const seconds = getEarthYearSeconds(isRealistic, Math.abs(speedTimes));
  const rounded = seconds >= 10 ? Math.round(seconds) : seconds.toFixed(1);
  return `1 Earth year = ${rounded} sec${speedTimes < 0 ? " (reverse)" : ""}`;
}

function App() {
  const [resetKey, setResetKey] = useState(0);
  const [speedTimes, setSpeedTimes] = useState(1)
  const [isRealistic, setIsRealistic] = useState(false);
  return (
    <div style={styles.app}>
      <div style={styles.sceneWrapper}>
        <div style={styles.controls}>
          <button style={styles.resetButton} onClick={() => {setResetKey((prev) => prev + 1); setSpeedTimes(1)}}>
            ⟲ Reset
          </button>
          <div style={styles.speedControl}>
            <label style={styles.speedLabel}>Speed: {speedTimes.toFixed(1)}x</label>
            <input type="range" min="-8" max="8" step="0.2" value={speedTimes} onChange={(e)=>setSpeedTimes(parseFloat(e.target.value))} style={styles.slider}/>
            {/* slider MIN & MAX here */}
            <div style={styles.speedNote}>{describeEarthYear(isRealistic, speedTimes)}</div>
            <label style={styles.realismRow}>
              <input
                type="checkbox"
                checked={isRealistic}
                onChange={(e) => setIsRealistic(e.target.checked)}
                style={styles.realismCheckbox}
              />
              Realistic scale
            </label>
          </div>
        </div>
        <div style={styles.header}>
          <h1 style={styles.title}>Solar System Explorer</h1>
          <p style={styles.subtitle}>
            Click on any celestial body to explore fun facts about it!
          </p>
        </div>

        <ErrorBoundary>
          <SolarScene resetKey={resetKey} speedTimes={speedTimes} isRealistic={isRealistic} />
        </ErrorBoundary>
        
        <AboutPanel />
      </div>
    </div>
  );
}
export default App;