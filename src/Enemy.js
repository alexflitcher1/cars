class Enemy {
  constructor(img, xw, yh) {
      this.xw = xw;
      this.yh = yh;
      this.img = img;
      this.enemys = {
        "first": {
           "x": Math.random()*canvas.width,
           "y": -200,
        },
        "second": {
           "x": Math.random()*canvas.width,
           "y": -600,
        },
        "third": {
           "x": Math.random()*canvas.width,
           "y": -1000,
        }
      };
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
    ctx.drawImage(this.img, this.enemys.first.x, this.enemys.first.y, this.xw, this.yh);
  }

  async animate(button) {
    var enemys = this.enemys;
    var img = this.img;
    var clear = this.clear;
    var xw = this.xw;
    var yh = this.yh
    this.start(function() {
      enemys.first.y += 20;
      enemys.second.y += 20;
      enemys.third.y += 20;
      if (enemys.first.y >= canvas.height) {
        enemys.first.y = -1000;
        enemys.first.x = Math.random()*canvas.width;
      }
      if (enemys.second.y >= canvas.height) {
        enemys.second.y = -5000;
        enemys.second.x = Math.random()*canvas.width;
      }
      if (enemys.third.y >= canvas.height) {
        enemys.third.y = -8000;
        enemys.third.x = Math.random()*canvas.width;
      }
      ctx.drawImage(img, enemys.first.x, enemys.first.y, xw, yh);
      ctx.drawImage(img, enemys.second.x, enemys.second.y, xw, yh);
      ctx.drawImage(img, enemys.third.x, enemys.third.y, xw, yh);
    }, 60);
  }
}
