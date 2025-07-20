document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const shell = document.getElementById("main-shell");
  const lines = [
    "📡 PIP-BOY 3000 BOOTING...",
    "→ BIOS VERSION: 1.0.14",
    "→ SCANNING MEMORY... OK",
    "→ USER: JOSÉ MANUEL GONZÁLEZ HIDALGO",
    "→ STATUS: VERIFIED",
    "→ INITIALIZING INTERFACE...",
    "✔️ BOOT COMPLETE. BIENVENIDO."
  ];
  let i = 0;
  const printLine = () => {
    if (i < lines.length) {
      bootText.textContent += lines[i++] + "\n";
      setTimeout(printLine, 200); // velocidad rápida
    } else {
      document.getElementById("boot-sequence").remove();
      shell.classList.remove("hidden");
    }
  };
  printLine();
});

