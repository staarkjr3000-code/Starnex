import { useEffect, useState } from "react";
import "./TargetCursor.css";

export default function TargetCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPos({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const hoverCheck = (e) => {
      const el = e.target;

      if (
        el.classList.contains("explore-button") ||
        el.classList.contains("start-button")
      ) {
        setLocked(true);
      } else {
        setLocked(false);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hoverCheck);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hoverCheck);
    };
  }, []);

  return (
    <div
      className={`target ${locked ? "locked" : ""}`}
      style={{
        left: pos.x,
        top: pos.y,
      }}
    >
      <div className="center-dot"></div>

      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>
    </div>
  );
}