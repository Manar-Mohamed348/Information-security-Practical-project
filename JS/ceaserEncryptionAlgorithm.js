const backButton = document.getElementById("backButton");
const plainText= document.getElementById("plainText");
const encryptButton = document.getElementById("encryptButton");
const shiftKey = document.getElementById("shiftKey");
const result = document.getElementById("result");

backButton.addEventListener("click", () => {
    window.location.href = "../HTML/main.html";
});

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

encryptButton.addEventListener("click", () => {
    const text = plainText.value.toUpperCase();
    const shift = parseInt(shiftKey.value);
    let encryptedText = "";
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet.includes(char)) {
            const charIndex = alphabet.indexOf(char);
            const newIndex = (charIndex + shift) % alphabet.length;
            encryptedText += alphabet[newIndex];
        } else {
            encryptedText += char;
        }
    }
    result.textContent = encryptedText;
});