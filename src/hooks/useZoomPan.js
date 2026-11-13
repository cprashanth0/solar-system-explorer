import { useEffect, useRef } from "react";

const MIN_ZOOM = 1; // 1 = whole system fits on screen
const WHEEL_SENSITIVITY = 0.0015; // bigger = each wheel notch zooms more
const DRAG_THRESHOLD = 5; // px of movement before a press counts as a drag

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Clamps the pan to the allowed bounds, then writes the camera to the world element.
function applyCamera(scene, world, cam) {
  if (!scene || !world) return;
  const maxX = ((cam.zoom - 1) * scene.clientWidth) / 2;
  const maxY = ((cam.zoom - 1) * scene.clientHeight) / 2;
  cam.x = clamp(cam.x, -maxX, maxX);
  cam.y = clamp(cam.y, -maxY, maxY);
  world.style.transform = `translate(${cam.x}px, ${cam.y}px) scale(${cam.zoom})`;
  // --px = size of ONE screen pixel, measured in vmin, at the current zoom.
  // Children use it to keep lines and minimum sizes constant on screen.
  const vminPx = Math.min(window.innerWidth, window.innerHeight) / 100;
  world.style.setProperty("--px", String(1 / (vminPx * cam.zoom)));
}

function useZoomPan(resetKey, maxZoom) {
  const sceneRef = useRef(null); // the fixed, full-screen scene (receives input)
  const worldRef = useRef(null); // the wrapper that gets moved/scaled
  const cameraRef = useRef({ zoom: 1, x: 0, y: 0 });
  const maxZoomRef = useRef(maxZoom); // lets the wheel listener see the latest cap
  const didDragRef = useRef(false);

  useEffect(() => {
    const scene = sceneRef.current;
    const world = worldRef.current;
    if (!scene || !world) return;
    const cam = cameraRef.current;
    let pointer = null; // the one active press, or null

    const onWheel = (e) => {
      e.preventDefault();
      // Some browsers report wheel movement in lines instead of pixels.
      const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
      const rect = scene.getBoundingClientRect();
      // Cursor position relative to the scene center (the zoom origin).
      const cx = e.clientX - (rect.left + rect.width / 2);
      const cy = e.clientY - (rect.top + rect.height / 2);
      const newZoom = clamp(
        cam.zoom * Math.exp(-delta * WHEEL_SENSITIVITY),
        MIN_ZOOM,
        maxZoomRef.current
      );
      const ratio = newZoom / cam.zoom;
      // Shift the pan so the point under the cursor stays under the cursor.
      cam.x = cx - (cx - cam.x) * ratio;
      cam.y = cy - (cy - cam.y) * ratio;
      cam.zoom = newZoom;
      applyCamera(scene, world, cam);
    };

    const onPointerDown = (e) => {
      if (pointer) return; // ignore a second finger for now (no pinch yet)
      if (e.pointerType === "mouse" && e.button !== 0) return; // left button only
      didDragRef.current = false;
      pointer = { id: e.pointerId, startX: e.clientX, startY: e.clientY, lastX: e.clientX, lastY: e.clientY, dragging: false };
    };

    const onPointerMove = (e) => {
      if (!pointer || e.pointerId !== pointer.id) return;
      if (!pointer.dragging) {
        const moved = Math.hypot(e.clientX - pointer.startX, e.clientY - pointer.startY);
        if (moved < DRAG_THRESHOLD) return; // still just a click
        pointer.dragging = true;
        didDragRef.current = true;
        scene.setPointerCapture(e.pointerId); // keep receiving moves outside the window
      }
      cam.x += e.clientX - pointer.lastX;
      cam.y += e.clientY - pointer.lastY;
      pointer.lastX = e.clientX;
      pointer.lastY = e.clientY;
      applyCamera(scene, world, cam);
    };

    const onPointerEnd = (e) => {
      if (pointer && e.pointerId === pointer.id) pointer = null;
    };

    // Runs in the capture phase, before React sees the click: if the press was a
    // drag, swallow the click so it doesn't open a planet popup.
    const onClickCapture = (e) => {
      if (didDragRef.current) {
        e.stopPropagation();
        didDragRef.current = false;
      }
    };

    // Also refreshes --px, because 1vmin changes size when the window is resized.
    const onResize = () => applyCamera(scene, world, cam);

    scene.addEventListener("wheel", onWheel, { passive: false });
    scene.addEventListener("pointerdown", onPointerDown);
    scene.addEventListener("pointermove", onPointerMove);
    scene.addEventListener("pointerup", onPointerEnd);
    scene.addEventListener("pointercancel", onPointerEnd);
    scene.addEventListener("click", onClickCapture, true);
    window.addEventListener("resize", onResize);

    return () => {
      scene.removeEventListener("wheel", onWheel);
      scene.removeEventListener("pointerdown", onPointerDown);
      scene.removeEventListener("pointermove", onPointerMove);
      scene.removeEventListener("pointerup", onPointerEnd);
      scene.removeEventListener("pointercancel", onPointerEnd);
      scene.removeEventListener("click", onClickCapture, true);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Runs on mount, when the Reset button bumps resetKey, and when the zoom cap
  // changes (i.e. the realism mode is toggled). All three restart from the
  // whole-system view, since a toggle moves everything to new positions.
  useEffect(() => {
    maxZoomRef.current = maxZoom;
    const cam = cameraRef.current;
    cam.zoom = 1;
    cam.x = 0;
    cam.y = 0;
    applyCamera(sceneRef.current, worldRef.current, cam);
  }, [resetKey, maxZoom]);

  return { sceneRef, worldRef };
}

export default useZoomPan;