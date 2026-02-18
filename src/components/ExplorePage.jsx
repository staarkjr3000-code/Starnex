import MagneticButton from "./MagneticButton";
import "./ExplorePage.css";

export default function ExplorePage({ onBack, onHero, onSocial, onContact }) {

  return (

    <div className="explore-page">

      {/* HEADING */}
      <div className="explore-heading glitch" data-text="EXPLORE">
        EXPLORE
      </div>


      {/* BACK BUTTON RIGHT SIDE */}
      <MagneticButton
        className="back-button"
        onClick={onBack}
      >
        BACK
      </MagneticButton>


      {/* CENTER BUTTONS */}
      <div className="explore-sections">

        <MagneticButton
          className="section-button glitch"
          data-text="HERO"
          onClick={onHero}
        >
          HERO
        </MagneticButton>


        <MagneticButton
          className="section-button glitch"
          data-text="SOCIAL MEDIA"
          onClick={onSocial}
        >
          SOCIAL MEDIA
        </MagneticButton>


        <MagneticButton
          className="section-button glitch"
          data-text="CONTACT"
          onClick={onContact}
        >
          CONTACT
        </MagneticButton>

      </div>


      {/* BOTTOM TEXT */}
      <div className="made-by glitch-small" data-text="MADE BY STAARK">
        MADE BY STAARK
      </div>

    </div>
  );
}