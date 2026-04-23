const ACCENT = "#597bff";

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
    top: "3.5vmin",
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
  },

  subtitle: {
    ...textBase,
    margin: "6px 0 0 0",
    color: "rgba(255,255,255,0.75)",
    fontSize: "1.7vmin",
  },

  controls: {
    ...textBase,
    position: "absolute",
    width: "100%",
  },

  // ======================
  // RESET BUTTON (TOP LEFT)
  // ======================
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

  // ======================
  // SPEED CONTROL (TOP RIGHT)
  // ======================
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

  // ======================
  // ABOUT PANEL (BOTTOM LEFT)
  // ======================
  aboutContainer: {
    position: "absolute",
    bottom: "3vmin",
    left: "3vmin",
    zIndex: 9999,
  },

  aboutButton: {
    ...glassBase,
    ...textBase,
    padding: "1.5vmin 2.5vmin",
    fontSize: "2vmin",
    cursor: "pointer",
  },

  aboutPanel: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "36vmin",
    padding: "2vmin",
    borderRadius: "16px",
    background: "rgba(20,20,28,0.85)",
    border: "1px solid rgba(255,255,255,0.2)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
    transition: "all 0.25s ease",
    transformOrigin: "bottom left",
  },

  aboutTitle: {
    ...textBase,
    margin: 0,
    fontSize: "3vmin",
    color: "white",
  },

  aboutText: {
    ...textBase,
    fontSize: "2vmin",
    color: "rgba(255,255,255,0.75)",
  },

  aboutClose: {
    ...glassBase,
    ...textBase,
    marginTop: "1vmin",
    padding: "1vmin",
    fontSize: "1.8vmin",
    cursor: "pointer",
    background: ACCENT,
    borderRadius: "8px",
    border: "1px solid rgba(89,123,255,0.4)",
  },
};

export default styles;