
const headerFoldOutMenu = document.querySelector(".nav-list-fold-out-menu")

const menuButton = document.querySelector(".nav-list-menu")
const onClick = (event) => {
    event.target.classList.toggle("nav-list-menu--open")
    headerFoldOutMenu.classList.toggle("nav-list-fold-out-menu--open")
    //set text to "x" if menu is open, otherwise set it to "☰"
    if (event.target.classList.contains("nav-list-menu--open")) {
        event.target.innerText = "x"
    }
    else {
        event.target.innerText = "☰"
    }
    
}
menuButton.addEventListener("click", onClick)