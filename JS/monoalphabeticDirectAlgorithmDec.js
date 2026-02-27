const backButton = document.getElementById("backButton");
const Ciper = document.getElementById("Ciper");
const decryptButton = document.getElementById("decryptButton");
const result = document.getElementById("result");
backButton.addEventListener("click", () => {
    window.location.href = "../HTML/decryptionPage.html";
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
const cipherAlphabet = {
    "Q": 0, "W": 1, "E": 2, "R": 3,
    "T": 4, "Y": 5, "U": 6, "I": 7,
    "O": 8, "P": 9, "A": 10, "S": 11,
    "D": 12, "F": 13, "G": 14, "H": 15,
    "J": 16, "K": 17, "L": 18, "Z": 19,
    "X": 20, "C": 21, "V": 22, "B": 23,
    "N": 24, "M": 25
}
decryptButton.addEventListener("click", () => {
    const Cipertext = Ciper.value.toUpperCase();
    let plainResult = "";
    for (let i = 0; i < Cipertext.length; i++) {
        const char = Cipertext[i];
        if (cipherAlphabet[char] !== undefined) {
            const index = cipherAlphabet[char];
            plainResult += Object.keys(alphabet).find(key => alphabet[key] === index);
        }
        else {
            plainResult += char;
        }
    }
    result.textContent = plainResult;
});
//   ITSSG ZIOL OL Q DGFGQSHIQWTZOE EOHITK TBQDHST => HElLO THIS IS A MONOALPHABETIC CIPHER EXAMPLE
