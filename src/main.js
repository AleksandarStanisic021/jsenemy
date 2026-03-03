import "./style.css";
import enemy1 from "./enemy1.png";
import ememy2 from "./enemy2.png";
import enemy3 from "./enemy3.png";
import enemy4 from "./enemy4.png";

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

class Enemy {
  constructor() {
    this.x = 10;
    this.y = 10;
    this.width = 30;
    this.height = 30;
  }
}

let e1 = new Enemy();

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.fillRect(e1.x, e1.y, e1.width, e1.height);
  e1.x += 5;
  if (e1.x > 500) {
    e1.x = 0;
  }

  requestAnimationFrame(animate);
}

animate();
