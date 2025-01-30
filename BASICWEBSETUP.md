
# 📖 Basic Web Setup Study Sheet

This guide covers the structure of a basic web setup using HTML, CSS, and JavaScript. Below, you'll find explanations and the paths of the files to show how they are used together.

🏗️ 1. HTML File (index.html)

Path: index.html

The HTML file is the backbone of the webpage. It provides the structure and references external files such as CSS and JavaScript.

``` html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Web Setup</title>
    <link rel="stylesheet" href="styles.css"> <!-- Linking external CSS file -->
</head>
<body>
    <h1>Welcome to My Website</h1>
    <p>This is a simple HTML, CSS, and JavaScript example.</p>
    <button onclick="changeText()">Click Me</button> <!-- Calls JavaScript function -->
    <p id="message"></p>
    
    <script src="script.js"></script> <!-- Linking external JavaScript file -->
</body>
</html>
```
🔍 Explanation:

Links styles.css for styling the webpage.

Contains a button that triggers a JavaScript function from script.js.

Uses a <script> tag at the bottom to include script.js.

🎨 2. CSS File (styles.css)

Path: styles.css

The CSS file is used to style the webpage and improve its appearance.

```css
/* styles.css */
body {
    font-family: Arial, sans-serif;
    text-align: center;
    background-color: #f4f4f4;
}

button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: darkblue;
}

🔍 Explanation:

Sets a background color and font styles for the entire page.

Styles the button with padding, colors, and a hover effect.

🛠️ 3. JavaScript File (script.js)

Path: script.js

The JavaScript file adds interactivity to the webpage.

// script.js
function changeText() {
    document.getElementById("message").innerText = "You clicked the button!";
}

🔍 Explanation:

Defines a function changeText() that modifies the text inside the <p> element with id="message" when the button is clicked.

This function is triggered via the onclick event on the button.

``javascript
// script.js
function changeText() {
    document.getElementById("message").innerText = "You clicked the button!";
}
```

📌 Summary

index.html – The structure of the webpage, linking to CSS and JavaScript files.

styles.css – Styles the webpage, improving its visual presentation.

script.js – Adds interactivity, making the webpage dynamic.

Together, these files form a basic web setup that allows for styling and interactive functionality. 🚀
