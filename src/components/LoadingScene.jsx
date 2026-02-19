import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function LoadingScene({ onStart }) {

  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);
  const [dots, setDots] = useState("");

  useEffect(() => {

    const interval = setInterval(() => {

      setProgress(prev => {

        if (prev >= 100) {

          clearInterval(interval);

          setTimeout(() => setReady(true), 400);

          return 100;
        }

        return prev + 1;

      });

    }, 18);

    return () => clearInterval(interval);

  }, []);


  useEffect(() => {

    if (ready) return;

    const dotInterval = setInterval(() => {

      setDots(prev => prev.length >= 3 ? "" : prev + ".");

    }, 400);

    return () => clearInterval(dotInterval);

  }, [ready]);

    return (

      <div className="loading-screen">

        <div className="loading-container">

          <img
            src={logo}
            className="loading-logo"
            draggable="false"
          />

          {!ready && (
            <>
              <div className="mc-progress-container">
                <div
                  className="mc-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="loading-text">
                Loading resources{dots}
              </div>
            </>
          )}

          {ready && (
            <button
              className="start-button"
              onClick={onStart}
              
            >
              START
            </button>
          )}
            {/* CREDIT */}
              <div className="hero-credit">
                MADE BY STAARK
              </div>

        </div>

      </div>

    );
}