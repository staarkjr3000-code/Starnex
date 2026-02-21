import { useEffect, useRef } from "react";

export default function Particles() {

  const canvasRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;

    let mouse = { x: w/2, y: h/2 };

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    /* ======================
       WIND FIELD
    ======================= */

    function wind(x, y, t) {

      return {

        x: Math.sin(y * 0.002 + t * 0.3) * 0.15,

        y: -0.2 + Math.cos(x * 0.002 + t * 0.2) * 0.1

      };

    }

    /* ======================
       DUST PARTICLES
    ======================= */

    const dust = [];
    const COUNT = 240;

    function createDust() {

      const depth = Math.random();

      return {

        x: Math.random() * w,
        y: Math.random() * h,

        vx: 0,
        vy: 0,

        depth,

        size: 0.4 + depth * 1.8,

        opacity: 0.05 + depth * 0.25,

        drift: Math.random() * Math.PI * 2

      };

    }

    for (let i = 0; i < COUNT; i++) {
      dust.push(createDust());
    }

    /* ======================
       STREAKS
    ======================= */

    const streaks = [];

    function createStreak() {

      const left = Math.random() < 0.5;

      return {

        x: left ? -200 : w + 200,
        y: Math.random() * h,

        vx: left ? 1.2 : -1.2,

        length: 100,

        opacity: 0.2,

        life: 0,
        maxLife: 400

      };

    }

    let t = 0;

    /* ======================
       ANIMATION
    ======================= */

    function animate() {

      ctx.clearRect(0, 0, w, h);

      t += 0.01;

      /* dust */

      dust.forEach(p => {

        const wf = wind(p.x, p.y, t);

        p.vx += wf.x * 0.02;
        p.vy += wf.y * 0.02;

        p.vx *= 0.98;
        p.vy *= 0.98;

        p.x += p.vx;
        p.y += p.vy;

        /* mouse repel */

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;

        const dist = Math.sqrt(dx*dx + dy*dy);

        if (dist < 140) {

          p.vx += dx * 0.0005;
          p.vy += dy * 0.0005;

        }

        /* reset */

        if (p.y < -20) {
          p.y = h + 20;
          p.x = Math.random() * w;
        }

        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;

        /* parallax */

        const rx = p.x + (mouse.x - w/2) * p.depth * 0.015;
        const ry = p.y + (mouse.y - h/2) * p.depth * 0.015;

        /* draw */

        ctx.beginPath();

        ctx.arc(rx, ry, p.size, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${p.opacity})`;

        ctx.shadowBlur = p.depth * 12;

        ctx.shadowColor = "rgba(255,255,255,0.25)";

        ctx.fill();

      });

      /* create streak */

      if (Math.random() < 0.002 && streaks.length < 2) {

        streaks.push(createStreak());

      }

      /* draw streak */

      streaks.forEach((s, i) => {

        s.x += s.vx;
        s.life++;

        const g = ctx.createLinearGradient(
          s.x,
          s.y,
          s.x - s.length * Math.sign(s.vx),
          s.y
        );

        g.addColorStop(0, `rgba(255,255,255,${s.opacity})`);
        g.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = g;

        ctx.lineWidth = 1;

        ctx.beginPath();

        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.length * Math.sign(s.vx), s.y);

        ctx.stroke();

        if (s.life > s.maxLife) {
          streaks.splice(i, 1);
        }

      });

      requestAnimationFrame(animate);

    }

    animate();

  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-canvas"
    />
  );

}