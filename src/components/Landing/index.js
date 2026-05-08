import React, { useEffect, useRef } from "react";
import { info } from "../../info/Info";
import AnimatedSection from "../AnimatedSection";
import TypeWriter from "../TypeWriter";
import CellNetwork from "../CellNetwork";

import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import { MdEmail } from "react-icons/md";

const subtitlePhrases = [
  "Generative AI for cellular biology",
  "Single-cell & spatial genomics",
  "Perturbation modeling & drug discovery",
  "Multimodal tissue foundation models",
];

const socials = [
  { icon: FaTwitter, label: "X", href: "https://x.com/mo_lotfollahi" },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/Lotfollahi-lab" },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/mlotfollahi/" },
  { icon: SiGooglescholar, label: "Google Scholar", href: "https://scholar.google.com/citations?user=NXhouUcAAAAJ&hl=en" },
  { icon: MdEmail, label: "Email", href: "mailto:ml19@sanger.ac.uk" },
];

const researchAreas = [
  {
    title: "Perturbation Modeling",
    desc: "Generative AI to predict cellular responses to drugs, CRISPR, and disease — enabling counterfactual biology and virtual screening.",
    link: "/research#generative-modeling-of-cellular-responses-to-perturbations",
  },
  {
    title: "Spatial Genomics",
    desc: "Graph deep learning for tissue architecture, niche discovery, and in silico perturbation of tissue ecosystems.",
    link: "/research#tissue-architecture-and-ecosystem-reprogramming-with-spatial-genomics",
  },
  {
    title: "Tissue Foundation Models",
    desc: "Multimodal generative models linking histology, spatial transcriptomics, and clinical data for 3D tissue understanding.",
    link: "/research#generative-multimodal-tissue-foundation-models",
  },
  {
    title: "Core ML Research",
    desc: "New architectures, training objectives, and probabilistic methods for scalable biomedical generative modeling.",
    link: "/research#core-machine-learning-research",
  },
];

function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    let time = 0;

    function resize() {
      canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    }

    function draw() {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = window.devicePixelRatio || 1;
      ctx.clearRect(0, 0, w, h);

      const spacing = 40 * dpr;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * spacing;
          const y = r * spacing;
          const dist = Math.sqrt(
            Math.pow(x - w * 0.5, 2) + Math.pow(y - h * 0.4, 2)
          );
          const wave = Math.sin(dist * 0.003 / dpr - time * 0.8) * 0.5 + 0.5;
          const alpha = 0.06 + wave * 0.12;
          const radius = (1 + wave * 1.2) * dpr;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(127, 137, 255, ${alpha})`;
          ctx.fill();
        }
      }

      time += 0.016;
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}

function ScrollIndicator() {
  const handleClick = () => {
    window.scrollTo({ top: window.innerHeight - 64, behavior: "smooth" });
  };
  return (
    <button
      onClick={handleClick}
      className="scroll-indicator"
      aria-label="Scroll down"
    >
      <span>Scroll Down</span>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

export default function Landing() {
  return (
    <>
      {/* ── Full-viewport hero ── */}
      <section className="hero-full">
        <DotGrid />

        <div className="hero-full__content">
          {/* Interactive single-cell perturbation UMAP */}
          <AnimatedSection animation="scale-in" delay={1}>
            <div className="hero-full__viz-wrap">
              <CellNetwork />
            </div>
            <p className="hero-full__viz-caption">
              Click to perturb &mdash; we pioneer generative AI models for{" "}
              <em>in silico</em> perturbation of cells, predicting how they
              transition between states in response to drugs, gene knockouts,
              and other interventions.{" "}
              <a href="/research#generative-modeling-of-cellular-responses-to-perturbations">
                Learn more &rarr;
              </a>
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={2}>
            <h1 className="hero-full__name">
              Lotfollahi <span className="shimmer-text">Lab</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={3}>
            <p className="hero-full__tagline">
              Machine Learning{" "}
              <span className="hero-full__intersect">&cap;</span>{" "}
              Genomics{" "}
              <span className="hero-full__intersect">&cap;</span>{" "}
              Biomedicine
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={4}>
            <p className="hero-full__subtitle">
              <TypeWriter strings={subtitlePhrases} typeSpeed={50} deleteSpeed={30} pauseTime={2500} />
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={5}>
            <p className="hero-full__affiliation">
              <a href="https://www.sanger.ac.uk/group/lotfollahi-group/" target="_blank" rel="noopener noreferrer">
                Wellcome Sanger Institute
              </a>{" "}
              &amp;{" "}
              <a href="https://www.stemcells.cam.ac.uk/people/affiliates/lotfollahi" target="_blank" rel="noopener noreferrer">
                University of Cambridge
              </a>
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={5}>
            <div className="hero-full__socials">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  href={href}
                  className="social-icon-pop"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <ScrollIndicator />
      </section>

      {/* ── Research directions (below the fold) ── */}
      <section className="research-preview">
        <AnimatedSection animation="fade-up">
          <h2 className="research-preview__heading">Research Directions</h2>
        </AnimatedSection>

        <div className="research-preview__grid">
          {researchAreas.map((area, i) => (
            <AnimatedSection key={area.title} animation="fade-up" delay={i + 1}>
              <a href={area.link} className="research-card">
                <h3>{area.title}</h3>
                <p>{area.desc}</p>
                <span className="research-card__arrow">&rarr;</span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </>
  );
}
