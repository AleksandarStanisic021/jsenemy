import "./style.css";
import enemy1 from "./enemy1.png";
import ememy2 from "./enemy2.png";
import enemy3 from "./enemy3.png";
import enemy4 from "./enemy4.png";

const enemyArray = [];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);
const numberOfEnemies = 100;

class Enemy {
  constructor() {
    this.x = Math.random() * CANVAS_WIDTH;
    this.y = Math.random() * CANVAS_HEIGHT;
    this.width = 30;
    this.height = 30;
    this.speed = Math.random() * 4 - 2;
  }
  update() {
    this.x += this.speed;
    this.y += this.speed;
    if (this.y > CANVAS_HEIGHT) {
      this.y = 0;
    }

    if (this.x > CANVAS_WIDTH) {
      this.x = 0;
    }
  }
  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

for (let i = 0; i < numberOfEnemies; i++) {
  let e = new Enemy();
  enemyArray.push(e);
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemyArray.forEach((e) => {
    e.update();
    e.draw();
  });

  requestAnimationFrame(animate);
}

animate();
