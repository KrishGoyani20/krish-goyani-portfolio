import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const glow = glowRef.current;
    if (!dot || !glow) return;

    const moveCursor = (e) => {
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;

      glow.animate({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`
      }, {
        duration: 800,
        fill: "forwards"
      });
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseEnter = () => {
      dot.style.width = "40px";
      dot.style.height = "40px";
      dot.style.backgroundColor = "transparent";
      dot.style.border = "2px solid #38bdf8";
      glow.style.width = "600px";
      glow.style.height = "600px";
    };

    const handleMouseLeave = () => {
      dot.style.width = "12px";
      dot.style.height = "12px";
      dot.style.backgroundColor = "#38bdf8";
      dot.style.border = "none";
      glow.style.width = "400px";
      glow.style.height = "400px";
    };

    const interactables = document.querySelectorAll('a, button, .card, .menu-toggle');
    interactables.forEach(el => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactables.forEach(el => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef}></div>
      <div id="cursor-glow" ref={glowRef}></div>
    </>
  );
};

export default CustomCursor;
