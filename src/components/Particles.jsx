import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);
  const audioCtxRef = useRef(null);
  const analyserRef = useRef(null);
  const dataRef = useRef(null);

  const mouse = { x: 0, y: 0 };
  let t = 0;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    let cx = w / 2;
    let cy = h / 2;

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      cx = w / 2;
      cy = h / 2;
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    /* ======================
       🎵 SAFE AUDIO INIT
    ======================= */
    function initAudio() {
      if (audioCtxRef.current) return;
      const audio = document.querySelector("audio");
      if (!audio) return;

      const audioCtx = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioCtx.createAnalyser();
      analyser.fftSize = 128;

      const source = audioCtx.createMediaElementSource(audio);
      source.connect(analyser);
      analyser.connect(audioCtx.destination);

      audioCtxRef.current = audioCtx;
      analyserRef.current = analyser;
      dataRef.current = new Uint8Array(analyser.frequencyBinCount);
    }

    window.addEventListener("click", initAudio, { once: true });

    /* ======================
       ✨ PARTICLES (FROM RING EDGE)
    ======================= */
    const particles = [];
    const COUNT = 360;

    function spawnParticle(ringRadius) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;

      return {
        x: cx + Math.cos(angle) * ringRadius,
        y: cy + Math.sin(angle) * ringRadius,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: Math.random() * 220 + 180,
        size: Math.random() * 1.8 + 0.6,
      };
    }

    for (let i = 0; i < COUNT; i++) {
      particles.push(spawnParticle(120));
    }

    /* ======================
       🎬 ANIMATION LOOP
    ======================= */
    function animate() {
      ctx.clearRect(0, 0, w, h);
      t += 0.01;

      /* 🎵 MUSIC ENERGY */
      let bass = 0;
      if (analyserRef.current && dataRef.current) {
        analyserRef.current.getByteFrequencyData(dataRef.current);
        bass = dataRef.current[1] / 255;
      }

      bass = Math.pow(bass, 0.7);

      /* ======================
         🔘 GLOWING RING
      ======================= */
      const baseRadius = 100;
      const ringRadius = baseRadius + bass * 160;
      const thickness = 10 + bass * 22;
      const wave = Math.sin(t * 2) * 6;

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(t * 0.25);

      ctx.beginPath();
      ctx.arc(0, 0, ringRadius + wave, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(255,255,255,${0.6 + bass})`;
      ctx.lineWidth = thickness;
      ctx.shadowBlur = 30 + bass * 50;
      ctx.shadowColor = "rgba(160,220,255,1)";
      ctx.stroke();

      ctx.restore();

      /* ======================
         ✨ PARTICLES
      ======================= */
      particles.forEach((p, i) => {
        p.x += p.vx * (1 + bass * 2.5);
        p.y += p.vy * (1 + bass * 2.5);
        p.life--;

        /* 🌀 Mouse distortion */
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;

        if (dist < 150) {
          const force = (150 - dist) * 0.03;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        /* Respawn at ring edge */
        if (
          p.life <= 0 ||
          p.x < -150 ||
          p.x > w + 150 ||
          p.y < -150 ||
          p.y > h + 150
        ) {
          particles[i] = spawnParticle(ringRadius);
          return;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + bass * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${0.5 + bass})`;
        ctx.shadowBlur = 10 + bass * 25;
        ctx.shadowColor = "rgba(160,220,255,0.9)";
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        background: "transparent", // IMPORTANT: no video color change
      }}
    />
  );
}