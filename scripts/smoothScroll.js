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

const leftTiles = document.querySelectorAll("article.tile.left");
leftTiles.forEach(e => setLeftTileListeners(e));

const rightTiles = document.querySelectorAll(".tile.right");
rightTiles.forEach(e => setRightTileListeners(e));

const lastTile = document.querySelector("article.tile.last");

lastTile.addEventListener('mouseover', (event) => {
    event.target.classList.remove("movesUp");
    event.target.classList.add("movesDown");
});

lastTile.addEventListener('mouseout', (event) => {
    event.target.classList.remove("movesDown");
    event.target.classList.add("movesUp");
});


function setLeftTileListeners(element) {
    element.addEventListener('mouseover', (event) => {
        event.target.classList.remove("leftToHomePosition");
        event.target.classList.add("leftMovesRight");
    });

    element.addEventListener('mouseout', (event) => {
        event.target.classList.remove("leftMovesRight");
        event.target.classList.add("leftToHomePosition");
    });
}

function setRightTileListeners(element) {
    element.addEventListener('mouseover', (event) => {
        event.target.classList.remove("rightToHomePosition");
        event.target.classList.add("rightMovesLeft");
    })

    element.addEventListener('mouseout', (event) => {
        event.target.classList.remove("rightMovesLeft");
        event.target.classList.add("rightToHomePosition");
    })
}