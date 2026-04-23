import { useState } from "react";
import styles from "../styles/appStyles";

function AboutPanel() {
  const [open, setOpen] = useState(false);

  return (
    <div style={styles.aboutContainer}>
      {/* Button */}
      {!open && (
        <button
          style={styles.aboutButton}
          onClick={() => setOpen(true)}
        >
          About this project
        </button>
      )}

      {/* Expanding Panel */}
      <div
        style={{
          ...styles.aboutPanel,
          transform: open ? "scale(1)" : "scale(0.85)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
        }}
      >
        <div style={styles.aboutContent}>
          <h2 style={styles.aboutTitle}>About This Project</h2>

          <p style={styles.aboutText}>
            This interactive solar system explorer visualizes planetary orbits,
            distances, and motion using a React-based simulation. Click on
            planets to explore astronomy concepts including orbital speed,
            space physics, and celestial structure.
          </p>

          <button
            style={styles.aboutClose}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPanel;