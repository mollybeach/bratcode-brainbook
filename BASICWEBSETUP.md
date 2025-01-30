
# 📖 Basic Web Setup Study Sheet

This guide covers the structure of a basic web setup using HTML, CSS, and JavaScript. Below, you'll find explanations and the paths of the files to show how they are used together.

## 📂 Project Directory Structure

```
myproject/
│── index.html     # Main HTML file
│── styles.css     # CSS for styling
└── script.js      # JavaScript for interactivity
```

## 🏗️ 1. HTML File (index.html)

### Path: ./index.html

The HTML file is the backbone of the webpage. It provides the structure and references external files such as CSS and JavaScript.

``` html
<!-- index.html --> <-- This is how you make a comment in HTML using the arrows --> 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Web Setup</title>
    <link rel="stylesheet" href="styles.css"> <!-- Linking external CSS file -->
</head>
<body>
    <h1 class="main-heading" style="color: green;">Welcome to My Website</h1> <!-- Inline style example -->
    <p>This is a simple HTML, CSS, and JavaScript example.</p> <!-- Styled using a CSS element selector p {} in CSS -->
    <button style="background-color: red; color: white;">Styled Button</button> <!-- Inline style example -->
    <button class="styled-button" onclick="changeText()">Click Me</button> <!-- Calls JavaScript function & styled via class -->
    <p id="message"></p>
    
    <script src="script.js"></script> <!-- Linking external JavaScript file -->
</body>
</html>
```

### 🔍 Explanation:

- Links styles.css for styling the webpage.
- Uses an inline style inside the < h1 > tag and one of the < button > elements.
- The second button references a CSS class (.styled-button) for styling.
- The < p > element is styled using a CSS element selector (p {}).
- Contains a button that triggers a JavaScript function from script.js.
- Uses a < script > tag at the bottom to include script.js.

## 🎨 2. CSS File (styles.css)

### Path: ./styles.css

The CSS file is used to style the webpage and improve its appearance.

```css
/* path: styles.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

p {
    font-size: 18px;
    color: darkgray;
    line-height: 1.5;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.styled-button {
    background-color: blue;
    color: white;
}

.styled-button:hover {
    background-color: darkblue;
}

.main-heading {
    font-size: 24px;
    font-weight: bold;
}
```

### 🔍 Explanation:
- Sets a background color and font styles for the entire page.
- Uses element selector (p {}) to style all < p > elements in the document, adjusting font size, color, and line spacing.
- Styles the button with padding, colors, and a hover effect.
- Uses inline styles for quick styling within the HTML file.
- Uses element selector (button) to style all buttons by default.
- Uses a class selector (.styled-button) to style a specific button differently.
- Adds a .main-heading class to style < h1 > elements separately.

## 🛠️ 3. JavaScript File (script.js)

### Path: script.js

The JavaScript file adds interactivity to the webpage.

```
// ./script.js
function changeText() {
    document.getElementById("message").innerText = "You clicked the button!";
}
```

### 🔍 Explanation:

Defines a function changeText() that modifies the text inside the <p> element with id="message" when the button is clicked.

This function is triggered via the onclick event on the button in the HTML: 

```html
 <button onclick="changeText()">Click Me</button> <!-- Calls JavaScript function -->
```

## 📌 Summary

- index.html – The structure of the webpage, linking to CSS and JavaScript files.
- styles.css – Styles the webpage, improving its visual presentation.
- script.js – Adds interactivity, making the webpage dynamic.

Together, these files form a basic web setup that allows for styling and interactive functionality. 🚀
