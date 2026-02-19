import MagneticButton from "./MagneticButton";
import "./ContactPage.css";

export default function ContactPage({ onBack }) {

  return (

    <div className="contact-page">


      {/* Animated Background System */}

      <div className="contact-bg-core" />
      <div className="contact-bg-grid" />
      <div className="contact-bg-particles" />
      <div className="contact-bg-scanline" />
      <div className="contact-bg-vignette" />


      {/* Heading */}

      <div className="contact-heading glitch" data-text="CONTACT">
        CONTACT
      </div>


      {/* Back Button */}

      <div className="back-button-container">

        <MagneticButton className="back-button" onClick={onBack}>
          BACK
        </MagneticButton>

      </div>


      {/* Main Content */}

      <div className="contact-center">

        <div className="contact-terminal">


          <div className="contact-text">
            I am available across all platforms.
          </div>

          <div className="contact-text">
            You can reach out for collaboration, projects, or communication.
          </div>

          <div className="contact-highlight">
            Primary communication channel
          </div>


          {/* EMAIL BOX — NOT CLICKABLE */}

          <div className="contact-email">
            staark.jr3000@gmail.com
          </div>


         <div className="contact-footer-text">
             Stay tuned for future system upgrades.
              <br />
              Thank you for visiting.
            </div>

        </div>

      </div>


    </div>

  );

}