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

module.exports = questions;