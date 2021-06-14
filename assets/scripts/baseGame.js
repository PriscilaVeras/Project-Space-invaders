class Game {
  constructor(background, player) {
    this.background = background;
    this.player = player;
    this.allInvaders = [];
    this.frames = 0;
    this.animationId;
  }

  start = () => {
    this.updateGame();
  };

  updateGame = () => {
    this.clear();

    this.background.updatePosition();
    this.background.draw();

    this.player.updatePosition();
    this.player.draw();

    this.animationId = requestAnimationFrame(this.updateGame);
  };

  updateInvaders = () => {
    // this.frames++;

    const invader1 = new Invaders(
      canvas.width - 600,
      canvas.height - 400,
      50,
      50,
      inva1
    );

    const invader2 = new Invaders(
      canvas.width - 600,
      canvas.height - 400,
      50,
      50,
      inva2
    );

    const invader3 = new Invaders(
      canvas.width - 600,
      canvas.height - 400,
      50,
      50,
      inva3
    );
  };

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };
}
