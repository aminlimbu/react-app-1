window.onload = function () {
    const navList = document.querySelector("#list-items");

    navList.addEventListener("mouseleave", () => {
        navList.classList.remove("nav-list-active");
        navList.classList.add("nav-list");
    });
};
