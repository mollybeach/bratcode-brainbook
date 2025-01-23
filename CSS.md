# CSS Study Sheet

### 🎨 Colors
- **Color**: `color: red; | blue; | green;`
- **Background Color**: `background-color: red; | blue; | green;`
- **Border Color**: `border-color: red; | blue; | green;`

```html
<div style="color: white; background-color: blue; border: 2px solid red;">
  Color Example
</div>
```

### ✏️ Borders
- **Border Width**: `border-width: 1px; | 2px; | 3px;`
- **Border Style**: `border-style: solid; | dashed; | dotted;`
- **Border Radius**: `border-radius: 0; | 5px; | 10px; | 50%;`

```html
<div style="border: 2px solid black; border-radius: 10px; padding: 10px;">
  Border Example
</div>
```

```css
.border-example {
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
}
```

### 🛸 Spacing
- **Margin**: `margin: 0; | 10px; | auto;`
- **Padding**: `padding: 0; | 10px; | 20px;`

```html
<div class="spacing-example">
  Spacing Example
</div>
```

```css
.spacing-example {
  margin: 20px;
  padding: 10px;
  background-color: lightgray;
}
```

### 📏 Sizing
- **Width**: `width: 100px; | 50%; | auto;`
- **Height**: `height: 100px; | 50%; | auto;`
- **Max Width**: `max-width: 100%;`
- **Max Height**: `max-height: 100%;`

```html
<div class="sizing-example">
  Sizing Example
</div>
```

```css
.sizing-example {
  width: 50%;
  height: 100px;
  background-color: lightblue;
}
```

### 📦 Flexbox
- **Display**: `display: flex; | inline-flex;`
- **Flex Direction**: `flex-direction: row; | column;`
- **Justify Content**: `justify-content: flex-start; | center; | space-between;`
- **Align Items**: `align-items: flex-start; | center; | stretch;`

```html
<div class="flexbox-example">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
</div>
```

```css
.flexbox-example {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
}

.flex-item {
  background-color: coral;
  padding: 10px;
}
```

### 🧮 Grid
- **Display**: `display: grid; | inline-grid;`
- **Grid Template Columns**: `grid-template-columns: repeat(3, 1fr);`
- **Grid Gap**: `grid-gap: 10px;`

```html
<div class="grid-example">
  <div class="grid-item">Grid Item 1</div>
  <div class="grid-item">Grid Item 2</div>
  <div class="grid-item">Grid Item 3</div>
</div>
```

```css
.grid-example {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
}

.grid-item {
  background-color: lightcoral;
  padding: 10px;
}
```

### 📍 Positioning
- **Position**: `position: relative; | absolute; | fixed; | sticky;`
- **Top/Right/Bottom/Left**: `top: 0; | right: 0; | bottom: 0; | left: 0;`

```html
<div class="positioning-example">
  <div class="absolute-item">Positioned Item</div>
</div>
```

```css
.positioning-example {
  position: relative;
}

.absolute-item {
  position: absolute;
  top: 0;
  right: 0;
  background-color: yellow;
  padding: 10px;
}
```