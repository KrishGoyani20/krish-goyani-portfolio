document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initScrollAnimations();
  initTypingEffect();
  initScrollProgress();
  initMobileMenu();
  renderSkills();
});

function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const glow = document.getElementById("cursor-glow");

  if (!dot || !glow) return;

  window.addEventListener("mousemove", (e) => {
    // Dot follows precisely
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;

    // Glow follows with a slight delay using animate
    glow.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, {
      duration: 800,
      fill: "forwards"
    });
  });

  // Expand cursor on interactive elements
  const interactables = document.querySelectorAll('a, button, .card, .menu-toggle');
  
  interactables.forEach(el => {
    el.addEventListener("mouseenter", () => {
      dot.style.width = "40px";
      dot.style.height = "40px";
      dot.style.backgroundColor = "transparent";
      dot.style.border = "2px solid #38bdf8";
      glow.style.width = "600px";
      glow.style.height = "600px";
    });
    
    el.addEventListener("mouseleave", () => {
      dot.style.width = "12px";
      dot.style.height = "12px";
      dot.style.backgroundColor = "#38bdf8";
      dot.style.border = "none";
      glow.style.width = "400px";
      glow.style.height = "400px";
    });
  });
}

function initScrollAnimations() {
  const elements = document.querySelectorAll(".section-reveal");
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  });

  elements.forEach(el => {
    observer.observe(el);
  });
}

function initTypingEffect() {
  const text = ["React Native Developer", "Mobile App Developer", "JavaScript Enthusiast", "Innovative Coder"];
  let i = 0, j = 0, current = "", isDeleting = false;
  const typingElement = document.getElementById("typing");

  if (!typingElement) return;

  function type() {
    if (i < text.length) {
      let word = text[i];
      if (!isDeleting) {
        current = word.substring(0, j++);
      } else {
        current = word.substring(0, j--);
      }

      typingElement.innerHTML = current + "<span style='color: #38bdf8'>|</span>";

      // Pause at the end of the word
      if (!isDeleting && j === word.length + 1) {
        isDeleting = true;
        j = word.length - 1;
        setTimeout(type, 1500);
        return;
      }
      
      // Move to the next word
      if (isDeleting && j === -1) {
        isDeleting = false;
        j = 0;
        i = (i + 1) % text.length;
      }

      setTimeout(type, isDeleting ? 40 : 100);
    }
  }
  
  type();
}

function initScrollProgress() {
  const progressBar = document.getElementById("scrollProgressBar");
  if (!progressBar) return;

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    
    // Guard against division by zero if body is tiny, though impossible here
    if (scrollHeight <= 0) return;
    
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + "%";
  });
}

function initMobileMenu() {
  const menuToggle = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li a");

  if (!menuToggle) return;

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-active");
    navLinks.classList.toggle("active");
  });

  // Close menu automatically when a link is clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.classList.remove("is-active");
      navLinks.classList.remove("active");
    });
  });
}

const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "C", percentage: 60 },
      { name: "C++", percentage: 60 },
      { name: "CSS", percentage: 85 },
      { name: "HTML", percentage: 90 },
      { name: "JavaScript", percentage: 70 },
      { name: "TypeScript", percentage: 65 }
    ]
  },
  {
    category: "Libraries & Frameworks",
    skills: [
      { name: "React Native", percentage: 100 },
      { name: "Express Js", percentage: 60 },
      { name: "Redux", percentage: 80 },
      { name: "Firebase", percentage: 70 },
      { name: "Axios", percentage: 85 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "Firebase", percentage: 70 },
      { name: "SQLite", percentage: 80 },
      { name: "MongoDB", percentage: 65 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "VS Code", percentage: 90 },
      { name: "Android Studio", percentage: 85 },
      { name: "GitHub", percentage: 80 },
      { name: "Teams", percentage: 90 },
      { name: "Postman", percentage: 75 }
    ]
  },
  {
    category: "Operating Systems",
    skills: [
      { name: "Windows", percentage: 90 },
      { name: "Mac OS", percentage: 80 },
      { name: "Linux", percentage: 70 }
    ]
  },
  {
    category: "Spoken Languages",
    skills: [
      { name: "English", percentage: 70 },
      { name: "Hindi", percentage: 100 },
      { name: "Gujarati", percentage: 100 }
    ]
  }
];

function renderSkills() {
  const container = document.getElementById("skills-container");
  if (!container) return;

  let html = "";
  skillsData.forEach(category => {
    let skillsHtml = "";
    category.skills.forEach(skill => {
      skillsHtml += `
          <div class="skill-box">
            <div class="skill-name"><span>${skill.name}</span></div>
            <div class="skill-bar"><span class="skill-per" style="width: ${skill.percentage}%;"></span></div>
          </div>`;
    });

    html += `
      <div class="card" style="padding: 25px; background: rgba(56,189,248,0.03);">
        <h3 style="font-size: 1.3rem; margin-bottom: 15px; color: #38bdf8;">${category.category}</h3>
        <div class="skills-column">
${skillsHtml}
        </div>
      </div>`;
  });

  container.innerHTML = html;
}
