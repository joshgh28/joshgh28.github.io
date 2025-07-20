function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);
}
document.addEventListener("DOMContentLoaded", () => {
  const t = localStorage.getItem("theme") || "verde";
  setTheme(t);
});
