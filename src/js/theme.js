const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)")
const localStorageKey = "novcmbro_decoder_theme"
const rootElement = document.documentElement

const theme = {
  name: () => localStorage.getItem(localStorageKey),
  preferred: undefined,
  update: undefined,
  init: undefined,
  change: undefined
}

theme.preferred = () => prefersLightTheme.matches ? "light" : "dark"

theme.update = () => {
  rootElement.classList.toggle("light", theme.name() === "light")
  rootElement.classList.toggle("dark", theme.name() === "dark")
}

theme.init = () => {
  if (!theme.name()) {
    localStorage.setItem(localStorageKey, theme.preferred())
  }

  prefersLightTheme.addEventListener("change", () => {
    localStorage.setItem(localStorageKey, theme.preferred())
    theme.update()
  })
  
  theme.update()
}

theme.change = ({ currentTarget }) => {
  const themeName = currentTarget.classList[1]

  if (rootElement.className !== themeName) {
    localStorage.setItem(localStorageKey, themeName)
    theme.update()
    rootElement.classList.add("transition")
    setTimeout(() => rootElement.classList.remove("transition"), 500)
  }
}

const { init, change } = theme
export default { init, change }
