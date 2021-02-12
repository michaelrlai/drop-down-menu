document.addEventListener("mousedown", (e) => {
    console.log(e.target);
    const menu = document.querySelector(".menu-container");
    if (e.target.matches(".open-menu")) {
        if (!menu.matches(".show-menu")) menu.classList.add("show-menu");
        else menu.classList.remove("show-menu");
    } else menu.classList.remove("show-menu");
});
