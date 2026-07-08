let x = 100;
let speed = 3;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(mouseX, 120, 255);
  circle(x, mouseY, 90);

  x = x + speed;

  if (x > width || x < 0) {
    speed = speed * -1;
  }
}