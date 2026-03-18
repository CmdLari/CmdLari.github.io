document.addEventListener("DOMContentLoaded", () => {
  const galleryToggle = document.querySelector(".gallery-toggle");
  const galleryBox = document.getElementById("galleryBox");

  const gamesToggle = document.querySelector(".games-toggle");
  const gamesBox = document.getElementById("gamesBox");

  galleryToggle.addEventListener("click", (e) => {
    e.preventDefault();

    gamesBox.classList.remove("open");
    gamesToggle.setAttribute("aria-expanded", "false");

    galleryBox.classList.toggle("open");
    galleryToggle.setAttribute(
      "aria-expanded",
      String(galleryBox.classList.contains("open"))
    );
  });
});