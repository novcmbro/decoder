const popupElement = document.querySelector("#popup")
const popupButton = document.querySelector("#popup-ok-button")

const popup = {
  toggleVisibility: undefined,
  open: undefined,
  close: undefined,
  init: undefined
}

popup.toggleVisibility = () => {
  popupElement.toggleAttribute("hidden")
  popupElement.toggleAttribute("aria-hidden")
}

popup.open = (message) => {
  const popupMessage = document.querySelector("#popup-message")
  popupMessage.textContent = message
  popup.toggleVisibility()
  popupButton.focus()
}

popup.close = popup.toggleVisibility

popup.init = () => {
  const focusableElements = popupElement.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled])")
  const firstFocusableElement = focusableElements[0]
  const lastFocusableElement = focusableElements[focusableElements.length - 1]

  popupElement.addEventListener("keydown", (e) => {
    const isTabPressed = (e.key === "Tab" || e.keyCode === 9)

    if (!isTabPressed) {
      return
    }

    if (e.shiftKey && document.activeElement === firstFocusableElement) /* shift + tab */ {
      lastFocusableElement.focus()
      e.preventDefault()
    } else if (document.activeElement === lastFocusableElement) /* tab */ {
      firstFocusableElement.focus()
      e.preventDefault()
    }
  })

  popupButton.addEventListener("click", popup.close)
}

const { open, init } = popup
export default { open, init }
