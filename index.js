// Import packages needed for this application
const inquirer = require("inquirer");
const Logo = require ("./lib/shapes");

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
function generateLogo (data) {
  if (data.shape === 'Circle') {
    const myLogo = new Logo.Circle (
      data.text,
      data.shapeColour,
      data.textColour
    );
    console.log(myLogo);
  }
  else if (data.shape === 'Square') {
    const myLogo = new Logo.Square (
      data.text,
      data.shapeColour,
      data.textColour
    );
    console.log(myLogo);
  }
  else {
    const myLogo = new Logo.Triangle (
      data.text,
      data.shapeColour,
      data.textColour
    );
    console.log(myLogo);
  }
  
  //const html = myLogo.render();
}

// Function to initialize the application
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      console.log(data);
      generateLogo(data);
      console.log("Generated logo.svg")
  });
}

// Function call to initialize app
init();
