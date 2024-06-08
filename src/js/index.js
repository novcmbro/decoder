import theme from "./theme.js"
import translation from "./translation.js"
import { decoder, inputState } from "./cryptography.js"
import copy from "./copy.js"
import popup from "./popup.js"

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-enabled")
  theme.init()
  translation.init()
  decoder.init()
  inputState.init()
  copy.init()
  popup.init()
})
