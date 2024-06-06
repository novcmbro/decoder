import enUS from "../locales/en-us.js"
import ptBR from "../locales/pt-br.js"

const languages = { en: enUS, pt: ptBR }
const localStorageKey = "novcmbro_decoder_language"
const separator = { nesting: ".", word: "_" }

export const translation = (key) => {
  const nestedId = key.split(separator.nesting)
  const language = localStorage.getItem(localStorageKey)
  let text = languages[language]

  for (let i = 0; i < nestedId.length; i++) {
    const key = nestedId[i]
    text = text && text[key]
  }

  return text
}

const translateElements = () => {
  document.querySelectorAll("meta[name='description']").forEach(description => description.content = translation("description"))
  document.querySelector("meta[name='keywords']").content = translation("keywords")
  document.querySelector("#input-field").placeholder = translation("input.placeholder")
  document.querySelector("#output-placeholder-image").alt = translation("output.placeholder.image")
}

export const initTranslation = () => {
  const navigatorLanguage = navigator.language.split("-")[0].toLowerCase()
  const navigatorOrFallbackLanguage = (navigatorLanguage === "en" || navigatorLanguage === "pt") ? navigatorLanguage : "en"
  const language = localStorage.getItem(localStorageKey)
  const elements = document.querySelectorAll("[data-translation]")
  
  if (!language) {
    localStorage.setItem(localStorageKey, navigatorOrFallbackLanguage)
    window.location.href = "/"
  }
  
  document.documentElement.lang = language
  document.querySelector("meta[http-equiv='Content-Language']").content = language
  
  for (const element of elements) {
    const id = element.dataset.translation
    const hasId = !!id.trim()
    const hasInvalidId = hasId && !id.match(`^[a-z${separator.nesting}${separator.word}]+$`)

    if (hasId && !hasInvalidId) {
      element.ariaLive = "polite"
      element.textContent = translation(id)
    }
  }

  translateElements()
}

export const changeLanguage = ({ target }) => {
  localStorage.setItem(localStorageKey, target.textContent.toLowerCase())
  initTranslation()
  translateElements()
}
