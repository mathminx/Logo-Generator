SVG Logo Maker



This is a Node.js command-line application that takes in user input to generate a logo and save it as an [SVG file](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics). The application prompts the user to provide text (maximum 3 characters), select a shape (circle, square, or triangle) and specify two colours - one for the shape and one for the text. Based on the user input, the application generates a string that draws the logo and saves it to a 'logo.svg' file.


- command-line application that prompts user for input
- up to three characters, text color (colour keyword OR a hexadecimal number), list of shapes to choose from: circle, triangle, and square
- input for all the prompts --> an SVG file is created named `logo.svg` AND output text "Generated logo.svg" is printed in the command line
- open the `logo.svg` file in a browser --> a 300x200 pixel image matching the criteria entered is displayed

```bash
node index.js
```

<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="100" fill="#6522AF"/>
<text x="150" y="118" font-size="60" text-anchor="middle" fill="white">m!m</text></svg>
