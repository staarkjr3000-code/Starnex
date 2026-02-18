import { useRef } from "react";
import { gsap } from "gsap";

export default function MagneticButton({
  children,
  className = "",
  strength = 0.35,
  radius = 120,
  onClick
}) {

  const ref = useRef(null);


  const handleMouseMove = (e) => {

    const el = ref.current;
    const rect = el.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    const distance = Math.sqrt(distX * distX + distY * distY);

    if (distance < radius) {

      gsap.to(el, {
        x: distX * strength,
        y: distY * strength,
        duration: 0.35,
        ease: "power3.out"
      });

    }

  };


  const handleMouseLeave = () => {

    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.35)"
    });

  };


  return (
    <button
      ref={ref}
      className={`magnetic-button ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );

}