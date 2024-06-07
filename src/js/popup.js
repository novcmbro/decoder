const popup = {
  toggleVisibility: undefined,
  open: undefined,
  close: undefined
}

popup.toggleVisibility = () => {
  const popupElement = document.querySelector("#popup")
  popupElement.toggleAttribute("hidden")
  popupElement.toggleAttribute("aria-hidden")
}

popup.open = (message) => {
  const popupMessage = document.querySelector("#popup-message")
  popupMessage.textContent = message
  popup.toggleVisibility()
}

popup.close = popup.toggleVisibility

const { open, close } = popup
export default { open, close }
