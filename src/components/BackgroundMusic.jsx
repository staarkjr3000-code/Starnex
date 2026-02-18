import { useEffect, useRef } from "react";
import bgMusic from "../assets/bg.mp3";

export default function BackgroundMusic({ play }) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
    }
  }, [play]);

  return <audio ref={audioRef} src={bgMusic} loop preload="auto" />;
}