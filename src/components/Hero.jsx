import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
  const typingRef = useRef(null);
  
  useEffect(() => {
    const text = ["React Native Developer", "Mobile App Developer", "JavaScript Enthusiast", "Innovative Coder"];
    let i = 0, j = 0, current = "", isDeleting = false;
    let timerId;
    
    const type = () => {
      if (!typingRef.current) return;
      
      if (i < text.length) {
        let word = text[i];
        if (!isDeleting) {
          current = word.substring(0, j++);
        } else {
          current = word.substring(0, j--);
        }

        typingRef.current.innerHTML = current + "<span style='color: #38bdf8'>|</span>";

        if (!isDeleting && j === word.length + 1) {
          isDeleting = true;
          j = word.length - 1;
          timerId = setTimeout(type, 1500);
          return;
        }
        
        if (isDeleting && j === -1) {
          isDeleting = false;
          j = 0;
          i = (i + 1) % text.length;
        }

        timerId = setTimeout(type, isDeleting ? 40 : 100);
      }
    };
    
    type();
    
    return () => clearTimeout(timerId);
  }, []);

  return (
    <header id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, I'm <br /><span>Krish Goyani</span></h1>
          <p id="typing" ref={typingRef}></p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="/KrishGoyani.pdf" download className="btn btn-outline">My Resume</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/image.jpg" alt="Krish Goyani" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
