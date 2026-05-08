import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps children and applies a CSS animation class when scrolled into view.
 *
 * @param {Object} props
 * @param {"fade-up"|"fade-down"|"fade-left"|"fade-right"|"scale-in"|"fade-in"} [props.animation="fade-up"]
 * @param {number}  [props.delay=0]        – stagger index (1-6) mapped to .anim-delay-N
 * @param {number}  [props.threshold=0.15] – Intersection Observer threshold
 * @param {string}  [props.className]      – extra classes on the wrapper
 * @param {string}  [props.as="div"]       – HTML element to render
 * @param {Object}  [props.style]          – inline styles
 */
export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  threshold = 0.15,
  className = "",
  as: Tag = "div",
  style,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const classes = [
    `anim-${animation}`,
    visible && "in-view",
    delay > 0 && `anim-delay-${Math.min(delay, 6)}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} className={classes} style={style}>
      {children}
    </Tag>
  );
}
