document.addEventListener("mousedown", (e) => {
    if (e.target.matches(".open-menu")) {
        const menu = document.querySelector(".menu-container");
        if (!menu.matches(".show-menu")) menu.classList.add("show-menu");
        else menu.classList.remove("show-menu");
    }
});
