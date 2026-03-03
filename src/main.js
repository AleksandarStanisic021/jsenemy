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
const numberOfEnemies = 90;
let gameFrame = 0;

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = enemy1;

    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 3;
    this.height = this.spriteHeight / 3;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 7 - 2.5;
    this.y += Math.random() * 7 - 2.5;

    if (this.y > CANVAS_HEIGHT) {
      this.y = 0;
    }

    if (this.x > CANVAS_WIDTH) {
      this.x = 0;
    }
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 3 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height,
    );
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
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
