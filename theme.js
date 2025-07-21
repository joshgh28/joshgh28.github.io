function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("pipboy-theme", theme);
}

window.onload = () => {
  const savedTheme = localStorage.getItem("pipboy-theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};



