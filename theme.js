function setTheme(theme) {
  document.body.className = theme + " crt-lines";
  localStorage.setItem("pipboy-theme", theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("pipboy-theme");
  if (savedTheme) {
    document.body.className = savedTheme + " crt-lines";
  }
};


