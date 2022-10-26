const btnHamburger = document.querySelector(".mobile-hamburger");
const btnClose = document.querySelector(".mobile-close");
const mainNavMenu = document.querySelector(".main-nav-menu");

btnHamburger.addEventListener("click", () => mainNavMenu.classList.add("open"));
btnClose.addEventListener("click", () => mainNavMenu.classList.remove("open"));

mainNavMenu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mainNavMenu.classList.remove("open");
  }
});
