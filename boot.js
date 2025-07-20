document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const shell = document.getElementById("main-shell");
  const lines = [
    "📡 PIP-BOY 3000 SYSTEM CHECK",
    "→ BIOS VERSION: 1.0.14",
    "→ INIT MEMORY... OK",
    "→ LOAD MODULES... OK",
    "→ USER DETECTED: JOSÉ MANUEL",
    "→ RETRIEVING USER FILES...",
    "→ SYSTEM ONLINE",
    "✔️ BIENVENIDO DE NUEVO, SUPERVIVIENTE"
  ];
  let i = 0;
  const printLine = () => {
    if (i < lines.length) {
      bootText.textContent += lines[i++] + "\\n";
      setTimeout(printLine, 600);
    } else {
      document.getElementById("boot-sequence").remove();
      shell.classList.remove("hidden");
    }
  };
  printLine();
});

