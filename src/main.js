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
let gameFrame = 0;

const EnemyImage1 = new Image();
EnemyImage1.src = enemy1;

class Enemy {
  constructor() {
    this.x = Math.random() * CANVAS_WIDTH;
    this.y = Math.random() * CANVAS_HEIGHT;

    this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 3;
    this.height = this.spriteHeight / 3;
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
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
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 3 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      EnemyImage1,
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
