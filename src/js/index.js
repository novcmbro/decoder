import theme from "./theme.js"
import translation from "./translation.js"
import cryptographyEntries from "./cryptographyEntries.js"
import copyOutputText from "./copyOutputText.js"
import popup from "./popup.js"

document.addEventListener("DOMContentLoaded", () => {
  theme.init()
  translation.init()

  const themeLinkLight = document.querySelector("#theme-link-light")
  const themeLinkDark = document.querySelector("#theme-link-dark")
  const languageLinkEN = document.querySelector("#language-link-en")
  const languageLinkPT = document.querySelector("#language-link-pt")
  const inputField = document.querySelector("#input-field")
  const inputSectionClasses = inputField.parentElement.classList
  const inputFieldMessage = document.querySelector("#input-field-message")
  const initialInputFieldMessage = inputFieldMessage.textContent
  const outputField = document.querySelector("#output-field")
  const outputPlaceholder = document.querySelector("#output-placeholder")
  const encryptButton = document.querySelector("#encrypt-button")
  const decryptButton = document.querySelector("#decrypt-button")
  const copyButton = document.querySelector("#copy-button")
  const popupOkButton = document.querySelector("#popup-ok-button")

  const cryptography = (target) => {
    const entries = target === encryptButton ? cryptographyEntries : Object.fromEntries(Object.entries(cryptographyEntries).map(([letter, word]) => [word, letter]))
    const keys = Object.keys(entries).join("|")
    const result = inputField.value.replace(new RegExp(keys, "g"), result => entries[result])
    
    return { keys, result }
  }

  const validateField = (target) => {
    const validations = {
      empty: () => inputField.value.trim() || translation.get("input.validations.empty"),
      invalidChars: () => inputField.value.trim() && inputField.value.match(/^[a-z.,!?\s]+$/) || translation.get("input.validations.invalid_chars"),
      noCompatibleChars: () => inputField.value.match(cryptography(target).keys) || (target === encryptButton ? translation.get("input.validations.no_compatible_chars.encrypt") : translation.get("input.validations.no_compatible_chars.decrypt")),
      alreadyDecoded: () => outputField.value !== cryptography(target).result || (target === encryptButton ? translation.get("input.validations.already_decoded.encrypt") : translation.get("input.validations.already_decoded.decrypt"))
    }
    
    for (const [name, validation] of Object.entries(validations)) {
      const result = validation()

      if (typeof result === "string" && result !== inputField.value) {
        inputFieldMessage.textContent = result
        inputSectionClasses.add("input-field-is-invalid")
        name !== "alreadyDecoded" && (outputField.value = "")
        return false
      }
    }
    
    inputFieldMessage.textContent = initialInputFieldMessage
    inputSectionClasses.remove("input-field-is-invalid")
    return true
  }

  const handleCryptography = ({ target }) => {
    const isFieldValid = validateField(target)
    
    if (isFieldValid) {
      outputField.value = cryptography(target).result
      inputField.value = ""
    }

    outputPlaceholder.toggleAttribute("hidden", outputField.value)
    outputPlaceholder.toggleAttribute("aria-hidden", outputField.value)
  }

  const toggleInputFocusClass = ({ type }) => inputSectionClasses.toggle("input-field-has-focus", type === "focus")

  const clearInputFieldError = () => {
    if (inputSectionClasses.contains("input-field-is-invalid")) {
      inputFieldMessage.textContent = initialInputFieldMessage
      inputSectionClasses.remove("input-field-is-invalid")
    }
  }

  themeLinkLight.addEventListener("click", theme.change)
  themeLinkDark.addEventListener("click", theme.change)
  languageLinkEN.addEventListener("click", (e) => {
    translation.change(e)
    clearInputFieldError()
  })
  languageLinkPT.addEventListener("click", (e) => {
    translation.change(e)
    clearInputFieldError()
  })
  inputField.addEventListener("focus", toggleInputFocusClass)
  inputField.addEventListener("blur", toggleInputFocusClass)
  inputField.addEventListener("input", clearInputFieldError)
  encryptButton.addEventListener("click", handleCryptography)
  decryptButton.addEventListener("click", handleCryptography)
  copyButton.addEventListener("click", () => copyOutputText(outputField))
  popupOkButton.addEventListener("click", popup.close)
})
