const {Circle, Square, Triangle} = require ("./shapes");

// Generate a string for the selected shape in the selected colour. 
function renderShape (shape, shapeColour) {
  switch (shape) {
    case 'Circle': {
      const logoShape = new Circle(shapeColour);
      const renderedShape = (logoShape.render());
      return renderedShape;
    }
    case 'Square': {
      const logoShape = new Square(shapeColour);
      const renderedShape = (logoShape.render());
      return renderedShape;
    }
    case 'Triangle': {
      const logoShape = new Triangle(shapeColour);
      const renderedShape = (logoShape.render());
      return renderedShape;
    }
  }
}

module.exports = renderShape;