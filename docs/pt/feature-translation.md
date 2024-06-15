# Decoder - 2. Funcionalidades
## 2.2. Tradução
### translation.js
O valor inicial do código do idioma é detectado através de `navigator.language` e salvo localmente no navegador em `localStorage`. Se o navegador não suportar o método `navigator`, o idioma inicial será Inglês. O código armazenado é usado para acessar o objeto `languages`, que contém textos de traduções do diretório [`/locales`](/src/locales). As traduções são inseridas nos elementos do documento pelo atributo `data-translation`, que contém a(s) chave(s) para acessar o texto correspondente.

### Método `translation`
- `translation.language`: Retorna o código do idioma armazenado localmente.
- `translation.get`: Retorna o texto de tradução baseado na chave de tradução passada como parâmetro. Procura pelo texto no objeto de tradução atual. Se a tradução for aninhada, a chave será repartida pelo caractere ponto `.` e em *loop* acessará o texto.
- `translation.translateElements`: Seleciona elementos do documento e traduz suas propriedades, como as de metadados e acessibilidade.
- `translation.change`: Muda idioma somente se o idioma selecionado é diferente do atual. Atualiza o código do idioma armazenado e reexecuta métodos para atualizar textos. Alerta leitores de tela sobre a mudança.
- `translation.init`: Obtém o idioma preferido do navegador, armazena-o localmente e atualiza a página para aplicar a tradução. Atualiza metadados *lang*. Seleciona todos os elementos do documento que contém o atributo `data-translation` e define seu texto de tradução. Reexecuta métodos para atualizar textos. Anexa o método `translation.change` aos elementos responsáveis pela troca de idioma.

<br>

### [🡨 anterior](/docs/pt/feature-theme.md)
