class Objects {
  constructor(x, y, width, height, img) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.speedX = 0;
    this.speedY = 0;
  }

  updatePosition() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x <= this.width - 230) {
      this.x = this.width - 210;
    }

    if (this.x >= canvas.width - (this.width - 10)) {
      this.x = canvas.width - (this.width - 10);
    }
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(invader) {
    return !(
      this.bottom() < invader.top() ||
      this.top() > invader.bottom() ||
      this.right() < invader.left() ||
      this.left() > invader.right()
    );
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
    this.speedX = 1;
    this.speedY = 1;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

// tiro

class Shooter extends Objects {
  constructor(x, y, width, height, img) {
    super(x, y, width, height, img);
  }
}
