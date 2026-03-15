import React, { useEffect, useRef } from "react";
import mywork_data from "../../assets/mywork_data";
import "../MyWork/MyWork.css";

const Projects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [], animId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const mkP = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.4 + 0.4,
      a: Math.random() * 0.45 + 0.1,
    });

    const init = () => {
      resize();
      particles = Array.from({ length: 90 }, mkP);
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(126,240,200,${p.a})`;
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(126,240,200,${0.09 * (1 - d / 130)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", init);
    init();
    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", init);
    };
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("pj-in");
      }),
      { threshold: 0.08 }
    );
    document.querySelectorAll(".pj-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const shine = (e, card) => {
    const r = card.getBoundingClientRect();
    card.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100).toFixed(1) + "%");
    card.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100).toFixed(1) + "%");
  };

  return (
    <section id="projects" className="pj-section">
      <canvas ref={canvasRef} className="pj-canvas" />

      {/* Hero */}
      <div className="pj-hero pj-reveal">
        <div className="pj-eyebrow">
          <span className="pj-edot" /> PORTFOLIO 2024 <span className="pj-edot" />
        </div>
        <h2 className="pj-title">
          Built<br />
          <span className="pj-title-outline">Different.</span>
        </h2>
        <h1 className="pj-subtitle">// projects that ship &amp; scale</h1>
      </div>

      {/* Grid */}
      <div className="pj-grid">
        {mywork_data.map((work, i) => {
          const techs = Array.isArray(work.w_tech)
            ? work.w_tech
            : work.w_tech?.split(",") ?? [];
          const delays = ["pj-d1", "pj-d2", "pj-d3", "pj-d4", "pj-d5", "pj-d6"];
          return (
            <div
              key={i}
              className={`pj-card pj-reveal ${delays[i] ?? ""}`}
              onMouseMove={(e) => shine(e, e.currentTarget)}
            >
              <div className="pj-line" />
              <div className="pj-shine" />

              <span className="pj-card-num">_{String(i + 1).padStart(2, "0")}</span>

              <img src={work.w_img} alt={work.w_name} className="pj-img" />
              <div className="pj-shim" />

              <div className="pj-card-body">
                <h3 className="pj-card-name">{work.w_name}</h3>
                <p className="pj-card-desc">{work.w_description}</p>

                <div className="pj-techs">
                  {techs.map((t, ti) => (
                    <span key={ti} className="pj-tech">{t.trim()}</span>
                  ))}
                </div>

                {work.w_link?.length > 1 && (
                  <div className="pj-card-footer">
                    <div className="pj-status">
                      <span className="pj-pdot" /> DEPLOYED
                    </div>

                    <a
                      href={work.w_link}
                      target="_blank"
                      rel="noreferrer"
                      className="pj-vlink"
                    >
                      VIEW →
                    </a>
                  </div>
                )}


              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;