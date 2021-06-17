class Game {
  constructor(background, player) {
    this.background = background;
    this.player = player;
    this.allInvaders = [];
    this.shoots = [];
    this.frames = 0;
    this.animationId;
  }

  start = () => {
    this.updateGame();
  };

  updateGame = () => {
    this.clear();

    this.background.draw();
    this.player.updatePosition();
    this.player.draw();
    this.createInvaders();
    this.updateInvaders();

    this.updateShootis();

    this.checkExplosion();
    this.updateMoveInvaders();
    this.frames++;

    this.animationId = requestAnimationFrame(this.updateGame);

    this.checkGameOver();
  };

  createInvaders = () => {
    if (this.frames == 0) {
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 10; i++) {
          let index = Math.floor(Math.random() * 3);
          let invaders = new Invaders(
            200 + 60 * i,
            70 + 60 * j,
            40,
            40,
            imagesInvas[index]
          );
          this.allInvaders.push(invaders);
        }
      }
    }
  };
  updateInvaders = () => {
    this.allInvaders.forEach((invader) => invader.draw());
  };

  updateMoveInvaders = () => {
    this.allInvaders.forEach((invader) => {
      console.log(invader.xAbsolute - invader.x);

      if (invader.xAbsolute - invader.x === -50) {
        invader.speedX = -1;
      } else if (invader.xAbsolute - invader.x === 50) {
        invader.speedX = 1;
      }

      invader.updatePosition();
    });
  };

  updateShootis = () => {
    this.shoots.forEach((shootis) => {
      shootis.updatePosition();
      shootis.draw();
    });
  };

  checkExplosion = () => {
    let arrAux = [];
    for (let i = 0; i < this.shoots.length; i++) {
      for (let j = 0; j < this.allInvaders.length; j++) {
        if (this.shoots[i].crashWith(this.allInvaders[j])) {
          this.allInvaders.splice(j, 1);
          arrAux.push(i);
          audioExplosion.play();
        }
      }
    }
    this.shoots = this.shoots.filter((el, i) => arrAux.indexOf(i) === -1);
  };

  checkGameOver = () => {
    if (this.allInvaders.length === 0) {
      cancelAnimationFrame(this.animationId);
      sound.pause();
      audioVacina.play();
      this.gameOver();
    }
  };

  gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1C1C1C";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(gotinhaHappy, 720, 310, 170, 240);

    ctx.fillStyle = "#DF01A5";
    ctx.font = "40px DotGothic16";
    ctx.fillText("Foi bom ganhar do virus, né?!", 200, 170);

    ctx.fillStyle = "#DF01A5";
    ctx.font = "40px DotGothic16";
    ctx.fillText("Se puder, fique em casa!", 210, 260);

    ctx.fillStyle = "#DF01A5";
    ctx.font = "40px DotGothic16";
    ctx.fillText("Vem vacina!", 210, 350);

    ctx.fillStyle = "#DF01A5";
    ctx.font = "20px DotGothic16";
    ctx.fillText("wee!", 790, 300);
  }

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
