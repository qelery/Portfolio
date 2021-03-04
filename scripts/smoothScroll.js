const startButton = document.querySelector("#startButton");
const startElement = document.querySelector("#start");

const toTopButton = document.querySelector("#toTopButton");
const topElement = document.querySelector("#top");

startButton.addEventListener('click', () => {
   startElement.scrollIntoView({
       behavior: 'smooth'
   });
});

toTopButton.addEventListener('click', () => {
    topElement.scrollIntoView({
        behavior: 'smooth'
    });
});
