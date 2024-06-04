const inputField = document.querySelector("#input-field")

// inputField.addEventListener("input", ({ target: field }) => {
//   field.parentElement.classList.toggle("input-field-is-invalid", field.value.trim())
// })

inputField.addEventListener("focus", ({ target: field }) => {
  field.parentElement.classList.add("input-field-has-focus")
})

inputField.addEventListener("blur", ({ target: field }) => {
  field.parentElement.classList.remove("input-field-has-focus")
})
