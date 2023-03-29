// Import packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require ("./lib/shapes");
const questions = require ("./lib/questions");
const render = require ("./lib/renderShape");
const renderText = require ("./lib/renderText");

// Function to render the logo
function renderLogo (data) {
  // Render the shape with the chosen colour
  const renderedShape = render(data.shape, data.shapeColour);
  // Render the text with the chosen colour
  const renderedText = renderText(data.shape, data.text, data.textColour);
  // Link the SVG namespace, define the logo container, and concatenate to the strings defining the shape and text of the logo
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
