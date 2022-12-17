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

    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
        top: offsetTop,
        behavior: "smooth",
    })

    setTimeout(() => {

        if(menu.classList.contains("menu-active")) {
            menu.classList.remove("menu-active");
        }
    }, 500);
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
