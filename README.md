SVG Logo Maker

This is a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to provide text (maximum 3 characters), select a shape (circle, square, or triangle) and specify two colours - one for the shape and one for the text. Based on the user input, the application generates a string that defines the logo and saves it to a 'logo.svg' file.

*** insert video link here ***

- command-line application that prompts user for input
- up to three characters, text color (colour keyword OR a hexadecimal number), list of shapes to choose from: circle, triangle, and square
- input for all the prompts --> an SVG file is created named `logo.svg` AND output text "Generated logo.svg" is printed in the command line
- open the `logo.svg` file in a browser --> a 300x200 pixel image matching the criteria entered is displayed

```bash
node index.js
```

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  
  Install dependencies by running `npm install` followed by `npm i inquirer@8.2.4`.

  ## Usage

  The application is invoked by running the following command: `node index.js`
  
  ## Credits
  Starter code was provided.

  ## License
    
  This project is licensed under the terms of the MIT license.
  
  ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)
  

