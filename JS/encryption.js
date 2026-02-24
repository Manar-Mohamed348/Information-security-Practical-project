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
});