# Decoder - 2. Funcionalidades
## 2.5. Popup
### popup.js
Abre um pop-up personalizado para alertar ações importantes com base no parâmetro `message`, e oculta-o ao clicar no botão *ok*.

### Método `popup`
- `popup.toggleVisibility`: Alterna atributos `hidden` para mostrar ou ocultar pop-up.
- `popup.open`: Define a mensagem do popup com base no parâmetro `message`. Torna-o visível e focado.
- `popup.close`: Oculta o popup, retornando-o ao seu estado inicial.
- `popup.trapFocus`: Torna apenas os elementos do popup focáveis ​​para garantir acessibilidade na navegação pelo teclado.
- `popup.init`: Anexa `popup.trapFocus` ao elemento popup no evento de teclado, e `popup.close` ao botão *ok* do popup no evento de clique.

<br>

### [🡨 anterior](/docs/pt/feature-popup.md)
