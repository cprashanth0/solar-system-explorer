const PopupStyles = {
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0, 0, 0, 0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
  },

  popup: {
    width: "min(600px, 92vw)",
    minHeight: "600px",
    background:
      "linear-gradient(180deg, rgba(10,14,30,0.98) 0%, rgba(17,22,44,0.98) 100%)",
    color: "#ffffff",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "22px",
    boxShadow:
      "0 18px 60px rgba(0,0,0,0.45), 0 0 30px rgba(90,130,255,0.12)",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    backdropFilter: "blur(10px)",
    zIndex: 2000,
  },

  closeButton: {
    position: "absolute",
    top: "7px",
    right: "16px",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(255,255,255,0.06)",
    color: "#fff",
    fontSize: "20px",
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
    padding: "16px 14px",
    background: "transparent",
    color: "rgba(255,255,255,0.78)",
    border: "none",
    borderRight: "1px solid rgba(255,255,255,0.08)",
    fontSize: "20px",
    fontWeight: 600,
    letterSpacing: "0.2px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "Outfit, sans-serif",
  },

  activeTab: {
    background:
      "linear-gradient(180deg, rgba(89,123,255,0.22) 0%, rgba(89,123,255,0.08) 100%)",
    color: "#ffffff",
    boxShadow: "inset 0 -2px 0 #7da2ff",
  },

  lastTab: {
    borderRight: "none",
  },

  content: {
    padding: "10px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },

  heroSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "380px",
    marginTop: "0px",
  },

  centerPanel: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    maxWidth: "680px",
    minHeight: "320px",
    margin: "0 auto",
  },

  planetName: {
    fontSize: "45px",
    fontWeight: 800,
    margin: "14px",
    letterSpacing: "0.5px",
    textAlign: "center",
  },

  description: {
    fontSize: "20px",
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.84)",
    maxWidth: "620px",
    margin: 8,
    marginBottom: "18px",
  },

  factText: {
    fontSize: "20px",
    lineHeight: 1.7,
    color: "#d7e4ff",
    maxWidth: "620px",
    margin: 8,
    marginBottom: "18px",
    fontStyle: "italic",
    border: "1px dashed",
    borderRadius: "5px",
    padding: "6px",
  },

  detailsText: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.86)",
    maxWidth: "650px",
    margin: 8,
  },

  tabSection: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "22px",
    minHeight: "360px",
  },

  sectionHeading: {
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "18px",
    textAlign: "center",
  },

  statCardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "16px",
  },

  statCard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "18px",
    minHeight: "55px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  statCardLabel: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.68)",
    marginBottom: "12px",
  },

  statCardValue: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#ffffff",
    lineHeight: 1.35,
  },

  imageWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "14px",
    
    
  },

  imageCaption: {
    marginTop: "10px",
    fontSize: "16px",
    fontWeight: 600,
    color: "#ffffff",
    textAlign: "center",
    maxWidth: "520px",
    lineHeight: 1.6,
  },

  imageOnlyPanel: {
    minHeight: "360px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px",
    
  },

  imageCredit: {
    fontSize: "12px",
    color: "rgba(255,255,255,0.55)",
    textAlign: "center",
    maxWidth: "520px",
    letterSpacing: "0.3px",
  },

  largePlanetImage: {
    maxWidth: "100%",
    maxHeight: "320px",
    width: "auto",
    height: "auto",
    objectFit: "cover",
    display: "block",
    filter: "drop-shadow(0 0 28px rgba(255,255,255,0.18))",
    borderRadius: "10px",
    border: "1px solid rgba(75, 65, 65, 0.44)",
  },

  emptyText: {
    fontSize: "15px",
    color: "rgba(255,255,255,0.7)",
  },
};

export default PopupStyles;