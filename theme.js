// Animación de pasar página
document.querySelectorAll('.menu-link').forEach(link => {
  link.addEventListener('click', () => {
    const audio = document.getElementById("pagina");
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  });
});

// Partículas tipo esporas (particles.js)
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 900 } },
    color: { value: "#c2b59b" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
    },
    opacity: {
      value: 0.3,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.1, sync: false }
    },
    size: {
      value: 4,
      random: true,
      anim: { enable: true, speed: 4, size_min: 0.3, sync: false }
    },
    move: {
      enable: true,
      speed: 0.6,
      direction: "top",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false },
      onclick: { enable: false },
      resize: true
    }
  },
  retina_detect: true
});
