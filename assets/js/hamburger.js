function openHamburger() {
    let menu = document.getElementsByClassName('hamburger')[0].getElementsByClassName('menu')[0]
    menu.style.display = "block"
}

function closeHamburger(event) {
    if (event.target.parentElement.className !== "hamburger") {
        let menu = document.getElementsByClassName('hamburger')[0].getElementsByClassName('menu')[0]
        menu.style.display = "none";

    }
}