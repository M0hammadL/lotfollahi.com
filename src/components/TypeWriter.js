import React, { useEffect, useState } from "react";

/**
 * Cycles through an array of strings with a typing/deleting animation.
 *
 * @param {Object} props
 * @param {string[]} props.strings   – phrases to cycle through
 * @param {number}   [props.typeSpeed=60]    – ms per character when typing
 * @param {number}   [props.deleteSpeed=35]  – ms per character when deleting
 * @param {number}   [props.pauseTime=2200]  – ms to pause after finishing a phrase
 * @param {string}   [props.className]
 */
export default function TypeWriter({
  strings,
  typeSpeed = 60,
  deleteSpeed = 35,
  pauseTime = 2200,
  className = "",
}) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!strings || strings.length === 0) return;

    const current = strings[index];
    let timeout;

    if (!isDeleting && displayed === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && displayed === "") {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % strings.length);
    } else {
      const delta = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setDisplayed(
          isDeleting
            ? current.slice(0, displayed.length - 1)
            : current.slice(0, displayed.length + 1)
        );
      }, delta);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index, strings, typeSpeed, deleteSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayed}
      <span
        aria-hidden="true"
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "var(--ifm-color-primary)",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "typewriter-blink 0.8s step-end infinite",
        }}
      />
    </span>
  );
}
