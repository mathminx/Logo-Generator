// Declare the shapes 

class Circle {
  constructor(shapeColour) {
    this.shapeColour = shapeColour;
  }
  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColour}"/>`;
  }
}

class Square {
  constructor(shapeColour) {
    this.shapeColour = shapeColour;
  }
  render() {
    return `<rect x="50" width="200px" height="200px" fill="${this.shapeColour}"/>`;
  }
}

class Triangle {
  constructor(shapeColour) {
    this.shapeColour = shapeColour;
  }
  render() {
    return `<polygon points="150 10, 34.52994616 210, 265.4700538 210" fill="${this.shapeColour}"/>`;
  }
}

module.exports = {Circle, Square, Triangle};

