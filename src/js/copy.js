import translation from "./translation.js"
import popup from "./popup.js"

const copy = {
  handle: undefined,
  init: undefined
}

copy.handle = () => {
  const outputField = document.querySelector("#output-field")

  const message = {
    success: translation.get("output.copy.success"),
    error: translation.get("output.copy.error"),
    unsupported: translation.get("output.copy.unsupported")
  }
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(outputField.value)
      .then(() => popup.open(message.success))
      .catch(() => popup.open(message.error))
    return
  }

  if (document.execCommand("copy")) {
    outputField.select()
    const copy = document.execCommand("copy")
    copy ? popup.open(message.success) : popup.open(message.error)
    return
  }
  
  popup.open(message.unsupported)
}

copy.init = () => {
  document.querySelector("#copy-button").addEventListener("click", copy.handle)
}

const { init } = copy
export default { init }
