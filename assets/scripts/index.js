const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Images

const bgImg = new Image();
bgImg.src = "./images/map-mundi.png";

const shipSy = new Image();
shipSy.src = "./images/seringa-01.png";

const inva1 = new Image();
inva1.src = "./images/virus-02.png";

const inva2 = new Image();
inva2.src = "./images/virus-03.png";

const inva3 = new Image();
inva3.src = "./images/virus-04.png";

const gotinha = new Image();
gotinha.src = "./images/zegotinha.png";

// eventos
function startGame() {
  const backgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width,
    canvas.height,
    bgImg
  );
  const player = new Objects(400, 490, 180, 80, shipSy);

  const game = new Game(backgroundImage, player);

  game.start();

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.player.speedX = -3;
    } else if (event.code === "ArrowRight") {
      game.player.speedX = 3;
    }
  });

  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
  });
}

window.onload = () => {
  /*document.getElementById("start-button").onclick = () => {
    startGame();

  };*/

  startGame();
};
