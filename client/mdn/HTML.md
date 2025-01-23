# HTML Study Guide

### 📄 Document Structure
- **Doctype**: `<!DOCTYPE html>`
- **HTML Element**: `<html lang="en">`
- **Head Element**: `<head>...</head>`
- **Body Element**: `<body>...</body>`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Structure Example</title>
</head>
<body>
    <h1>Document Structure Example</h1>
</body>
</html>
```

### 📝 Text Elements
- **Headings**: `<h1> | <h2> | <h3> | <h4> | <h5> | <h6>`
- **Paragraph**: `<p>`
- **Span**: `<span>`
- **Strong**: `<strong>`
- **Emphasis**: `<em>`

```html
<p>This is a <strong>strong</strong> paragraph with <em>emphasis</em>.</p>
```

### 📦 Grouping Content
- **Div**: `<div>`
- **Section**: `<section>`
- **Article**: `<article>`
- **Aside**: `<aside>`
- **Footer**: `<footer>`

```html
<article>
    <h2>Article Title</h2>
    <p>This is an article.</p>
</article>
```

### 📸 Images and Multimedia
- **Image**: `<img src="url" alt="description">`
- **Video**: `<video controls>...</video>`
- **Audio**: `<audio controls>...</audio>`

```html
<img src="image.jpg" alt="A beautiful scenery">
<video controls>
    <source src="video.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>
```

### 🔗 Links
- **Anchor**: `<a href="url">Link Text</a>`
- **Target Attribute**: `target="_blank"` (opens link in a new tab)

```html
<a href="https://www.example.com" target="_blank">Visit Example</a>
```

### 📋 Lists
- **Unordered List**: `<ul><li>Item</li></ul>`
- **Ordered List**: `<ol><li>Item</li></ol>`
- **Description List**: `<dl><dt>Term</dt><dd>Description</dd></dl>`

```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

### 🛠️ Forms
- **Form Element**: `<form action="url" method="post">...</form>`
- **Input Types**: `<input type="text"> | <input type="email"> | <input type="password">`
- **Textarea**: `<textarea></textarea>`
- **Button**: `<button>Click Me</button>`

```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    <button type="submit">Submit</button>
</form>
```

### 🎨 Semantic Elements
- **Header**: `<header>`
- **Nav**: `<nav>`
- **Main**: `<main>`
- **Section**: `<section>`
- **Footer**: `<footer>`

```html
<header>
    <h1>Website Title</h1>
    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
        </ul>
    </nav>
</header>
```

### ⚙️ Meta Tags
- **Charset**: `<meta charset="UTF-8">`
- **Viewport**: `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
- **Description**: `<meta name="description" content="Description of the page">`

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="This is an example HTML document.">
</head>
```
