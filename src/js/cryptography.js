import translation from "./translation.js"
import cryptographyEntries from "./cryptographyEntries.js"

const inputField = document.querySelector("#input-field")
const inputSectionClasses = inputField.parentElement.classList
const inputFieldMessage = document.querySelector("#input-field-message")
const outputField = document.querySelector("#output-field")
const outputPlaceholder = document.querySelector("#output-placeholder")
const encryptButton = document.querySelector("#encrypt-button")
const decryptButton = document.querySelector("#decrypt-button")
const copyButton = document.querySelector("#copy-button")
const screenReaderAlert = document.querySelector("#sr-alert")

const cryptography = {
  data: undefined,
  validate: undefined,
  submit: undefined,
  init: undefined
}

const input = {
  toggleSectionFocus: undefined,
  clearError: undefined,
  set: undefined
}

cryptography.data = (target) => {
  const entries = target === encryptButton ? cryptographyEntries : Object.fromEntries(Object.entries(cryptographyEntries).map(([letter, word]) => [word, letter]))
  const keys = Object.keys(entries).join("|")
  const result = inputField.value.replace(new RegExp(keys, "g"), result => entries[result])
  
  return { keys, result }
}

cryptography.validate = (target) => {
  const validations = {
    empty: () => inputField.value.trim() || translation.get("input.validations.empty"),
    invalidChars: () => inputField.value.trim() && inputField.value.match(/^[a-z.,!?\s]+$/) || translation.get("input.validations.invalid_chars"),
    noCompatibleChars: () => inputField.value.match(cryptography.data(target).keys) || (target === encryptButton ? translation.get("input.validations.no_compatible_chars.encrypt") : translation.get("input.validations.no_compatible_chars.decrypt")),
    alreadyDecoded: () => outputField.value !== cryptography.data(target).result || (target === encryptButton ? translation.get("input.validations.already_decoded.encrypt") : translation.get("input.validations.already_decoded.decrypt"))
  }
  
  for (const [name, validation] of Object.entries(validations)) {
    const result = validation()

    if (typeof result === "string" && result !== inputField.value) {
      inputFieldMessage.setAttribute("role", "alert")
      inputFieldMessage.textContent = result
      name !== "alreadyDecoded" ? (outputField.value = "") : copyButton.focus()
      return false
    }
  }
  
  inputFieldMessage.removeAttribute("role")
  inputFieldMessage.textContent = translation.get("input.message.text")
  return true
}

cryptography.submit = ({ target }) => {
  const isFieldValid = cryptography.validate(target)
  
  if (isFieldValid) {
    outputField.value = cryptography.data(target).result
    screenReaderAlert.textContent = translation.get(`input.message.success.${target.id.includes("encrypt") ? "encrypt" : "decrypt"}`)
    copyButton.focus()
    inputField.value = ""
  }

  inputSectionClasses.toggle("input-field-is-invalid", !isFieldValid)
  outputPlaceholder.toggleAttribute("hidden", outputField.value)
  outputPlaceholder.toggleAttribute("aria-hidden", outputField.value)
}

cryptography.init = () => {
  encryptButton.addEventListener("click", cryptography.submit)
  decryptButton.addEventListener("click", cryptography.submit)
}

input.toggleSectionFocus = ({ type }) => {
  inputSectionClasses.toggle("input-field-has-focus", type === "focus")
}

input.clearError = () => {
  if (inputSectionClasses.contains("input-field-is-invalid")) {
    inputFieldMessage.removeAttribute("role")
    inputFieldMessage.textContent = translation.get("input.message.text")
    inputSectionClasses.remove("input-field-is-invalid")
  }
}

input.set = () => {
  inputField.addEventListener("focus", input.toggleSectionFocus)
  inputField.addEventListener("blur", input.toggleSectionFocus)
  inputField.addEventListener("input", input.clearError)
}

const { init } = cryptography
const { clearError, set } = input 
export const decoder = { init }
export const inputState = { clearError, init: set }
