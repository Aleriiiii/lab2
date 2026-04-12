document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".header-burger");
    const menu = document.querySelector(".mobile-menu");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});