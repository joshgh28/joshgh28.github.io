window.onload = function () {
  // Cargar esporas flotantes
  const sporesContainer = document.createElement("div");
  sporesContainer.className = "spores";
  document.body.appendChild(sporesContainer);

  for (let i = 0; i < 80; i++) {
    let spore = document.createElement("div");
    spore.className = "spore";
    spore.style.left = Math.random() * 100 + "vw";
    spore.style.animationDuration = 5 + Math.random() * 10 + "s";
    spore.style.opacity = Math.random();
    sporesContainer.appendChild(spore);
  }

  // Sonido ambiente (lluvia + electricidad)
  const audio = new Audio("ambiente_postapocaliptico.mp3");
  audio.loop = true;
  audio.volume = 0.4;
  audio.play();
};

