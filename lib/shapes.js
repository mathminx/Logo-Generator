class Logo {
  constructor(text, shapeColour, textColour) {
    this.text = text;
    this.shapeColour = shapeColour;
    this.textColour = textColour;
  }
}

class Circle extends Logo {
  constructor(text, shapeColour, textColour) {
    super(text, shapeColour, textColour); 
  }
}
 
class Square extends Logo {
  constructor(text, shapeColour, textColour) {
    super(text, shapeColour, textColour); 
  }
}

class Triangle extends Logo {
  constructor(text, shapeColour, textColour) {
    super(text, shapeColour, textColour); 
  }
}

module.exports = {Circle, Square, Triangle};