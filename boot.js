document.addEventListener("DOMContentLoaded", () => {
  const bootText = document.getElementById("boot-text");
  const interface = document.getElementById("main-interface");
  const lines = [
    "BOOT SEQUENCE: PIP-BOY 3000 INITIATED",
    "USER: José Manuel González Hidalgo",
    "LOADING SYSTEM MODULES...",
    "LOADING PERSONAL DATA...",
    "WELCOME BACK, JOSÉ MANUEL"
  ];
  let i = 0;
  const printLine = () => {
    if (i < lines.length) {
      bootText.textContent += lines[i++] + "\n";
      setTimeout(printLine, 1000);
    } else {
      document.getElementById("boot-sequence").style.display = "none";
      interface.classList.remove("hidden");
    }
  };
  printLine();
});