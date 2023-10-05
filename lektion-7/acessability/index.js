//Color switcher
const body = document.querySelector("body")


const themes = [
    "light",
    "dark",
    "colorblind"
]

const switchTheme = (e) => {
    console.log("BoDY", body)
    if(body) {
        const currentIndex = themes.findIndex((theme) => {
            const currentTheme = `theme--${theme}`
            return body.classList.contains(currentTheme)
        })
        const nextIndexOrZero = (currentIndex + 1) % themes.length;
        const newTheme = themes[nextIndexOrZero]
        body.classList = `theme--${newTheme}`
        //set the text of the button to the new theme
        e.target.textContent = newTheme
    }
}

const colorSwitcher = document.createElement("button")
colorSwitcher.classList = "color-switcher"
colorSwitcher.addEventListener("click", switchTheme)




body.appendChild(colorSwitcher)

onload = () => {
    body.classList = `theme--${themes[0]}`
    colorSwitcher.textContent = themes[0]
}

