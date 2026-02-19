import me from "../assets/me.png";
import "./HeroPage.css";
import { useEffect } from "react";

export default function HeroPage({ onBack }) {

useEffect(() => {

  const roles = [
    "VISIONER",
    "SYSTEM ARCHITECT",
    "STUDENT",
    "FUTURE BUILDER",
    "DEVELOPER",
    "TECH ENTHUSIAST",
    "INNOVATOR",
    "PROBLEM SOLVER",
    "LIFELONG LEARNER",
    "DIGITAL CREATOR",
    "DESIGNER"
    ,
  ];

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

  const element = document.querySelector(".role-text");

  let roleIndex = 0;
  let frame = 0;

  function decryptEffect() {

    const target = roles[roleIndex];

    let output = "";

    for (let i = 0; i < target.length; i++) {

      if (i < frame) {
        output += target[i];
      } else {
        output += chars[Math.floor(Math.random() * chars.length)];
      }

    }

    element.textContent = output;

    frame++;

    if (frame <= target.length) {

      requestAnimationFrame(decryptEffect);

    } else {

      setTimeout(() => {

        frame = 0;
        roleIndex = (roleIndex + 1) % roles.length;

        decryptEffect();

      }, 2000);

    }

  }

  decryptEffect();

}, []);

  return (

    <div className="hero-page">

      <div className="space-bg">

          <div className="stars stars-layer-1"></div>
          <div className="stars stars-layer-2"></div>
          <div className="stars stars-layer-3"></div>

          <div className="constellation constellation-1"></div>
          <div className="constellation constellation-2"></div>

          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="planet planet-3"></div>
          <div className="shooting-star star-1"></div>
          <div className="shooting-star star-2"></div>
          <div className="shooting-star star-3"></div>
          <div className="shooting-star star-4"></div>
          <div className="nebula nebula-1"></div>
          <div className="nebula nebula-2"></div>
          <div className="space-dust"></div>
          <div className="galaxy"></div>
          <div className="constellation-network"></div>
      </div>

      {/* BACK BUTTON */}
      <div className="back-button-container">
        <button
          className="magnetic-button back-button"
          onClick={onBack}
        >
          BACK
        </button>
      </div>


      {/* MAIN LAYOUT */}
      <div className="hero-container">


        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="giant-planet">

            <div className="planet-ring ring-a"></div>
            <div className="planet-ring ring-b"></div>

            <div className="planet-equator"></div>

            {/* SATELLITES */}
            <div className="orbit orbit-1">
              <div className="satellite sat-1"></div>
            </div>

            <div className="orbit orbit-2">
              <div className="satellite sat-2"></div>
            </div>

            <div className="orbit orbit-3">
              <div className="satellite sat-3"></div>

              {/* SPACE STATION */}
              <div className="orbit orbit-station">

                <div className="space-station">

                  <div className="station-ring"></div>

                  <div className="station-core"></div>

                  <div className="station-beam"></div>

                </div>

              </div>
            </div>

          </div>

          <h1 className="hero-name">
            Soumeel Mallick
          </h1>

          <div className="hero-title">
            STAARK
          </div>

            <div className="hero-identity">

            <div className="identity-label">
              IDENTITY STATUS
            </div>

            <div className="identity-role">
              <span className="role-text"></span>
            </div>

          </div>

          <div className="hero-description">

            <p>
              I’m Soumeel Mallick — a student driven by curiosity, vision, and the ambition to build the future.  
              I see technology as more than code — it’s the foundation for turning imagination into reality.  
              I’m passionate about developing intelligent systems and designing futuristic, meaningful interfaces.  
              I constantly learn, experiment, and push beyond limits to refine my skills and expand my vision.  
              I believe innovation belongs to those who create, not those who follow.  
              My goal is to engineer impactful technology and shape a future defined by intelligence and possibility.
            </p>
            

            <p>VISION IS MY MISSION — STAARK</p>

          </div>

        </div>


        {/* RIGHT SIDE */}
        <div className="hero-right">

          <div className="photo-frame">

            {/* PLANET CORE */}
            <div className="planet-core"></div>

            {/* ENERGY RINGS */}
            <div className="energy-ring ring-1"></div>
            <div className="energy-ring ring-2"></div>
            <div className="energy-ring ring-3"></div>

            {/* HUD */}
            <div className="hud-corner top-left"></div>
            <div className="hud-corner top-right"></div>
            <div className="hud-corner bottom-left"></div>
            <div className="hud-corner bottom-right"></div>

            <div className="hud-target"></div>

            {/* BORDER */}
            <div className="frame-border"></div>

            {/* IMAGE */}
            <img
              src={me}
              className="hero-photo"
              draggable="false"
            />

            <div className="frame-glow"></div>

          </div>

        </div>

      </div>


      {/* CREDIT */}
      <div className="hero-credit">
        MADE BY STAARK
      </div>

    </div>

  );

}