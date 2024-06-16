# Decoder - 2. Funcionalidades
## 2.4. Cópia
### copy.js
Copia o texto de saída criptografado ou descriptografado para a área de transferência e alerta se a cópia foi bem-sucedida ou falhou.

### Método `copy`
- `copy.handle`: Copia o texto de saída para a área de transferência usando o método `navigator.clipboard.writeText` ou `execCommand("copy")`. Falha como recurso não suportado se nenhum dos métodos estiverem disponíveis no navegador. Abre um alerta popup com mensagem de sucesso, erro ou não suportado.
  - `message`: Variável que contém mensagens para cada caso de resultado.
- `copy.init`: Anexa `copy.handle` ao botão de cópia no evento de clique.

<br>

### [🡨 anterior](/docs/pt/feature-cryptography.md)
