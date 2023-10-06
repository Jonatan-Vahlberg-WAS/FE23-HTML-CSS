

const icons = ["G", "L", "F", "X"]

const iconContainer = document.querySelector(".social-icons")


const addIcons = () => {
    icons.forEach(icon => {
        const socialIcon = document.createElement("div")
        socialIcon.classList = "w-4 aspect-square bg-black rounded-sm text-white font-semibold text-xs box-border font-mono hover:bg-black/50 pointer"
        socialIcon.textContent = icon

        iconContainer.appendChild(socialIcon)
    })
}



onload = () => {
    addIcons()
}