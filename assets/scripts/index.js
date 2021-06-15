const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Images

const bgImg = new Image();
bgImg.src = "./images/map-mundi.jpeg";

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

const shoot = new Image();
shoot.src = "./images/shoot.png";

const imagesInvas = [inva1, inva2, inva3];
const font = "Russo one";

// eventos
function startGame() {
  const backgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width + 20,
    canvas.height,
    bgImg
  );
  const player = new Objects(400, 490, 130, 60, shipSy);

  const game = new Game(backgroundImage, player);

  game.start();

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.player.speedX = -3;
    } else if (event.code === "ArrowRight") {
      game.player.speedX = 3;
    } else if (event.code === "Space") {
      let shooti = new Shooter(player.x + 60, player.y, 20, 20, shoot);
      shooti.speedY -= 2;
      game.shoots.push(shooti);
    }
  });

  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
  });
}
function startScreen() {
  this.ctx.font = "20px Russo one";
  this.ctx.fillStyle = "black";
  this.ctx.fillText("hello world", 400, 400);
  this.ctx.draw();
}

window.onload = () => {
  document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      startGame();
    }
  });
};
