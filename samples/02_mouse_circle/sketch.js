function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(0, 150, 255);
  circle(mouseX, mouseY, 80);
}