class Attractor {

  constructor() {
    this.position = createVector(width / 2, height / 2);
    this.mass = 20;
    this.G = 1;
    this.dragOffset = createVector(0, 0);
    this.dragging = false;
    this.rollover = false;
  }

  calculateAttraction(m) {
    let force = p5.Vector.sub(this.position, m.position);
    let distance = force.mag();
    distance = constrain(distance, 5, 25);
    force.normalize();
    let strength = (this.G * this.mass * m.mass) / (distance * distance);
    force.mult(strength);
    return force;
  }

  display() {
    ellipseMode(CENTER);
    strokeWeight(4);
    stroke(0);
      fill(255);
    ellipse(this.position.x, this.position.y, this.mass * 2, this.mass * 2);
  }

  handlePress(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
      this.dragging = true;
      this.dragOffset.x = this.position.x - mx;
      this.dragOffset.y = this.position.y - my;
    }
  }

  handleHover(mx, my) {
    let d = dist(mx, my, this.position.x, this.position.y);
    if (d < this.mass) {
      this.rollover = true;
    } else {
      this.rollover = false;
    }
  }

  stopDragging() {
    this.dragging = false;
  }

  handleDrag(mx, my) {
    if (this.dragging) {
      this.position.x = mx + this.dragOffset.x;
      this.position.y = my + this.dragOffset.y;
    }
  }
}