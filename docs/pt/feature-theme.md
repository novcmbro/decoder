# Decoder - 2. Funcionalidades
## 2.1. Tema
### theme.js
O valor inicial do tema é detectado através da *media query* `prefers-color-scheme` e salvo localmente no navegador em `localStorage`. Caso o navegador não suporte tal *media query*, o tema inicial será claro. Com base no valor do tema é inserida uma classe CSS, `light` ou `dark`, no elemento raiz do documento para que o tema seja devidamente ativado. Através do clique no elemento de tema claro ou escuro, ambos o valor do tema no armazenamento e a classe são atualizados.

### Método `theme`
- `theme.name`: Retorna o nome do tema armazenado localmente.
- `theme.preferred`: Compara o tema do navegador através de `prefers-color-scheme` e retorna o nome do tema de acordo.
- `theme.update`: Adiciona a classe CSS correspondente ao tema ao elemento raiz do documento. Troca a classe caso o tema mude. Atualiza URLs de imagens exclusivas do modo claro ou escuro.
  - `updateURL`: Submétodo que substitui *strings* para corrigir parte de URLs de acordo com o tema selecionado.
- `theme.change`: Muda o tema somente se o selecionado não for o mesmo já aplicado, atualizando o valor no armazenamento e a classe CSS. Alerta leitores de tela sobre a mudança. Adiciona brevemente classe `transition` para as cores alterarem suavemente.
- `theme.init`: Adiciona o valor do tema no armazenamento caso não exista. Assiste mudanças no tema do navegador para atualizar de acordo. Anexa o método `theme.change` aos elementos responsáveis pela troca de tema.

<br>

### [🡨 anterior](/docs/pt/features.md) • [próximo 🡪](/docs/pt/feature-translation.md)
