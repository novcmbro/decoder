import translation from "./translation.js"

const copyOutputText = (outputField) => {
  const message = {
    success: translation.get("output.copy.success"),
    error: translation.get("output.copy.error"),
    unsupported: translation.get("output.copy.unsupported")
  }
  
  if (navigator.clipboard) {
    navigator.clipboard.writeText(outputField.value)
      .then(() => alert(message.success))
      .catch(() => alert(message.error))
    return
  }

  if (document.execCommand("copy")) {
    outputField.select()
    const copy = document.execCommand("copy")
    copy ? alert(message.success) : alert(message.error)
    return
  }
  
  alert(message.unsupported)
}

export default copyOutputText
