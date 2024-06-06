import enUS from "../locales/en-us.js"
import ptBR from "../locales/pt-br.js"

const languages = { en: enUS, pt: ptBR }
const localStorageKey = "novcmbro_decoder_language"
const separator = { nesting: ".", word: "_" }

const translation = {
  language: () => localStorage.getItem(localStorageKey),
  get: undefined,
  translateElements: undefined,
  init: undefined,
  change: undefined
}

translation.get = (key) => {
  const nestedId = key.split(separator.nesting)
  let text = languages[translation.language()]

  for (let i = 0; i < nestedId.length; i++) {
    const key = nestedId[i]
    text = text && text[key]
  }

  return text
}

translation.translateElements = () => {
  document.querySelectorAll("meta[name='description']").forEach(description => description.content = translation.get("description"))
  document.querySelector("meta[name='keywords']").content = translation.get("keywords")
  document.querySelector("#input-field").placeholder = translation.get("input.placeholder")
  document.querySelector("#output-placeholder-image").alt = translation.get("output.placeholder.image")
}

translation.init = () => {
  const navigatorLanguage = navigator.language.split("-")[0].toLowerCase()
  const navigatorOrFallbackLanguage = (navigatorLanguage === "en" || navigatorLanguage === "pt") ? navigatorLanguage : "en"
  const elements = document.querySelectorAll("[data-translation]")
  
  if (!translation.language()) {
    localStorage.setItem(localStorageKey, navigatorOrFallbackLanguage)
    window.location.href = "/"
  }
  
  document.documentElement.lang = translation.language()
  document.querySelector("meta[http-equiv='Content-Language']").content = translation.language()
  
  for (const element of elements) {
    const id = element.dataset.translation
    const hasId = !!id.trim()
    const hasInvalidId = hasId && !id.match(`^[a-z${separator.nesting}${separator.word}]+$`)

    if (hasId && !hasInvalidId) {
      element.ariaLive = "polite"
      element.textContent = translation.get(id)
    }
  }

  translation.translateElements()
}

translation.change = ({ target }) => {
  localStorage.setItem(localStorageKey, target.textContent.toLowerCase())
  translation.init()
  translation.translateElements()
}

const { language, translateElements, ...methods } = translation
export default methods
