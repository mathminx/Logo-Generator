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


// Use  to generate the logo
function generateShape (data) {
  if (data.shape === 'Circle') {
    const logoShape = new Circle(data.shapeColour);
    console.log(logoShape.render());
  }
  else if (data.shape === 'Square') {
    const logoShape = new Square (data.shapeColour);
    console.log(logoShape.render());
  }
  else {
    const logoShape = new Triangle (data.shapeColour);
    console.log(logoShape.render());
  }
  
 //const html = myLogo.render();
 // console.log("Generated logo.svg");
}

// Function to initialize the application
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      generateShape(data);
  });
}

// Function call to initialize app
init();
