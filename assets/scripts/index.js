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

const sound = new Audio();
sound.src = "./sounds/Medicine.mp3";
sound.volume = 0.1;

const audioShoot = new Audio();
audioShoot.src = "./sounds/shoot.ogg";
audioShoot.volume = 0.1;

const audioExplosion = new Audio();
audioExplosion.src = "./sounds/explosion.wav";
audioExplosion.volume = 0.1;

const imagesInvas = [inva1, inva2, inva3];
const font = "DotGothic16";

// eventos
function startGame() {
  const backgroundImage = new BackgroundImage(
    0,
    0,
    canvas.width + 20,
    canvas.height,
    bgImg
  );

  const player = new Objects(400, 490, 120, 60, shipSy);

  const game = new Game(backgroundImage, player);

  game.start();

  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
      game.player.speedX = -3;
    } else if (event.code === "ArrowRight") {
      game.player.speedX = 3;
    } else if (event.code === "Space") {
      audioShoot.play();
      let shooti = new Shooter(player.x + 60, player.y, 10, 20, shoot);
      shooti.speedY -= 2;

      game.shoots.push(shooti);
    }
  });

  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
  });
}
function draw() {
  ctx.font = "70px DotGothic16";
  ctx.fillStyle = "#E6E6E6";
  ctx.fillText("Corona-Invaders", 260, 100);

  ctx.font = "30px DotGothic16";
  ctx.fillStyle = "#D8D8D8";
  ctx.fillText("Press 'Enter' to play", 100, 350);

  ctx.font = "20px DotGothic16";
  ctx.fillStyle = "#D8D8D8";
  ctx.fillText("Press 'Space' to fire", 100, 400);

  ctx.font = "20px DotGothic16";
  ctx.fillStyle = "#D8D8D8";
  ctx.fillText("Press 'Left' to go left", 100, 430);

  ctx.font = "20px DotGothic16";
  ctx.fillStyle = "#D8D8D8";
  ctx.fillText("Press 'Right' to go right", 100, 460);

  ctx.drawImage(gotinha, 600, 200);
}

window.onload = () => {
  draw();
  document.addEventListener("keydown", (event) => {
    if (event.code === "Enter") {
      startGame();
      sound.play();
    }
  });
};
