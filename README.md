SVG Logo Maker

This is a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to provide text for the logo, select a color and shape, and save the generated SVG to a `.svg` file.


- command-line application that prompts user for input
- up to three characters, text color (color keyword OR a hexadecimal number), list of shapes to choose from: circle, triangle, and square
- input for all the prompts --> an SVG file is created named `logo.svg` AND output text "Generated logo.svg" is printed in the command line
- open the `logo.svg` file in a browser --> a 300x200 pixel image matching the criteria entered is displayed


video submission:

used [Jest](https://www.npmjs.com/package/jest) for running the unit tests and [Inquirer](https://www.npmjs.com/package/inquirer/v/8.2.4) for collecting input from the user. The application is invoked by using the following command:

```bash
node index.js
```

**Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.


```js
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
```

- additional files in the `lib` folder for handling user input, writing to a file, etc. Writing tests for these additional files is **optional**.


* At least one sample SVG file generated using the application must be submitted.

* Your GitHub repository containing your application code.

* A walkthrough video that demonstrates the functionality of the SVG logo maker and passing tests must be submitted.

* The `README.md` file must include a link to the walkthrough video.

* The walkthrough video must show all tests passing from the command line.

* The walkthrough video must demonstrate how a user would invoke the application from the command line.

* The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.

* The walkthrough video must demonstrate a generated SVG file, showing the file being opened in the browser. The image in the browser must reflect the choices made by the user (text, shape, and colors).
