const copyOutputText = (outputField) => {
  const message = {
    success: "Text copied to clipboard!",
    error: "Something went wrong while copying. Please, try again.",
    unsupported: "Unfortunately, copy functionality is not available on your browser."
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
