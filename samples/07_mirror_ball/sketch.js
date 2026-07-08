function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(20);

  fill(mouseX, 100, 255);
  circle(mouseX, mouseY, 80);

  fill(255, mouseY, 100);
  circle(400 - mouseX, mouseY, 80);

  fill(100, 255, mouseX);
  circle(mouseX, 400 - mouseY, 80);

  fill(255, 255, 100);
  circle(400 - mouseX, 400 - mouseY, 80);
}