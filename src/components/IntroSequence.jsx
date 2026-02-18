import { useEffect } from "react";
import VideoBackground from "./VideoBackground";
import MagneticButton from "./MagneticButton";
import logo from "../assets/logo.png";

export default function IntroSequence({ onExplore }) {

  useEffect(() => {

    document.body.classList.add("main-app");

    return () => {
      document.body.classList.remove("main-app");
    };

  }, []);


  return (

    <div style={{ width: "100%", height: "100%" }}>


      {/* Background */}
      <VideoBackground />


      {/* Logo */}
      <img
        src={logo}
        className="main-logo"
      />


      {/* Explore Button */}
      <MagneticButton
        className="explore-button"
        onClick={onExplore}
      >
        EXPLORE
      </MagneticButton>


      {/* Credit */}
      <div className="made-by">
        MADE BY STAARK
      </div>


    </div>

  );

}