let alienX = 200;
let alienY = -50;
let score = 0;
let roadOffset = 0;
let speed = 5;
let gameOver = false;
function setup() {
  createCanvas(400, 500);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
}
function draw() {
  background(8, 5, 25);
  randomSeed(10);
  for (let i = 0; i < 70; i++) {
    fill(255);
    noStroke();
    circle(random(0, 400), random(0, 500), random(1, 3));
  }
  fill(25, 15, 45);
  rect(200, 250, 200, 500);
  stroke(18, 0, 255);
  strokeWeight(4);
  line(100, 0, 100, 500);
  line(300, 0, 300, 500);
  noStroke();
  for (let y = -125; y < 500; y += 125) {
    let movingY = y + roadOffset;
    fill(0, 25, 275);
    rect(200, movingY, 8, 40);
    textSize(30);
  }
  if (gameOver) {
    fill(0, 0, 0, 20);
    rect(200, 250, 40, 500);
    fill(255, 80, 100);
    textSize(35);
    text(" ALIEN ATTACK! ", 200, 190);
    fill(255);
    textSize(28);
    text("Final Score: " + score, 200, 245);
    fill(0, 255, 255);
    textSize(22);
    text("Click to Play Again", 200, 300);
    return;
  }
  roadOffset += speed;
  if (roadOffset >= 125) {
    roadOffset = 0;
  }
  let shipX = constrain(mouseX, 125, 275);
  let shipY = 420;
  fill(0, 255, 255);
  triangle(
    shipX, shipY - 35,
    shipX - 25, shipY + 25,
    shipX + 25, shipY + 25
  );
  fill(180, 0, 255);
  ellipse(shipX, shipY, 25, 35);
  fill(255, 255, 0);
  ellipse(shipX, shipY + 25, 12, 15);
  textSize(45);
  text("👾", alienX, alienY);
  alienY += speed;
  if (alienY > 530) {
    score++;
    speed += 0.3;
    alienY = -40;
    alienX = random(1, 270);
  }
if (dist(shipX, shipY, alienX, alienY) < 40) {
    gameOver = true;
  }
  fill(255, 150, 0);
  textSize(22);
  text("🛸 Aliens Dodged: " + score, 200, 30);
}
function mousePressed() {
  if (gameOver) {
    score = 0;
    speed = 5;
    alienY = -50;
    alienX = random(1,180);
    gameOver = false;
  }
}
