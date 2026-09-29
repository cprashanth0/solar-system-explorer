import { useEffect, useRef } from "react";

const MIN_ZOOM = 1; //everything fits on screen
const MAX_ZOOM = 5;
const WHEEL_SENSITIVITY = 0.0015; //zoom amt of each wheel notch
const DRAG_THRESHOLD = 5; //pixels needed to register a drag

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

// Clamps the pan to the allowed bounds, then writes the camera to the world element.
function applyCamera(scene, world, cam) {
  if (!scene || !world) return;
  const maxX = ((cam.zoom - 1) * scene.clientWidth) / 2;
  const maxY = ((cam.zoom - 1) * scene.clientHeight) / 2;
  cam.x = clamp(cam.x, -maxX, maxX);
  cam.y = clamp(cam.y, -maxY, maxY);
  world.style.transform = `translate(${cam.x}px, ${cam.y}px) scale(${cam.zoom})`;
}

function useZoomPan(resetKey) {
  const sceneRef = useRef(null); //receives input
  const worldRef = useRef(null); //wrapper is moved/scaled
  const cameraRef = useRef({ zoom: 1, x: 0, y: 0 });
  const didDragRef = useRef(false);

  useEffect(() => {
    const scene = sceneRef.current;
    const world = worldRef.current;
    if (!scene || !world) return;
    const cam = cameraRef.current;
    let pointer = null; 

    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaMode === 1 ? e.deltaY * 33 : e.deltaY;
      const rect = scene.getBoundingClientRect();
      const cx = e.clientX - (rect.left + rect.width / 2);
      const cy = e.clientY - (rect.top + rect.height / 2);
      const newZoom = clamp(cam.zoom * Math.exp(-delta * WHEEL_SENSITIVITY), MIN_ZOOM, MAX_ZOOM);
      const ratio = newZoom / cam.zoom;

      // Point under cursor remains
      cam.x = cx - (cx - cam.x) * ratio;
      cam.y = cy - (cy - cam.y) * ratio;
      cam.zoom = newZoom;
      applyCamera(scene, world, cam);
    };

    const onPointerDown = (e) => {
      if (pointer) return;
      if (e.pointerType === "mouse" && e.button !== 0) return; // left click 
      didDragRef.current = false;
      pointer = { id: e.pointerId, startX: e.clientX, startY: e.clientY, lastX: e.clientX, lastY: e.clientY, dragging: false };
    };

    const onPointerMove = (e) => {
      if (!pointer || e.pointerId !== pointer.id) return;
      if (!pointer.dragging) {
        const moved = Math.hypot(e.clientX - pointer.startX, e.clientY - pointer.startY);
        if (moved < DRAG_THRESHOLD) return;
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

    // Popup is not opened when drag
    const onClickCapture = (e) => {
      if (didDragRef.current) {
        e.stopPropagation();
        didDragRef.current = false;
      }
    };

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

  //Reset button
  useEffect(() => {
    const cam = cameraRef.current;
    cam.zoom = 1;
    cam.x = 0;
    cam.y = 0;
    applyCamera(sceneRef.current, worldRef.current, cam);
  }, [resetKey]);

  return { sceneRef, worldRef };
}

export default useZoomPan;