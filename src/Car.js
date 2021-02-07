class Car {
  constructor(img, x, y, xw, yh, enemy, road) {
      this.x = x;
      this.y = y;
      this.img = img;
      this.xw = xw;
      this.yh = yh;
      this.enemy = enemy;
      this.road = road;
      this.score = 0;
      this.interval2;
  }

  start(func, frames) {
    this.interval = setInterval(func, 1000 / frames);
  }

  gameover(enemy, road, score, text) {
    enemy.stop();
    road.stop();
    ctx.font = "150px arial";
    ctx.baseLine = "center";
    ctx.fillText(text, 80, canvas.height/2);
    ctx.fillText(`Score: ${score}`, 80, canvas.height/2+120);

  };

  stop() {
    clearInterval(this.interval);
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.xw, this.yh);
  }

  async animate(button) {
    return new Promise(resolve => {
      var clear = this.clear;
      var img = this.img;
      var x = this.x;
      var y = this.y;
      var xw = this.xw;
      var yh = this.yh;
      var enemy = this.enemy;
      var score = this.score;
      var road = this.road;
      var interval = this.interval2;
      var gameover = this.gameover;
      $(document).keydown(function(e) {
         switch(e.key) {
           case 'a':
             x -= 30;
             if (x <= 0) x = 0;
             break;
           case 'd':
             x += 30;
             if (x >= canvas.width-xw) x = canvas.width-xw;
             break;
           case 'w':
             y -= 30;
             if (y <= 0) y = 0;
             break;
           case 's':
             y += 30;
             if (y >= canvas.height-yh) y = canvas.width-yh;
             break;
         }

      });

      interval = setInterval(function() {
        score++;
      }, 1000);
      this.start(function() {
        if (enemy.enemys.first.y >= y && enemy.enemys.first.y <= y+img.height &&
            enemy.enemys.first.x >= x-(img.width-60) && enemy.enemys.first.x <= x+(img.width-60)) {
               console.log(`FIRST: ${enemy.enemys.first.y},${y+20}`);
               clearInterval(interval);
               gameover(enemy, road, score, "Gameover");
        }
        if (enemy.enemys.second.y >= y && enemy.enemys.second.y <= y+img.height &&
            enemy.enemys.second.x >= x-(img.width-60) && enemy.enemys.second.x <= x+(img.width-60)) {
              console.log(`SECOND: ${enemy.enemys.second.y},${y+20}`);
              clearInterval(interval);
              gameover(enemy, road, score, "Gameover");
        }
        if (enemy.enemys.third.y >= y && enemy.enemys.third.y <= y+img.height &&
            enemy.enemys.third.x >= x-(img.width-60) && enemy.enemys.third.x <= x+(img.width-60)) {
              console.log(`THIRD: ${enemy.enemys.third.y},${y+20}`);
              clearInterval(interval);
              gameover(enemy, road, score, "Gameover");
        }

        ctx.font = "50px arial";
        ctx.fillStyle = "#fff";
        ctx.fillText(`Score: ${score}`, 100, 50);
        ctx.drawImage(img, x, y, xw, yh);
      }, 60);
    });
  }
}
