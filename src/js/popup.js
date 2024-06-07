const popup = {
  toggleVisibility: undefined,
  open: undefined,
  close: undefined,
  init: undefined
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

popup.init = () => {
  document.querySelector("#popup-ok-button").addEventListener("click", popup.close)
}

const { open, init } = popup
export default { open, init }
