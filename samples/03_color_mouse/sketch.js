function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(240);

  fill(mouseX, mouseY, 200);
  circle(200, 200, 120);
}