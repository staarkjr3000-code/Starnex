import { useState, useEffect } from "react";
import logo from "./assets/logo.png";

import LoadingScene from "./components/LoadingScene";
import VideoBackground from "./components/VideoBackground";
import Particles from "./components/Particles";
import TargetCursor from "./components/TargetCursor";
import BackgroundMusic from "./components/BackgroundMusic";

import ExplorePage from "./components/ExplorePage";
import HeroPage from "./components/HeroPage";
import SocialMediaPage from "./components/SocialMediaPage";
import ContactPage from "./components/ContactPage";
import { playClick } from "./utils/sound";

export default function App() {

  /* ================= STATES ================= */

  const [started, setStarted] = useState(false);
  const [mainVisible, setMainVisible] = useState(false);

  const [exploreOpen, setExploreOpen] = useState(false);
  const [heroOpen, setHeroOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  
  


  /* ================= LOADING SCREEN ================= */

  if (!started) {

    return (
      <LoadingScene
        onStart={() => {
          

          setStarted(true);
          document.body.classList.add("main-app");

        }}
      />
    );

  }


  /* ================= MAIN APP ================= */

  return (

    <div className="app-root">


      {/* VIDEO BACKGROUND */}
      <VideoBackground />
      
    

      {/* MAIN SCREEN */}
      {!exploreOpen && !heroOpen && !socialOpen && !contactOpen && (

      <div className="main-screen">


          {/* GLOW RING */}
          <Particles />


          {/* CREDIT */}
          <div className="made-by">
            MADE BY STAARK
          </div>


          {/* EXPLORE BUTTON */}
          <button
            className="explore-button"
            onClick={() => {
              playClick();
              setExploreOpen(true);
            }}
          >
            EXPLORE
          </button>

        </div>

      )}


      {/* EXPLORE PAGE */}
      {exploreOpen && !heroOpen && !socialOpen&& (
        
      <ExplorePage
       onBack={() => {
        playClick();
        setExploreOpen(false);
       }}
       
       onHero={() => {
        playClick();
       setExploreOpen(false);
       setHeroOpen(true);
     }}
     onSocial={() => {
      playClick();
      setExploreOpen(false);
      setSocialOpen(true);
     }}
     onContact={() => {
      playClick();
      setExploreOpen(false);
      setContactOpen(true);
     }}
      />)}

      {/* HERO PAGE */}
      {heroOpen && (

        <HeroPage

          onBack={() => {
            playClick();
            setHeroOpen(false);
            setExploreOpen(true);
          }}

        />

      )}
      {/* Social Media Page */}
      {socialOpen && (
        <SocialMediaPage
          onBack={() => {
            playClick();
           setSocialOpen(false);
           setExploreOpen(true);
        }}  
      />
    )}
      {/* Contact Page */}
      {contactOpen && (
        <ContactPage
          onBack={() => {
            playClick();
            setContactOpen(false);
            setExploreOpen(true);
          }}
        />
      )}


      {/* CURSOR */}
      <TargetCursor />


      {/* MUSIC */}
      <BackgroundMusic play={started} />


    </div>

  );

}