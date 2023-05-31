const mainButton1 = document.querySelector(".main-button1");
const title1 = document.querySelector(".title1-container");

mainButton1.addEventListener("click", togglePagina2);

function togglePagina2 () {
    title1.classList.toggle("inactive");
};

