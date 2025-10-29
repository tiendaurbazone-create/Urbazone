const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const nav = document.querySelector("#nav");

openMenu.addEventListener("click", () => {
    nav.classList.add("nav-visible");
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
})