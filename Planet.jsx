function Planet({ size, image, onClick }) {
  const hitboxSize = size * 3;

  const wrapper = {
    position: "absolute",
    top: "50%",
    left: "100%",
    transform: "translate(-50%, -50%)",
    width: `${hitboxSize}px`,
    height: `${hitboxSize}px`,
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const bS = image.includes("saturn") ? "none" : "0 0 6px rgba(255, 255, 255, 0.25)";
  const bord = image.includes("saturn") ? "none" : "1px solid rgba(255,255,255,0.18)";
  const planet = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    boxShadow: bS,
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: bord,
  };

  return (
    <div style={wrapper} onClick={onClick}>
      <div style={planet}></div>
    </div>
  );
}

export default Planet;