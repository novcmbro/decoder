const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)")
const localStorageKey = "novcmbro_decoder_theme"
const rootElement = document.documentElement

const theme = {
  preferred: undefined,
  db: () => localStorage.getItem(localStorageKey),
  update: undefined,
  init: undefined,
  change: undefined
}

theme.preferred = () => prefersLightTheme.matches ? "light" : "dark"

theme.update = () => rootElement.className = theme.db()

theme.init = () => {
  if (!theme.db()) {
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
  }
}

const { init, change } = theme
export default { init, change }
