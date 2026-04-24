const PopupStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2000,
    padding: "2vmin",
  },

  popup: {
    minWidth: "55vmin",
    minHeight: "55vmin",
    background:
      "linear-gradient(180deg, rgba(10,14,30,0.98) 0%, rgba(17,22,44,0.98) 100%)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "2.5vmin",
    boxShadow:
      "0 18px 60px rgba(0,0,0,0.45), 0 0 30px rgba(90,130,255,0.12)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    zIndex: 1000,
  },

  closeButton: {
    position: "absolute",
    top: "1.2vmin",
    right: "1.5vmin",
    width: "4.2vmin",
    height: "4.2vmin",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    fontSize: "2.2vmin",
    cursor: "pointer",
    zIndex: 20,
  },

  tabsWrap: {
    display: "flex",
    width: "100%",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.03)",
  },

  tabButton: {
    flex: 1,
    padding: "1.8vmin 1.6vmin",
    background: "transparent",
    color: "rgba(255,255,255,0.78)",
    border: "none",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    fontSize: "2.1vmin",
    fontWeight: 600,
    letterSpacing: "0.1vmin",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "Outfit, sans-serif",
  },

  activeTab: {
    background:
      "linear-gradient(180deg, rgba(89,123,255,0.22) 0%, rgba(89,123,255,0.08) 100%)",
    color: "#ffffff",
    boxShadow: "inset 0 -0.3vmin 0 #7da2ff",
  },

  lastTab: {
    borderRight: "none",
  },

  content: {
    padding: "1.5vmin",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "40vmin",
  },

  centerPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: "80vmin",
    minHeight: "35vmin",
    margin: "0 auto",
  },

  // =========================
  // TYPOGRAPHY SYSTEM
  // =========================

  planetName: {
    fontSize: "4.2vmin",
    fontWeight: 800,
    margin: "1.5vmin",
    letterSpacing: "0.1vmin",
    textAlign: "center",
  },

  sectionHeading: {
    fontSize: "3vmin",
    fontWeight: 700,
    marginBottom: "2vmin",
    textAlign: "center",
  },

  description: {
    fontSize: "2.1vmin",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.84)",
    maxWidth: "70vmin",
    margin: "1vmin",
    marginBottom: "2vmin",
  },

  factText: {
    fontSize: "2.1vmin",
    lineHeight: 1.7,
    color: "#d7e4ff",
    maxWidth: "70vmin",
    margin: "1vmin",
    marginBottom: "2vmin",
    fontStyle: "italic",
    border: "1px dashed rgba(255,255,255,0.4)",
    borderRadius: "0.8vmin",
    padding: "1.2vmin",
  },

  detailsText: {
    fontSize: "1.7vmin",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.86)",
    maxWidth: "72vmin",
    margin: "1vmin",
  },

  tabSection: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "2vmin",
    padding: "2.2vmin",
    minHeight: "40vmin",
  },

  // =========================
  // STAT CARDS (UNIFIED SCALE)
  // =========================

  statCardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(22vmin, 1fr))",
    gap: "1.5vmin",
  },

  statCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "1.8vmin",
    padding: "1.8vmin",
    minHeight: "8vmin",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  statCardLabel: {
    fontSize: "1.7vmin",
    color: "rgba(255,255,255,0.68)",
    marginBottom: "1vmin",
  },

  statCardValue: {
    fontSize: "2.1vmin",
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1.35,
  },

  // =========================
  // IMAGE SYSTEM
  // =========================

  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5vmin",
  },

  imageCaption: {
    marginTop: "1.2vmin",
    fontSize: "1.8vmin",
    fontWeight: 600,
    color: "#ffffff",
    textAlign: "center",
    maxWidth: "60vmin",
    lineHeight: 1.6,
  },

  imageCredit: {
    fontSize: "1.4vmin",
    color: "rgba(255,255,255,0.55)",
    textAlign: "center",
    maxWidth: "60vmin",
    letterSpacing: "0.05vmin",
  },

  imageOnlyPanel: {
    minHeight: "35vmin",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1vmin",
  },

  largePlanetImage: {
    maxWidth: "100%",
    maxHeight: "35vmin",
    objectFit: "cover",
    display: "block",
    filter: "drop-shadow(0 0 2.5vmin rgba(255,255,255,0.18))",
    borderRadius: "1vmin",
    border: "1px solid rgba(75, 65, 65, 0.44)",
  },

  emptyText: {
    fontSize: "1.7vmin",
    color: "rgba(255,255,255,0.7)",
  },
};

export default PopupStyles;