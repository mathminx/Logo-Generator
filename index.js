// Import packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require ("./lib/shapes");

//Get user input
const questions = [
  {
    type: "input",
    message: "Input up to three characters for your logo text.",
    name: "text",
  },
  {
    type: "list",
    message: "Choose a shape for your logo.",
    name: "shape",
    choices: ["Circle", "Square", "Triangle"],
  },
  {
    type: "input",
    message: "Choose a colour for the shape.",
    name: "shapeColour",
  },
  {
    type: "input",
    message: "Choose a colour for the text.",

    name: "textColour",
  },
];


// Generate a string for the selected shape 
// in the selected colour. 
function renderShape (shape, shapeColour) {
  if (shape === 'Circle') {
    const logoShape = new Circle(shapeColour);
    const renderedShape = (logoShape.render());
    return renderedShape;
  }
  if (shape === 'Square') {
    const logoShape = new Square(shapeColour);
    const renderedShape = (logoShape.render());
    return renderedShape;
  }
  if (shape === 'Triangle'){
    const logoShape = new Triangle(shapeColour);
    const renderedShape = (logoShape.render());
    return renderedShape;
  }
}

function renderText (shape, text, textColour) {
  if (shape === 'Circle') {
    return renderedText = `<text x="150" y="118" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  }
  if (shape === 'Square') {
    return renderedText = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  }
  if (shape === 'Triangle'){
    return renderedText = `<text x="150" y="165" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
  }
}

function renderLogo (data) {
  const renderedShape = renderShape(data.shape, data.shapeColour);
  const renderedText = renderText(data.shape, data.text, data.textColour);
  const logoString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${renderedShape}${renderedText}`
  fs.writeFile('logo.svg', logoString, (err) =>
    err ? console.error(err) : console.log("Generated logo.svg")
  );
}

// Function to initialize the application
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      renderLogo(data);
    });
}

// Function call to initialize app
init();
