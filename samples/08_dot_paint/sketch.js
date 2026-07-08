function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
}

function draw() {
  fill(mouseX, mouseY, 200, 80);
  circle(mouseX, mouseY, 30);
}