document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const shell = document.getElementById("main-shell");
  const lines = [
    "📡 PIP-BOY 3000 SYSTEM CHECK",
    "→ BIOS VERSION: 1.0.14",
    "→ INIT MEMORY... OK",
    "→ LOAD MODULES... OK",
    "→ USER DETECTED: JOSÉ MANUEL",
    "→ AUTHENTICATION: VERIFIED",
    "→ NETWORK LINK: STABLE",
    "→ LOADING SYSTEM PREFERENCES",
    "→ CPU STATUS: NOMINAL",
    "→ RAM USAGE: 13%",
    "→ HDD SCAN: NO THREATS DETECTED",
    "→ LAUNCHING INTERFACE MODULES...",
    "✔️ PIP-BOY ONLINE. BIENVENIDO, SUPERVIVIENTE."
  ];
  let i = 0;
  const printLine = () => {
    if (i < lines.length) {
      bootText.textContent += lines[i++] + "\\n";
      setTimeout(printLine, 200); // velocidad más rápida
    } else {
      bootText.innerHTML += "<span class='cursor'>█</span>";
      document.getElementById("boot-sequence").remove();
      shell.classList.remove("hidden");
    }
  };
  printLine();
});
