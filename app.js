const inputText = document.querySelector("#normalText");
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const image = document.querySelector("#image");
const outputText = document.querySelector("#outputText");
const btnCopy = document.querySelector("#copyText");
const logo = document.querySelector("#logo");

//--- Función de cifrado
function encryptText(text) {
  let encryptedText = text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
  return encryptedText;
}

// Event listener para el botón de cifrar
btnEncrypt.addEventListener("click", () => {
  const text = inputText.value;
  const encrypted = encryptText(text);
  outputText.value = encrypted;
  image.style.display = "none"; // Oculta la imagen
});

// Event listener para el botón de copiar texto
btnCopy.addEventListener("click", () => {
  const textToCopy = outputText.value;

  // Copiar el texto al portapapeles
  navigator.clipboard.writeText(textToCopy);

  // Mostrar un mensaje de confirmación
  alert("Texto copiado al portapapeles");
});

//--- Función de descifrado
function decryptText(text) {
  let decryptedText = text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
  return decryptedText;
}

// Event listener para el botón de descifrar
btnDecrypt.addEventListener("click", () => {
  const text = inputText.value;
  const decrypted = decryptText(text);
  outputText.value = decrypted;
  image.style.display = "none"; // Oculta la imagen
});

// Event listener para detectar mayúsculas, acentos y caracteres especiales
inputText.addEventListener("input", (event) => {
  const text = event.target.value;

  // Verifica si hay mayúsculas, acentos o caracteres especiales
  if (/[A-ZÁÉÍÓÚÑáéíóúñüç]/.test(text) || /[^a-z\s]/.test(text)) {
    alert(
      "Por favor, ingrese solo letras minúsculas sin acentos ni caracteres especiales."
    );
  }
});

// Event listener para el logo de Alura
logo.addEventListener("click", () => {
  // Limpiar los inputs y outputs
  inputText.value = "";
  outputText.value = "";

  // Scroll hacia el inicio de la página
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Asegurarse de que la imagen vuelva a mostrarse en desktop
  if (window.innerWidth >= 1025) {
    image.style.display = "block";
  }
});
