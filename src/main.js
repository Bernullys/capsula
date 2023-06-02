const ownDisignButton = document.querySelector(".own-design-button");
const squareMetersPage = document.querySelector(".squareMetersPage-container");
const ppalPage = document.querySelector(".first-page");
const backToPpalButton = document.getElementById("back-to-ppal-button");

ownDisignButton.addEventListener("click", goTosquareMeters);
backToPpalButton.addEventListener("click", goToPpalPage)

function goTosquareMeters () {
    squareMetersPage.classList.remove("inactive");
    ppalPage.classList.add("inactive");

};

function goToPpalPage () {
    ppalPage.classList.remove("inactive");
    squareMetersPage.add("inactive")
}

