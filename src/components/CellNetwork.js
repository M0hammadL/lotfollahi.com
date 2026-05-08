import React, { useEffect, useRef } from "react";

const PERTURB_RADIUS = 100;
const IDENTITY_CHANGE_SPEED = 0.008;

const CLUSTER_DEFS = [
  { cx: 0.25, cy: 0.30, spread: 38, count: 90,  color: [127, 137, 255] },
  { cx: 0.70, cy: 0.25, spread: 32, count: 75,  color: [220, 100, 220] },
  { cx: 0.50, cy: 0.65, spread: 42, count: 100, color: [100, 200, 180] },
  { cx: 0.20, cy: 0.72, spread: 28, count: 60,  color: [255, 140, 100] },
  { cx: 0.78, cy: 0.68, spread: 35, count: 80,  color: [180, 130, 255] },
  { cx: 0.45, cy: 0.35, spread: 25, count: 55,  color: [255, 200, 80]  },
  { cx: 0.82, cy: 0.45, spread: 22, count: 45,  color: [100, 180, 255] },
  { cx: 0.15, cy: 0.48, spread: 20, count: 40,  color: [255, 120, 170] },
];

function gaussRand() {
  let u = 0, v = 0;
  while (u === 0) u = Math.random();
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
}

function lerpColor(a, b, t) {
  return [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
    a[2] + (b[2] - a[2]) * t,
  ];
}

function createCells(w, h) {
  const cells = [];
  for (let ci = 0; ci < CLUSTER_DEFS.length; ci++) {
    const cluster = CLUSTER_DEFS[ci];
    const anchorX = cluster.cx * w;
    const anchorY = cluster.cy * h;
    for (let i = 0; i < cluster.count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const dist = Math.abs(gaussRand()) * cluster.spread;
      const hx = anchorX + Math.cos(angle) * dist;
      const hy = anchorY + Math.sin(angle) * dist;
      // Pre-pick a random target cluster for identity change
      let targetIdx;
      do { targetIdx = Math.floor(Math.random() * CLUSTER_DEFS.length); }
      while (targetIdx === ci);

      cells.push({
        x: hx, y: hy,
        homeX: hx, homeY: hy,
        vx: 0, vy: 0,
        r: 1.6 + Math.random() * 1.4,
        origColor: cluster.color,
        targetColor: CLUSTER_DEFS[targetIdx].color,
        colorMix: 0,
        clusterIdx: ci,
        phase: Math.random() * Math.PI * 2,
        driftSpeed: 0.005 + Math.random() * 0.008,
        driftRadius: 3 + Math.random() * 5,
        trail: [],
      });
    }
  }
  return cells;
}

const PERTURB_DURATION = 3.5; // seconds each click perturbation lasts

