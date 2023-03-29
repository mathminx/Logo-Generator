# SVG Logo Maker

This is a Node.js command-line application that prompts the user to input text and select the shape and colours, then generates a logo based on the user input and saves it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The samples below were created with this SVG Logo Maker (see [./examples](https://github.com/mathminx/SVG-Logo-Maker/tree/main/examples))

![image](https://user-images.githubusercontent.com/122234007/228095030-553a004d-f273-416e-903d-ad5871a0d8c3.png) ![image](https://user-images.githubusercontent.com/122234007/228095164-4aab6493-5a53-4cfe-9bf6-58c671b9f80c.png) ![image](https://user-images.githubusercontent.com/122234007/228095279-ebe46aef-2dca-4f83-9072-2e302584b6d5.png)


## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Tests](#tests)
* [License](#license)

 
## Installation
  
Install dependencies by running `npm install` followed by `npm i inquirer@8.2.4`.


## Usage

https://watch.screencastify.com/v/cDiv11qbhrJSEBzs7Dx0


The application is invoked by running the following command: `node index.js`.
The user is prompted to input text for the logo (maximum 3 characters), select a shape from a list (circle, square, or triangle) and specify two colours (colour keyword OR a hexadecimal number) - one colour for the shape and another for the text. 
Based on the user input, the application generates a string that defines the logo, saves it to an SVG file `(logo.svg)`, and prints `Generated logo.svg` in the command line.
When the `logo.svg` file is opened in a browser, a 300x200 pixel image matching the criteria entered is displayed


## Tests

 Unit tests for the creation of the shapes can be found in shapes.tests.js and run using Jest. To run the tests, type 
 `npm run test`


 ## License

 This project is licensed under the terms of the MIT license.

 ![License: ](https://img.shields.io/badge/License-MIT-blueviolet.svg)

##
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)  ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
  
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
