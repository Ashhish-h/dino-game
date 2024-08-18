// board properties
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

// dinosaur properties

let dinoWidth = 88;
let dinoHeight = 90;
let dinoX = 58;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x: dinoX,
    y: dinoY,
    width: dinoWidth,
    height: dinoHeight
};

// cactus properties
let cactusArr = [];
let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactusImg1;
let cactusImg2;
let cactusImg3;

// adding physics
let veloX = -8;
let veloY = 0;
let g = .4;

let gameOver = false;
let score = 0;


// onloading function
window.onload = function () {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    // adding dinosour image
    dinoImg = new Image();
    dinoImg.src = "./img/dino.png";
    dinoImg.onload = function () {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    // adding cactus imgs
    cactusImg1 = new Image();
    cactusImg1.src = ".img/cactus1.png";

    cactusImg2 = new Image();
    cactusImg2.src = ".img/cactus2.png";

    cactusImg3 = new Image();
    cactusImg3.src = ".img/cactus3.png";

    requestAnimationFrame(update);
    setInterval(placeCactus, 1000);
    document.addEventListener("keydown", movDino);
}

function update() {
    requestAnimationFrame(update);
    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    veloY += g;
    dino.y = Math.min(dino.y + veloY, dinoY);
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    for (let i = 0; i < cactusArr.length; i++) {
        let cactus = cactusArr[i];
        cactus.x += veloX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);
    }


    context.fillStyle = "black";
    context.font = "20px courier";
    score++;
    context.fillText(score, 5, 20);
}