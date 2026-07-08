function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(245);

  fill(255, 100, 150, 120);
  circle(mouseX, mouseY, 120);

  fill(100, 200, 255, 120);
  circle(400 - mouseX, mouseY, 90);

  fill(255, 220, 80, 120);
  circle(mouseX, 400 - mouseY, 70);
}