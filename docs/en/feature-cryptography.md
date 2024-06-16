# Decoder - 2. Features
## 2.3. Cryptography
### cryptography.js
Encryption replaces each letter by its corresponding term and decryption replaces each term by its corresponding letter. Letters and terms entries can be found in [`cryptographyEntries.js`](/src/js/cryptographyEntries.js). Cryptography has validations and alert to inform invalid input text. When valid, input text is cleared and output text is shown with copy option. When invalid, the output is cleared and hidden.

### Method `cryptography`
- `cryptography.data`: Returns both cryptography keys and its result according to the `target` button passed as parameter, which can be *encrypt* or *decrypt*. Reverts entries if *decrypt* is the target. Replaces input text using the cryptography keys as `regEx` of `replace` method to get the output text.
- `cryptography.validate`: Returns `true` if input text is valid or `false` if invalid, according to `target` parameter's button.
  - `validations`: Sub-method of conditions, each one returning `true` or an error message. Sets the error message and alerts it to screen reader, or restores the initial message and removes the alert.
- `cryptography.submit`: Validates input text according to `target` parameter's button. Toggles output section elements to show or hide resulting text and CSS error class on input field's parent element. If valid, alerts success message to screen reader, clears input text and focus on copy button to easily copy output text to clipboard.
- `cryptography.init`: Attaches `cryptography.submit` to the buttons responsible for encrypt and decrypt.

### Method `input`
- `input.toggleSectionFocus`: Toggles CSS class for focus styles on input field parent element.
- `input.clearError`: Restores initial input field message and removes accessibility attribute and CSS error class from parent element.
- `input.set`: Attaches `input.toggleSectionFocus` and `input.clearError` methods to input field events.

<br>

### [🡨 previous](/docs/en/feature-translation.md) • [next 🡪](/docs/en/feature-copy.md)
