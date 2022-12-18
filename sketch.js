
let movers = [];

let attractor;

function setup() {
  createCanvas(640, 360);
  for (let i = 0; i < 100; i++) {
    movers[i] = new Mover(1.5, random(width), random(height));
  }
  attractor = new Attractor();
}

function draw() {
  background(50);

  attractor.display();

  for (let i = 0; i < movers.length; i++) {
    if(mouseIsPressed){
    let force = attractor.calculateAttraction(movers[i]);
    movers[i].applyForce(force);

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
    }
  }
}

function mouseMoved() {
  attractor.handleHover(mouseX, mouseY);
}

function mousePressed() {
  attractor.handlePress(mouseX, mouseY);
}

function mouseDragged() {
  attractor.handleHover(mouseX, mouseY);
  attractor.handleDrag(mouseX, mouseY);
}

function mouseReleased() {
  attractor.stopDragging();
}