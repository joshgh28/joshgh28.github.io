document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("boot-text");
  const shell = document.getElementById("main-shell");
  const lines = [
    "📡 PIP‑BOY 3000 BOOT SEQUENCE",
    "→ INIT BIOS... OK",
    "→ LOAD MODULES... OK",
    "→ USER: JOSÉ MANUEL GONZÁLEZ HIDALGO",
    "→ INTERFACE ONLINE",
    "✔️ MENU PRINCIPAL LISTO"
  ];
  let i = 0;
  const next = () => {
    if (i < lines.length) {
      text.textContent += lines[i++] + "\n";
      setTimeout(next, 200);
    } else {
      document.getElementById("boot-sequence").remove();
      shell.classList.remove("hidden");
    }
  };
  next();
});


