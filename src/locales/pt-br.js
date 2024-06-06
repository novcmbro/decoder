const ptBR = {
  description: "Criptografar e descriptografar texto facilmente com Decoder. Digite seu texto, escolha um método, e tenha o resultado instantaneamente!",
  keywords: "decoder, criptografar, descriptografar, ferramenta online, codificação de texto, criptografia, Oracle Next Education, ONE, Alura",
  input: {
    label: "Entrada",
    placeholder: "Digite seu texto",
    message: {
      icon: "Alerta",
      text: "Apenas letras minúsculas sem acento (a-z), pontos (.), vírgulas (,), pontos de exclamação (!) e interrogação (?) são aceitos."
    },
    encrypt: "Criptografar",
    decrypt: "Descriptografar",
    validations: {
      empty: "Texto não pode estar vazio.",
      invalid_chars: "Texto inválido. Apenas letras minúsculas sem acento (a-z), pontos (.), vírgulas (,), pontos de exclamação (!) e interrogação (?) são aceitos.",
      no_compatible_chars: {
        encrypt: "Falha ao criptografar. Texto não possui letras compatíveis suficientes.",
        decrypt: "Falha ao descriptografar. Texto não possui letras compatíveis suficientes."
      },
      already_decoded: {
        encrypt: "Texto já está criptografado.",
        decrypt: "Texto já está descriptografado."
      }
    }
  },
  output: {
    label: "Saída",
    placeholder: {
      image: "Garota no computador",
      title: "Nenhum texto encontrado",
      description: "Digite um texto que você deseja criptografar ou descriptografar"
    },
    copy: {
      text: "Copiar",
      success: "Texto copiado para a área de transferência!",
      error: "Algo deu errado durante a cópia. Por favor, tente novamente.",
      unsupported: "Infelizmente, a funcionalidade de cópia não está disponível no seu navegador."
    }
  },
  footer: {
    language: {
      label: "Mudar idioma",
      icon: "Globo"
    },
    credits: "feito com 💜 por",
    theme: {
      label: "Mudar tema",
      light: {
        text: "Tema claro",
        icon: "Sol"
      },
      dark: {
        text: "Tema escuro",
        icon: "Lua"
      }
    }
  }
}

export default ptBR
