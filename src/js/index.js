import { cryptographyEntries } from "./cryptographyEntries.js"

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#input-field")
  const inputSectionClasses = inputField.parentElement.classList
  const inputFieldMessage = document.querySelector("#input-field-message")
  const initialInputFieldMessage = inputFieldMessage.textContent
  const outputField = document.querySelector("#output-field")
  const outputPlaceholder = document.querySelector("#output-placeholder")
  const encryptButton = document.querySelector("#encrypt-button")
  const decryptButton = document.querySelector("#decrypt-button")

  const cryptography = (target) => {
    const entries = target === encryptButton ? cryptographyEntries : Object.fromEntries(Object.entries(cryptographyEntries).map(([letter, word]) => [word, letter]))
    const keys = Object.keys(entries).join("|")
    const result = inputField.value.replace(new RegExp(keys, "g"), result => entries[result])
    
    return { keys, result }
  }

  const validateField = (target) => {
    const validations = {
      empty: () => inputField.value.trim() || "Text cannot be empty.",
      invalidChars: () => inputField.value.trim() && inputField.value.match(/^[a-z.,!?\s]+$/) || "Invalid text. Only lowercase letters with no accent (a-z), dots (.), commas (,), exclamation and question marks (! ?) are accepted.",
      noCompatibleChars: () => inputField.value.match(cryptography(target).keys) || (target === encryptButton ? "Failed to encrypt. Text does not have enough compatible letters." : "Failed to decrypt. Text does not have enough compatible letters."),
      alreadyDecoded: () => outputField.value !== cryptography(target).result || (target === encryptButton ? "Text is already encrypted." : "Text is already decrypted.")
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

  inputField.addEventListener("focus", toggleInputFocusClass)
  inputField.addEventListener("blur", toggleInputFocusClass)
  inputField.addEventListener("input", clearInputFieldError)
  encryptButton.addEventListener("click", handleCryptography)
  decryptButton.addEventListener("click", handleCryptography)
})
