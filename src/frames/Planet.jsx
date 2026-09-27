function Planet({ size, image, onClick, rotateSpeed, isPaused, label, isRinged = false }) {
  
  const hitboxSize = isRinged ? (size * 1.5): (size * 3);

  const wrapper = {
    position: "absolute",
    top: "50%",
    left: "100%",
    transform: "translate(-50%, -50%)",
    width: `${hitboxSize}vmin`,
    height: `${hitboxSize}vmin`,
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  const bS = isRinged ? "none" : "0 0 6px rgba(255, 255, 255, 0.25)";
  const bord = isRinged ? "none" : "1px solid rgba(255,255,255,0.18)";
  const planet = {
    width: `${size}vmin`,
    height: `${size}vmin`,
    borderRadius: "50%",
    boxShadow: bS,
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    border: bord,
    animation: `spin ${rotateSpeed}s linear infinite`,
    animationPlayState: isPaused ? "paused" : "running",
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick(e);
    }
  };
  return (
    <div
      style={wrapper}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View information about ${label}`}
    >
      <div style={planet}></div>
    </div>
  );
}


export default Planet;