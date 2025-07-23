// theme.js
function playSound() {
  const sound = document.getElementById("flipSound");
  if (sound) sound.play();
}

function openDiary() {
  playSound();
  const menu = document.getElementById("menuPage");
  if (menu) {
    document.querySelector(".cover").style.display = "none";
    menu.style.display = "flex";
  }
}
