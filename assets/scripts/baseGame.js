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
    this.allInvaders.forEach((invader, idx) => {
      if (invader.speedX < 2 && idx < 40) {
        invader.speedX += 1;
      } else if (invader.speedX > 2 && idx < 40) {
        invader.speedX -= 2;
      }
    });

    // this.allInvaders.map((invader) => {
    //   invader.updatePosition();
    //   this.speedX += 2;
    // });
  };

  updateShootis = () => {
    this.shoots.forEach((shootis) => {
      shootis.updatePosition();
      shootis.draw();
    });
  };

  checkExplosion = () => {
    for (let i = 0; i < this.shoots.length; i++) {
      for (let j = 0; j < this.allInvaders.length; j++) {
        if (this.shoots[i].crashWith(this.allInvaders[j])) {
          this.allInvaders.splice(j, 1);
          audioExplosion.play();
        }
      }
    }
  };

  checkGameOver = () => {
    if (this.allInvaders.length === 0) {
      cancelAnimationFrame(this.animationId);
      sound.pause();
      this.gameOver();
    }
  };

  gameOver() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "red";
    ctx.font = "60px Verdana";
    ctx.fillText("Stay safe!", 300, 200);
  }

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
