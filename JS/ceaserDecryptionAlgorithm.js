const backButton = document.getElementById("backButton");
const Cipher = document.getElementById("Cipher");
const decryptButton = document.getElementById("decryptButton");
const shiftKey = document.getElementById("shiftKey");
const result = document.getElementById("result");

backButton.addEventListener("click", () => {
    window.location.href = "../HTML/decryptionPage.html";
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

decryptButton.addEventListener("click", () => {
    const text = Cipher.value.toUpperCase();
    const shift = parseInt(shiftKey.value);
    let decryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const newIndex = (charIndex - shift) % alphabet.length;
            decryptedText += alphabet[newIndex];
        } else {
            decryptedText += char;
        }
    }
    result.textContent = decryptedText;
});