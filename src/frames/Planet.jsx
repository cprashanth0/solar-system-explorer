function Planet({ size, minPx = 0, image, onClick, rotateSpeed, isPaused, label, isRinged = false }) {

  const hitboxFactor = isRinged ? 1.5 : 3;
  const hitboxSize = size * hitboxFactor;
  // A length of "px" screen pixels at any zoom. --px is set by useZoomPan;
  // the 0.1 fallback only applies before the first camera update.
  const screenPx = (px) => `calc(var(--px, 0.1) * ${px} * 1vmin)`;

  const wrapper = {
    position: "absolute",
    top: "50%",
    left: "100%",
    transform: "translate(-50%, -50%)",
    width: `max(${hitboxSize}vmin, ${screenPx(minPx * hitboxFactor)})`,
    height: `max(${hitboxSize}vmin, ${screenPx(minPx * hitboxFactor)})`,
    cursor: "pointer",
    pointerEvents: "auto",
    zIndex: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  // The faint outline and glow are box-shadows, not a CSS border: a border can never
  // be thinner than 1px before zoom is applied, so it grew into a thick ring when zoomed in.
  const shadow = isRinged
    ? "none"
    : `0 0 0 ${screenPx(1)} rgba(255,255,255,0.18), 0 0 ${screenPx(6)} rgba(255,255,255,0.25)`;
  const planet = {
    width: `max(${size}vmin, ${screenPx(minPx)})`,
    height: `max(${size}vmin, ${screenPx(minPx)})`,
    borderRadius: "50%",
    boxShadow: shadow,
    backgroundImage: `url(${image})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    transform: "rotate(var(--spin-angle))",
    animation: `spin-angle ${rotateSpeed}s linear infinite`,
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