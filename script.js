menuButton = document.getElementById("selector")
body = document.querySelector("body")

menuButton.addEventListener("click", () => {
    body.classList.toggle("menu-main-open");
    console.log("toggled menu.")
})

// function menuSelect(element) {
    // element.preventDefault();
    // expandend = selector.attr("aria-expanded") == 'false' ? 'true' : 'false';
    // selector.attr("aria-expanded", expandend);
    // menu = $("#menu");
    // expandend = menu.attr("aria-hidden") == 'false' ? 'true' : 'false';
    // menu.attr("aria-hidden", expandend);
// }

