// Import packages needed for this application
const {Circle, Square, Triangle} = require ("./shapes");

// Testing suite to verify that the correct strings are created for the specified shapes in the specified colours.
describe('shapes', () => {
  // Test to verify that a string defining a blue circle is created.
  describe('Circle', () => {
    it('should return a string that creates a blue circle', () => {
      const renderedShape = `<circle cx="150" cy="100" r="100" fill="blue"/>`;
      const shape = new Circle("blue");
      expect(shape.render()).toEqual(renderedShape);
    })
  });
});  

// Testing suite to verify that the correct strings are created for the specified shapes in the specified colours.
describe('shapes', () => {
  // Test to verify that a string defining a pink square is created.
  describe('Square', () => {
    it('should return a string that creates a pink square', () => {
      const renderedShape = `<rect x="50" width="200px" height="200px" fill="#ffccff"/>`;
      const shape = new Square("#ffccff");
      expect(shape.render()).toEqual(renderedShape);
    })
  });
}); 

// Testing suite to verify that the correct strings are created for the specified shapes in the specified colours.
describe('shapes', () => {
  // Test to verify that a string defining a brown triangle is created.
  describe('Square', () => {
    it('should return a string that creates a brown triangle', () => {
      const renderedShape = `<polygon points="150 10, 34.52994616 210, 265.4700538 210" fill="brown"/>`;
      const shape = new Triangle("brown");
      expect(shape.render()).toEqual(renderedShape);
    })
  });
}); 

