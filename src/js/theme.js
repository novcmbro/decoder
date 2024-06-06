const localStorageKey = "novcmbro_decoder_theme"
const rootElement = document.documentElement

const theme = {
  db: () => localStorage.getItem(localStorageKey),
  update: undefined,
  init: undefined,
  change: undefined
}

theme.update = () => rootElement.classList = theme.db()

theme.init = () => {
  const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)").matches

  if (!theme.db()) {
    localStorage.setItem(localStorageKey, prefersLightTheme ? "light" : "dark")
  }

  theme.update()
}

theme.change = ({ currentTarget }) => {
  const themeName = currentTarget.classList[1]
  localStorage.setItem(localStorageKey, themeName)
  theme.update()
}

const { init, change } = theme
export default { init, change }
