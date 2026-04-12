document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header-burger");
    const menu = document.querySelector(".mobile-menu");
    const links = document.querySelectorAll(".mobile-menu a");

    if (!burger || !menu) return;

    function openMenu() {
        burger.classList.add("active");
        menu.classList.add("active");
        document.body.classList.add("menu-open");
    }

    function closeMenu() {
        burger.classList.remove("active");
        menu.classList.remove("active");
        document.body.classList.remove("menu-open");
    }

    function toggleMenu(e) {
        e.stopPropagation();
        if (menu.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    // клік по бургеру
    burger.addEventListener("click", toggleMenu);

    // клік по пункту меню
    links.forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    // клік поза меню
    document.addEventListener("click", function (e) {
        if (
            menu.classList.contains("active") &&
            !menu.contains(e.target) &&
            !burger.contains(e.target)
        ) {
            closeMenu();
        }
    });

    // ESC для закриття (зручно на моб + десктоп)
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        document.body.classList.remove("menu-open");
    }
});
});