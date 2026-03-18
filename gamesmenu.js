const gamesToggle = document.querySelector(".games-toggle");
const gamesBox = document.getElementById("gamesBox");

const galleryToggle = document.querySelector(".gallery-toggle");
const galleryBox = document.getElementById("galleryBox");

gamesToggle.addEventListener("click", (e) => {
  e.preventDefault();

  galleryBox.classList.remove("open");
  galleryToggle.setAttribute("aria-expanded", "false");

  gamesBox.classList.toggle("open");
  gamesToggle.setAttribute(
    "aria-expanded",
    String(gamesBox.classList.contains("open"))
  );
});