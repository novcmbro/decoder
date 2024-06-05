import { cryptographyEntries } from "./cryptographyEntries.js"

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.querySelector("#input-field")
  const outputField = document.querySelector("#output-field")
  const outputPlaceholder = document.querySelector("#output-placeholder")
  const encryptButton = document.querySelector("#encrypt-button")
  const decryptButton = document.querySelector("#decrypt-button")
  const inputFieldMessage = document.querySelector("#input-field-message")
  const initialInputFieldMessage = inputFieldMessage.textContent

  const cryptography = (target) => {
    const entries = target === encryptButton ? cryptographyEntries : Object.fromEntries(Object.entries(cryptographyEntries).map(([letter, word]) => [word, letter]))
    const keys = Object.keys(entries).join("|")
    const result = inputField.value.replace(new RegExp(keys, "g"), result => entries[result])
    
    return { keys, result }
  }

  const validations = {
    empty: () => inputField.value.trim() || "Text cannot be empty.",
    invalidChars: () => inputField.value.trim() && inputField.value.match(/^[a-z.,!?\s]+$/) || "Invalid text. Only lowercase letters with no accent (a-z), dots (.), commas (,), exclamation and question marks (! ?) are accepted.",
    noCompatibleChars: (target) => inputField.value.match(cryptography(target).keys) || (target === encryptButton ? "Failed to encrypt. Text does not have enough compatible letters." : "Failed to decrypt. Text does not have enough compatible letters."),
    alreadyDecoded: (target) => outputField.value !== cryptography(target).result || (target === encryptButton ? "Text is already encrypted." : "Text is already decrypted.")
  }

  const validateField = (target) => {
    for (const [name, validation] of Object.entries(validations)) {
      const result = validation(target)

      if (typeof result === "string" && result !== inputField.value) {
        inputFieldMessage.textContent = result
        inputField.parentElement.classList.add("input-field-is-invalid")
        name !== "alreadyDecoded" && (outputField.value = "")
        return false
      }
    }
    
    inputFieldMessage.textContent = initialInputFieldMessage
    inputField.parentElement.classList.remove("input-field-is-invalid")
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

  inputField.addEventListener("focus", () => inputField.parentElement.classList.add("input-field-has-focus"))
  inputField.addEventListener("blur", () => inputField.parentElement.classList.remove("input-field-has-focus"))
  encryptButton.addEventListener("click", handleCryptography)
  decryptButton.addEventListener("click", handleCryptography)
})
