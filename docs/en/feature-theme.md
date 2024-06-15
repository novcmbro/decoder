# Decoder - 2. Features
## 2.1. Theme
### theme.js
The initial theme value is detected through `prefers-color-scheme` media query and saved locally in the browser in `localStorage`. If the browser does not support this media query, the initial theme will be light. Based on the theme value, a CSS class, either `light` or `dark`, is added into the root document element to properly activate the theme. By clicking on either the light or dark theme element, both the theme value in storage and the class are updated.

### Method `theme`
- `theme.name`: Returns the name of the locally stored theme.
- `theme.preferred`: Compares the browser's theme through `prefers-color-scheme` and returns the theme name accordingly.
- `theme.update`: Adds the corresponding CSS class for the theme to the root element of the document. Swaps the class if the theme changes. Updates URLs of images unique to light or dark mode.
  - `updateURL`: Sub-method that replaces strings to adjust part of URLs based on the selected theme.
- `theme.change`: Changes the theme only if the selected theme is different from the currently applied one, updating the value in storage and the CSS class. Alerts screen readers about the change. Briefly adds `transition` class for smoother color transitions.
- `theme.init`: Adds the theme value to storage if it doesn't exist. Monitors changes in browser's theme to update accordingly. Attaches `theme.change` method to elements responsible for theme switching.

<br>

### [🡨 previous](/docs/en/features.md) • [next 🡪](/docs/en/feature-translation.md)
