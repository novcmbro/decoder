# Decoder - 2. Features
## 2.2. Translation
### translation.js
The initial language code value is detected through `navigator.language` and saved locally in the browser in `localStorage`. If the browser does not support `navigator` method, the initial language will be English. The stored code is used to access `languages` object, which contains translations texts from [`/locales`](/src/locales) directory. The translations are inserted into document elements by `data-translation` attribute, which contains the key(s) to access the corresponding text.

### Method `translation`
- `translation.language`: Returns the locally stored language code.
- `translation.get`: Returns the translation text based on the translation key passed as a parameter. It searches for the text in the current translation object. If nested translation, the key is slitted by dot (`.`) character and looped to access the text.
- `translation.translateElements`: Selects document elements and translate its properties, such as metadata and accessibility ones.
- `translation.change`: Changes language only if the selected language is different from the current one. Updates the stored language code and rerun methods to update texts. Alerts screen readers about the change.
- `translation.init`: Gets the preferred browser's language, stores it locally and refreshes the page to apply the translation. Updates *lang* metadata. Selects all document elements that contains `data-translation` attribute and set its translation text. Rerun methods to update texts. Attaches `translation.change` method to elements responsible for language switching.

<br>

### [🡨 previous](/docs/en/feature-theme.md)
