import translation from "./translation.js"

const prefersLightTheme = window.matchMedia("(prefers-color-scheme: light)")
const localStorageKey = "novcmbro_decoder_theme"
const rootClasses = document.documentElement.classList

const theme = {
  name: () => localStorage.getItem(localStorageKey),
  preferred: undefined,
  update: undefined,
  change: undefined,
  init: undefined
}

theme.preferred = () => prefersLightTheme.matches ? "light" : "dark"

theme.update = () => {
  rootClasses.add(theme.name())
  const updateURL = (url) => theme.name() === "light" ? url.replace("dark", "light") : url.replace("light", "dark")

  rootClasses.toggle("light", theme.name() === "light")
  rootClasses.toggle("dark", theme.name() === "dark")
  document.querySelectorAll("meta[name='image']").forEach(image => image.content = updateURL(image.content))
  document.querySelectorAll("[name='favicon']").forEach(favicon => favicon.href = updateURL(favicon.href))
  const logo = document.querySelector("#logo")
  logo.src = updateURL(logo.src)
}

theme.change = ({ currentTarget }) => {
  const themeName = currentTarget.classList[1]

  if (!rootClasses.contains(themeName)) {
    localStorage.setItem(localStorageKey, themeName)
    theme.update()
    document.querySelector("#sr-alert").textContent = translation.get(`footer.theme.${themeName}.alert`)
    rootClasses.add("transition")
    setTimeout(() => rootClasses.remove("transition"), 500)
  }
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

  document.querySelectorAll("[name='theme-link']").forEach(themeLink => {
    themeLink.addEventListener("click", theme.change)
  })
}

const { init } = theme
export default { init }
