const header = document.querySelector(".header");
const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

function closeMenu() {
    header.classList.remove("menu-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Menü öffnen");
}

menuToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
});

navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
        closeMenu();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeMenu();
        menuToggle.focus();
    }
});

window.matchMedia("(min-width: 701px)").addEventListener("change", (event) => {
    if (event.matches) {
        closeMenu();
    }
});