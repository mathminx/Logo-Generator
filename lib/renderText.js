// Render the text in the selected colour in the specific position for the shape
function renderText (shape, text, textColour) {
  switch (shape) {
    case 'Circle':
      return renderedText = `<text x="150" y="118" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
    case 'Square': 
      return renderedText = `<text x="150" y="120" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
    case'Triangle':
      return renderedText = `<text x="150" y="165" font-size="60" text-anchor="middle" fill="${textColour}">${text}</text></svg>`;
}
}

module.exports = renderText;