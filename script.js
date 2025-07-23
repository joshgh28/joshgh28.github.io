
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("abrirDiario");
  const cover = document.getElementById("cover");
  const indice = document.getElementById("indice");

  if (btn) {
    btn.addEventListener("click", () => {
      cover.classList.add("hidden");
      indice.classList.remove("hidden");
    });
  }
});
