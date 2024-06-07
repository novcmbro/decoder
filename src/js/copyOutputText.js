import translation from "./translation.js"
import popup from "./popup.js"

const copyOutputText = (outputField) => {
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

export default copyOutputText
