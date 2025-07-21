
function setTheme(theme) {
  document.body.className = theme + " crt-lines";
  document.querySelector('.pipboy-shell')?.classList.remove("verde", "naranja", "azul");
  document.querySelector('.pipboy-shell')?.classList.add(theme);
  localStorage.setItem("pipboy-theme", theme);
}
window.onload = () => {
  const saved = localStorage.getItem("pipboy-theme");
  if (saved) {
    document.body.className = saved + " crt-lines";
    document.querySelector('.pipboy-shell')?.classList.add(saved);
  }
};
