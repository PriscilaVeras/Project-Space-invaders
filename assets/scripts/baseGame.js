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
  };

  createInvaders = () => {
    if (this.frames == 0) {
      for (let j = 0; j < 4; j++) {
        for (let i = 0; i < 10; i++) {
          let index = Math.floor(Math.random() * 3);
          let invaders = new Invaders(
            160 + 70 * i,
            50 + 70 * j,
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
    // let maxB = canvas.width + 20;
    // this.allInvaders.forEach((invader) => {
    //   if (invader.x > maxB - invader.width) {
    //     invader.x += 1;
    //   } else if (invader.x > maxB - invader.width) {
    //     invader.x -= 1;
    //   }
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
        }
      }
    }
  };

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
