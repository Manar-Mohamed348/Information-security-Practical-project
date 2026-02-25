const backButton = document.getElementById("backButton");
const plainText = document.getElementById("plainText");
const encryptButton = document.getElementById("encryptButton");
const result = document.getElementById("result");
backButton.addEventListener("click", () => {
    window.location.href = "../HTML/encryptionPage.html";
});


const alphabet = {
    "A": 0, "B": 1, "C": 2, "D": 3,
    "E": 4, "F": 5, "G": 6, "H": 7,
    "I": 8, "J": 9, "K": 10, "L": 11,
    "M": 12, "N": 13, "O": 14, "P": 15,
    "Q": 16, "R": 17, "S": 18, "T": 19,
    "U": 20, "V": 21, "W": 22, "X": 23,
    "Y": 24, "Z": 25
}
const cipherAlphabet = "QWERTYUIOPASDFGHJKLZXCVBNM";

encryptButton.addEventListener("click", () => {
    const text = plainText.value.toUpperCase();
    let cipherResult = "";
    
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (alphabet[char] !== undefined) {
            const index = alphabet[char];
            cipherResult += cipherAlphabet[index];
        } else {
            cipherResult += char;
        }
    }
    result.textContent = cipherResult;
});