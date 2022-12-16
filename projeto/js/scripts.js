// Seleção de elementos
const menuBtn = document.querySelector("#menu");
const closeMenuBtn = document.querySelector("#close-menu");
const menu = document.querySelector("#mobile-navbar");

const desktopLinks = document.querySelectorAll("#navbar a");
const mobileLinks = document.querySelectorAll("#mobile-navbar a");
const allLinks = [...desktopLinks, ...mobileLinks];

console.log(allLinks);

// Funções
function smoothscrool(e) {
    e.preventDefault();
}

// Eventos
Array.from([menuBtn, closeMenuBtn]).forEach((btn) => {
    btn.addEventListener("click", (e) => {
        menu.classList.toggle("menu-active");
    });
});

Array.from(allLinks).forEach((link) => {
    link.addEventListener("click", smoothscrool);
})
