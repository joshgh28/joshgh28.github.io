
function setTheme(theme) {
  document.body.className = theme + " crt-lines";
  localStorage.setItem("pipboy-theme", theme);
}
window.onload = () => {
  const saved = localStorage.getItem("pipboy-theme");
  if (saved) {
    document.body.className = saved + " crt-lines";
  }
};
