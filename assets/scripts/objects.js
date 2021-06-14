class Objects {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.speedX = 0;
  }

  updatePosition() {
    this.x += this.speedX;

    if (this.x <= this.width - 240) {
      this.x = this.width;
    }

    if (this.x >= canvas.width - (this.width - 30)) {
      this.x = canvas.width - (this.width - 30);
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

// background
class BackgroundImage extends Objects {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
  }
}

// invasores
class Invaders extends Objects {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
  }
}
