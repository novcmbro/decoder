# Decoder - 2. Features
## 2.4. Copy
### copy.js
Copies the encrypted or decrypted output text to clipboard and alerts if copy was successful or failed.

### Method `copy`
- `copy.handle`: Copies the output text to clipboard using `navigator.clipboard.writeText` or `execCommand("copy")` method. Fails as unsupported feature if neither methods are available in browser. Opens a popup alert with success, error or unsupported message.
  - `message`: Variable that contains messages for each result case.
- `copy.init`: Attaches `copy.handle` to copy button on click event.

<br>

### [🡨 previous](/docs/en/feature-cryptography.md) • [next 🡪](/docs/en/feature-popup.md)
