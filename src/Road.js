class Road {
  constructor(img, x, y) {
      this.x = x;
      this.y = y;
      this.img = img;
  }

  start(func, frames) {
    this.interval = setInterval(func, 1000 / frames);
  }

  stop() {
    clearInterval(this.interval);
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, canvas.width, canvas.height);
  }

  async animate() {
    return new Promise(resolve => {
      var clear = this.clear;
      var draw = this.draw;
      var img = this.img;
      var x = this.x;
      var y = this.y;
      var width = canvas.width;
      var height = canvas.height;
      this.start(function() {
        clear();
        y+=10;
        if (y > height) {
          y = 20;
        }
        ctx.drawImage(img, x, y, width, height);
        ctx.drawImage(img, x, y-(img.width), width, height);
        ctx.drawImage(img, x, y-(img.width+100), width, height);
      }, 60);
    });
  }
}
