const enUS = {
  description: "Encrypt and decrypt text easily with Decoder. Type your text, choose a method, and get the result instantly!",
  keywords: "decoder, encrypt, decrypt, online tool, text encoding, cryptography, Oracle Next Education, ONE, Alura",
  input: {
    label: "Input",
    placeholder: "Type your text",
    message: {
      icon: "Alert",
      text: "Only lowercase letters with no accent (a-z), dots (.), commas (,), exclamation (!) and question marks (?) are accepted.",
      success: {
        encrypt: "Text successfully encrypted!",
        decrypt: "Text successfully decrypted!"
      }
    },
    encrypt: "Encrypt",
    decrypt: "Decrypt",
    validations: {
      empty: "Text cannot be empty.",
      invalid_chars: "Invalid text. Only lowercase letters with no accent (a-z), dots (.), commas (,), exclamation (!) and question marks (?) are accepted.",
      no_compatible_chars: {
        encrypt: "Failed to encrypt. Text does not have enough compatible letters.",
        decrypt: "Failed to decrypt. Text does not have enough compatible letters."
      },
      already_decoded: {
        encrypt: "Text is already encrypted.",
        decrypt: "Text is already decrypted."
      }
    }
  },
  output: {
    label: "Output",
    placeholder: {
      image: "Girl on computer",
      title: "No text found",
      description: "Type a text you wish to encrypt or decrypt"
    },
    copy: {
      text: "Copy",
      success: "Text copied to clipboard!",
      error: "Something went wrong while copying. Please, try again.",
      unsupported: "Unfortunately, copy functionality is not available on your browser."
    }
  },
  footer: {
    language: {
      label: "Change language",
      icon: "Globe",
      alert: "Language changed to English."
    },
    credits: "made by",
    theme: {
      label: "Change theme",
      light: {
        text: "Light theme",
        icon: "Sun",
        alert: "Theme changed to light."
      },
      dark: {
        text: "Dark theme",
        icon: "Moon",
        alert: "Theme changed to dark."
      }
    }
  }
}

export default enUS
