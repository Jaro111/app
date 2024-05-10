const love = document.getElementById("love");
const love2 = document.getElementById("love2");
const click = document.getElementById("click");
const body = document.getElementById("body");

click.addEventListener("click", () => {
  love.textContent = "KOCHAM CIĘ ŚLICZNOTKO";
  love2.textContent = "MNIEJ NIŻ JUTRO I BARDZIEJ NIŻ WCZORAJ";
  body.style.backgroundImage = "url('wallpaperflare.com_wallpaper.jpg')";
  click.style.display = "none";
});
