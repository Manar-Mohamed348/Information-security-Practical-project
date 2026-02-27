const backButton = document.querySelector("#backButton");
const nextButton = document.querySelector("#nextButton");
const algorithmSelect = document.getElementById("algorithm");
console.log("Next button:", nextButton);
backButton.addEventListener("click", () => {
    window.location.href = "../HTML/main.html";
});
nextButton.addEventListener("click", () => {
    const selectedAlgorithm = algorithmSelect.value;
    if (selectedAlgorithm === "Ceaser") {
        window.location.href = "../HTML/ceaserEncryptionPage.html";
    }
    else if (selectedAlgorithm === "Monoalphabetic-Direct") {
        window.location.href = "../HTML/monoalphabeticDirectPageEnc.html";
    }
    else if (selectedAlgorithm === "Monoalphabetic-KeyWord") {
        window.location.href = "../HTML/monoalphabeticKeywordPageEnc.html";
    }
    else if (selectedAlgorithm === "Monoalphabetic-Columnar") {
        window.location.href = "../HTML/monoalphabeticColumnarPageEnc.html";
    }
    else if (selectedAlgorithm === "Monoalphabetic-Random") {
        window.location.href = "../HTML/monoalphabeticRandomPageEnc.html";
    }
});