function playSound() {
  const audio = document.getElementById("pageSound");
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#c8bfae" },
      shape: { type: "circle" },
      opacity: { value: 0.2, random: true },
      size: { value: 4, random: true },
      line_linked: { enable: false },
      move: {
        enable: true,
        speed: 0.4,
        direction: "top",
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false },
        onclick: { enable: false },
        resize: true,
      },
    },
    retina_detect: true,
  });
});


