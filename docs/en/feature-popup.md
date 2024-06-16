# Decoder - 2. Features
## 2.5. Popup
### popup.js
Opens a custom popup to alert important actions based on `message` parameter, and hides it on *ok* button click.

### Method `popup`
- `popup.toggleVisibility`: Toggles `hidden` attributes to show or hide popup.
- `popup.open`: Sets popup's message based on `message` parameter. Makes it visible and focused.
- `popup.close`: Hides the popup, turning it back to its initial state.
- `popup.trapFocus`: Makes only popup's elements focusable to ensure accessibility on keyboard navigation.
- `popup.init`: Attaches `popup.trapFocus` to popup element on keyboard event, and `popup.close` to popup's *ok* button on click event.

<br>

### [🡨 previous](/docs/en/feature-copy.md)