export default function CellNetwork({ className, style }) {
  const canvasRef = useRef(null);
  const perturbSources = useRef([]);
  const ripples = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    let animId;
    let cells;
    let time = 0;
    let w, h;

    function resize() {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cells = createCells(w, h);
      perturbSources.current = [];
      ripples.current = [];
    }

    function handleClick(e) {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      perturbSources.current.push({ x, y, startTime: time });
      ripples.current.push({ x, y, startTime: time });
    }

    function draw() {
      ctx.fillStyle = "rgba(11, 13, 20, 0.15)";
      ctx.fillRect(0, 0, w, h);

      // Prune expired perturbation sources
      perturbSources.current = perturbSources.current.filter(
        (s) => time - s.startTime < PERTURB_DURATION
      );

      // Draw ripples
      const activeRipples = [];
      for (const r of ripples.current) {
        const age = time - r.startTime;
        if (age < 3.0) {
          const radius = age * 55;
          const alpha = Math.max(0, 0.25 * (1 - age / 3.0));
          ctx.beginPath();
          ctx.arc(r.x, r.y, radius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(200, 180, 255, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
          activeRipples.push(r);
        }
      }
      ripples.current = activeRipples;

      // Draw glow at each active perturbation source
      for (const src of perturbSources.current) {
        const age = time - src.startTime;
        const fadeOut = age > PERTURB_DURATION - 1.0
          ? Math.max(0, (PERTURB_DURATION - age))
          : 1;
        const cursorGrad = ctx.createRadialGradient(
          src.x, src.y, 0, src.x, src.y, PERTURB_RADIUS
        );
        cursorGrad.addColorStop(0, `rgba(200, 180, 255, ${0.08 * fadeOut})`);
        cursorGrad.addColorStop(0.5, `rgba(127, 137, 255, ${0.04 * fadeOut})`);
        cursorGrad.addColorStop(1, "rgba(127, 137, 255, 0)");
        ctx.beginPath();
        ctx.arc(src.x, src.y, PERTURB_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = cursorGrad;
        ctx.fill();
      }

      // Update and draw cells
      for (const c of cells) {
        const driftX = Math.cos(time * c.driftSpeed * 60 + c.phase) * c.driftRadius;
        const driftY = Math.sin(time * c.driftSpeed * 60 + c.phase * 1.3) * c.driftRadius;
        const targetX = c.homeX + driftX;
        const targetY = c.homeY + driftY;

        c.vx += (targetX - c.x) * 0.03;
        c.vy += (targetY - c.y) * 0.03;

        // Apply perturbation from all active click sources
        let perturbed = false;
        for (const src of perturbSources.current) {
          const age = time - src.startTime;
          const fadeOut = age > PERTURB_DURATION - 1.0
            ? Math.max(0, (PERTURB_DURATION - age))
            : 1;

          const dmx = c.x - src.x;
          const dmy = c.y - src.y;
          const dMouse = Math.sqrt(dmx * dmx + dmy * dmy);

          if (dMouse < PERTURB_RADIUS && dMouse > 0) {
            const proximity = (1 - dMouse / PERTURB_RADIUS) * fadeOut;
            const force = proximity * 1.2;
            c.vx += (dmx / dMouse) * force;
            c.vy += (dmy / dMouse) * force;
            c.colorMix = Math.min(1, c.colorMix + IDENTITY_CHANGE_SPEED * proximity);
            perturbed = true;
          }
        }

        if (!perturbed) {
          c.colorMix = Math.max(0, c.colorMix - 0.003);
        }

        c.vx *= 0.88;
        c.vy *= 0.88;
        c.x += c.vx;
        c.y += c.vy;

        // Record trail when perturbed
        const speed = Math.sqrt(c.vx * c.vx + c.vy * c.vy);
        if (perturbed || speed > 0.3) {
          c.trail.push({ x: c.x, y: c.y, t: time });
        }
        // Keep last ~20 trail points, prune old ones
        while (c.trail.length > 20) c.trail.shift();
        // Also prune by age
        while (c.trail.length > 0 && time - c.trail[0].t > 1.2) c.trail.shift();

        const currentColor = lerpColor(c.origColor, c.targetColor, c.colorMix);
        const [cr, cg, cb] = currentColor;

        const pulse = 0.6 + Math.sin(time * 3 + c.phase) * 0.15;
        const perturbGlow = c.colorMix > 0.05 ? c.colorMix * 0.3 : 0;
        const alpha = Math.min(1, pulse + perturbGlow);

        // Draw velocity trail (like RNA velocity streamlines)
        if (c.trail.length > 2 && (perturbed || c.colorMix > 0.02)) {
          ctx.beginPath();
          ctx.moveTo(c.trail[0].x, c.trail[0].y);
          for (let ti = 1; ti < c.trail.length; ti++) {
            ctx.lineTo(c.trail[ti].x, c.trail[ti].y);
          }
          ctx.strokeStyle = `rgba(${cr|0}, ${cg|0}, ${cb|0}, ${alpha * 0.35})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Arrowhead at current position showing velocity direction
          if (speed > 0.4) {
            const angle = Math.atan2(c.vy, c.vx);
            const arrowLen = Math.min(speed * 4, 12);
            const tipX = c.x + Math.cos(angle) * arrowLen;
            const tipY = c.y + Math.sin(angle) * arrowLen;
            const headSize = Math.min(3, arrowLen * 0.4);
            ctx.beginPath();
            ctx.moveTo(tipX, tipY);
            ctx.lineTo(
              tipX - Math.cos(angle - 0.5) * headSize,
              tipY - Math.sin(angle - 0.5) * headSize
            );
            ctx.moveTo(tipX, tipY);
            ctx.lineTo(
              tipX - Math.cos(angle + 0.5) * headSize,
              tipY - Math.sin(angle + 0.5) * headSize
            );
            ctx.strokeStyle = `rgba(${cr|0}, ${cg|0}, ${cb|0}, ${alpha * 0.55})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Soft glow
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.r * 4);
        grad.addColorStop(0, `rgba(${cr|0}, ${cg|0}, ${cb|0}, ${alpha * 0.18})`);
        grad.addColorStop(1, `rgba(${cr|0}, ${cg|0}, ${cb|0}, 0)`);
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * 4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Cell dot
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr|0}, ${cg|0}, ${cb|0}, ${alpha})`;
        ctx.fill();

        // Bright center
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
        ctx.fill();
      }

      // Hint text
      if (time < 8) {
        const hintAlpha = time > 6 ? Math.max(0, (8 - time) / 2) : 1;
        ctx.save();
        ctx.globalAlpha = hintAlpha * (0.35 + Math.sin(time * 2) * 0.1);
        ctx.font = "500 10px -apple-system, BlinkMacSystemFont, sans-serif";
        ctx.textAlign = "center";
        ctx.fillStyle = "rgba(200, 210, 255, 0.9)";
        ctx.fillText("click to perturb", w / 2, h - 14);
        ctx.restore();
      }

      time += 0.016;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const el = canvas;
    el.addEventListener("click", handleClick);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("click", handleClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        display: "block",
        width: "100%",
        height: "100%",
        cursor: "crosshair",
        ...style,
      }}
    />
  );
}
