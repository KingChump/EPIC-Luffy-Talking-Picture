function preload() {
  luffy = loadImage("ASSets/luffynomouth.png");
}

function setup() {
  createCanvas(620, 620);
  ellipseMode(CORNER);
}

function draw() {
  clear()
  image(luffy, 0, 0);
  if (keyIsDown(32)) {
    fill(0);
    ellipse(230, 300, 70);
  } else {
    strokeWeight(4);
    line(230, 330, 300, 330);
  }
}
