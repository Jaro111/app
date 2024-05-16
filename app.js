const love = document.getElementById("love");
const love2 = document.getElementById("love2");
const click = document.getElementById("click");
const body = document.getElementById("body");

click.addEventListener("click", () => {
  love2.textContent = "KOCHAM CIĘ MÓJ PINGWINKU";
  body.style.backgroundImage = "url('1.5-13vsydu.jpg')";
  body.style.backgroundRepeat = "none";
  click.style.display = "none";
});
