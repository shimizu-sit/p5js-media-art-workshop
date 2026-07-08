let x = 0;
let speed = 4;

function setup() {
  createCanvas(400, 400);
  background(0);
  noStroke();
}

function draw() {
  fill(mouseX, 100, 255, 35);
  circle(x, mouseY, 70);

  x = x + speed;

  if (x > width || x < 0) {
    speed = speed * -1;
  }
}