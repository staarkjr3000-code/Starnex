import "./SocialMediaPage.css";
import MagneticButton from "./MagneticButton";

export default function SocialMediaPage({ onBack }) {

  return (

    <div className="social-page">

      {/* BACKGROUND LAYERS */}
      <div className="social-overlay"/>
      <div className="social-grid"/>
      <div className="social-scanlines"/>

      {/* HOLOGRAM DECORATIONS */}
      <div className="holo-circle circle1"/>
      <div className="holo-circle circle2"/>
      <div className="holo-circle circle3"/>

      <div className="holo-line line1"/>
      <div className="holo-line line2"/>
      <div className="holo-line line3"/>

      <div className="holo-dot dot1"/>
      <div className="holo-dot dot2"/>
      <div className="holo-dot dot3"/>


      {/* TOP BAR */}
      <div className="social-topbar">

        <h1 className="social-heading glitch" data-text="SOCIAL INTERFACE">
          SOCIAL INTERFACE
        </h1>

        <MagneticButton
          className="back-button"
          onClick={onBack}
        >
          BACK
        </MagneticButton>

      </div>


      {/* LEFT SIDE SYSTEM TEXT */}
      <div className="social-info-left">

        <div className="info-block">
          STATUS: ONLINE
        </div>

        <div className="info-block">
          NETWORK: CONNECTED
        </div>

        <div className="info-block">
          PROFILE: ACTIVE
        </div>

        <div className="info-block">
          SIGNAL STRENGTH: MAXIMUM
        </div>

      </div>


      {/* RIGHT SIDE SYSTEM TEXT */}
      <div className="social-info-right">

        <div className="info-block">
          ID: SOUMEEL_MALLICK
        </div>

        <div className="info-block">
          ACCESS LEVEL: FULL
        </div>

        <div className="info-block">
          INTERFACE: SOCIAL MODULE
        </div>

        <div className="info-block">
          SECURITY: VERIFIED
        </div>

      </div>


      {/* CENTER PANEL */}
      <div className="social-panel">

        <div className="panel-header">
          SELECT CONNECTION
        </div>

        <MagneticButton
          className="social-button"
          onClick={() => window.open("https://www.instagram.com/mr_starborn?igsh=MTltYjdsbmN6dmdibg==")}
          
        >
          INSTAGRAM
        </MagneticButton>

        <MagneticButton
          className="social-button"
          onClick={() => window.open("https://x.com/Staark3000_")}
        >
          X (TWITTER)
        </MagneticButton>

        <MagneticButton
          className="social-button"
          onClick={() => window.open("https://www.reddit.com/u/staark_3000/s/cWHVK7LZSZ")}
        >
          REDDIT
        </MagneticButton>

        <MagneticButton
          className="social-button"
          onClick={() => window.open("https://discord.gg/XaEpdn36")}
        >
          DISCORD
        </MagneticButton>

        <MagneticButton
          className="social-button"
          onClick={() => window.open("https://www.facebook.com/share/1CZ2CcKRrM/")}
        >
          FACEBOOK
        </MagneticButton>

      </div>


      {/* BOTTOM STATUS */}
      <div className="social-footer">

        SOCIAL MODULE ACTIVE • READY FOR CONNECTION

      </div>


    </div>

  );
}