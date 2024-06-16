# Decoder - 2. Funcionalidades
## 2.3. Criptografia
### cryptography.js
Criptografia substitui cada letra por seu termo correspondente e descriptografia substitui cada termo por sua letra correspondente. As entradas de letras e termos podem ser encontradas em [`cryptographyEntries.js`](/src/js/cryptographyEntries.js). Criptografia possui validações e alerta para informar texto de entrada inválido. Quando válido, o texto de entrada é limpo e o texto de saída é mostrado com opção de copiá-lo. Quando inválido, a saída é limpa e ocultada.

### Método `cryptography`
- `cryptography.data`: Retorna ambas chaves de criptografia e seu resultado de acordo com o botão `target` passado como parâmetro, que pode ser *criptografar* ou *descriptografar*. Reverte entradas se *descriptografar* for o alvo. Substitui o texto de entrada usando as chaves de criptografia como `regEx` do método `replace` para obter o texto de saída.
- `cryptography.validate`: Retorna `true` se o texto de entrada for válido ou `false` se inválido, de acordo com o botão do parâmetro `target`.
  - `validations`: Submétodo de condições, cada uma retornando `true` ou uma mensagem de erro. Define a mensagem de erro e alerta-a para o leitor de tela ou restaura a mensagem inicial e remove o alerta.
- `cryptography.submit`: Valida o texto de entrada de acordo com o botão do parâmetro `target`. Alterna os elementos da seção de saída para mostrar ou ocultar o texto resultante e a classe de erro CSS no elemento pai do campo de entrada. Se válido, alerta a mensagem de sucesso para o leitor de tela, limpa o texto de entrada e foca o botão copiar para copiar facilmente o texto de saída para a área de transferência.
- `cryptography.init`: Anexa `cryptography.submit` aos botões responsáveis ​​por criptografar e descriptografar.

### Método `input`
- `input.toggleSectionFocus`: Alterna classe CSS para estilos de foco no elemento pai do campo de entrada.
- `input.clearError`: Restaura mensagem inicial do campo de entrada e remove atributo de acessibilidade e classe CSS de erro do elemento pai.
- `input.set`: Anexa os métodos `input.toggleSectionFocus` e `input.clearError` a eventos do campo de entrada.

<br>

### [🡨 anterior](/docs/pt/feature-translation.md) • [próximo 🡪](/docs/pt/feature-copy.md)
