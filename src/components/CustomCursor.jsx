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
      glow.animate({ left: `${e.clientX}px`, top: `${e.clientY}px` }, { duration: 800, fill: 'forwards' });
    };

    const expand = () => {
      dot.style.width = '36px';
      dot.style.height = '36px';
      dot.style.background = 'transparent';
      dot.style.border = '2px solid #38bdf8';
    };
    const shrink = () => {
      dot.style.width = '10px';
      dot.style.height = '10px';
      dot.style.background = '#38bdf8';
      dot.style.border = 'none';
    };

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .card-hover').forEach(el => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .card-hover').forEach(el => {
        el.removeEventListener('mouseenter', expand);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-glow" ref={glowRef} />
    </>
  );
};

export default CustomCursor;
