# Tailwind CSS Typography
### 🎨 Typography
`text-xs | sm | base | lg | xl | 2xl...` → Font size  
`font-thin | light | normal | bold...` → Font weight  
`italic | not-italic` → Font style  
`tracking-tight | normal | wide` → Letter spacing  
`leading-none | tight | loose` → Line height  
`text-left | center | right` → Align  
`uppercase | lowercase | capitalize` → Transform  
`truncate | overflow-ellipsis` → Overflow  

```html
<div class="text-xl font-bold italic tracking-wide leading-loose text-center uppercase">
  Typography Example
</div>
```


### 🎨 Colors
`bg-red-500 | bg-blue-500 | bg-green-500...` → Background color  
`text-red-500 | text-blue-500 | text-green-500...` → Text color  
`border-red-500 | border-blue-500 | border-green-500...` → Border color  
`ring-red-500 | ring-blue-500 | ring-green-500...` → Ring color  
`shadow-red-500 | shadow-blue-500 | shadow-green-500...` → Shadow color  

```html
<div class="bg-red-500 text-white p-4 rounded-md shadow-md">
  Red Background
</div>
```

### ✏️ Borders
`border-red-500 | border-blue-500 | border-green-500...` → Border color  
`rounded-none | rounded-sm | rounded-md | rounded-lg | rounded-full...` → Border radius  
`border-solid | border-dashed | border-dotted | border-double | border-none...` → Border style  
`border-2 | border-4 | border-8...` → Border width  

```html
<div class="border-2 border-red-500 p-4 rounded-md">
  Red Border
</div>
```

### 🛸 Spacing
`p-0 | p-1 | p-2 | p-3 | p-4 | p-5...` → Padding  
`m-0 | m-1 | m-2 | m-3 | m-4 | m-5...` → Margin  
`space-y-0 | space-y-1 | space-y-2 | space-y-3 | space-y-4 | space-y-5...` → Vertical spacing  
`space-x-0 | space-x-1 | space-x-2 | space-x-3 | space-x-4 | space-x-5...` → Horizontal spacing  

```html
<div class="p-4 m-4 space-y-4 space-x-4">
  Padding, Margin, and Spacing Example
</div>
```

### 📦 Flexbox
`flex | inline-flex` → Display  
`flex-row | flex-col | flex-row-reverse | flex-col-reverse` → Flex direction  
`justify-start | justify-end | justify-center | justify-between | justify-around | justify-evenly` → Justify content  
`items-start | items-end | items-center | items-baseline | items-stretch` → Align items  
`flex-wrap | flex-nowrap | flex-wrap-reverse` → Flex wrap  

```html
<div class="flex flex-col justify-center items-center h-screen">
  <div class="flex-grow bg-blue-500 p-4 rounded-md">Flex Grow</div>
  <div class="flex-grow bg-green-500 p-4 rounded-md">Flex Grow</div>
</div>
```

### 🧮 Grid
`grid | inline-grid` → Display  
`grid-cols-1 | grid-cols-2 | grid-cols-3 | grid-cols-4 | grid-cols-5...` → Grid columns  
`grid-rows-1 | grid-rows-2 | grid-rows-3 | grid-rows-4 | grid-rows-5...` → Grid rows  
`grid-flow-row | grid-flow-col | grid-flow-row-dense | grid-flow-col-dense` → Grid flow  

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-blue-500 p-4 rounded-md">Grid Item</div>
  <div class="bg-green-500 p-4 rounded-md">Grid Item</div>
  <div class="bg-red-500 p-4 rounded-md">Grid Item</div>
</div>
```

### 📍 Positioning
`relative | absolute | fixed | sticky` → Position  
`top-0 | right-0 | bottom-0 | left-0` → Position  
`z-0 | z-10 | z-20 | z-30 | z-40 | z-50...` → Z index  

```html
<div class="relative">
  <div class="absolute top-0 right-0 bg-blue-500 p-4 rounded-md">Absolute Position</div>
</div>
```

### 🎨 Shadows
`shadow-none | shadow-sm | shadow | shadow-md | shadow-lg | shadow-xl | shadow-2xl | shadow-3xl | shadow-4xl | shadow-5xl...` → Shadow  

```html
<div class="shadow-md p-4 rounded-md">
  Shadow Example
</div>
```

### 🖼 Sizing

`w-1/2 | w-32 | w-16` - width 
`h-1/2 | h-32 | h-16` - height
`min-w-0 | min-h-0` - min width
`max-w-full | max-h-full` - max width
`w-auto | h-auto` - auto width
`w-screen | h-screen` - screen width
`w-fit | h-fit` - fit width
`w-full | h-full` - full width
`w-auto | h-auto` - auto width
`w-auto | h-auto` - auto height

```html
<>
<div class="w-1/2 h-32 bg-blue-500">Width/Height Example</div>
</>
```

# 📏 Aspect Ratio
`aspect-square` - square aspect ratio
`aspect-video` - video aspect ratio
`aspect-auto` - auto aspect ratio
`aspect-[16/9]` - 16:9 aspect ratio
`aspect-[4/3]` - 4:3 aspect ratio
`aspect-[1/1]` - 1:1 aspect ratio
`aspect-[3/4]` - 3:4 aspect ratio
`aspect-[9/16]` - 9:16 aspect ratio

```html
<div class="aspect-square w-1/2">
  Aspect Ratio Example
</div>
```

### ✨ Effects

- **Blur**: `blur-sm | blur-lg | blur-3xl`
- **Drop Shadow**: `drop-shadow-md | drop-shadow-xl`
- **Filter**: `grayscale | invert | brightness`
- **Backdrop Effects**: 
  - **Blur**: `backdrop-blur-md | backdrop-blur-3xl`
  - **Brightness**: `backdrop-brightness-50 | backdrop-brightness-200`
  - **Contrast**: `backdrop-contrast-50`
- **Hover Effects**: `hover:blur-md | hover:blur-xl`
- **Transition**: `transition-shadow | transition-opacity`

```html
<div class="shadow-lg hover:shadow-xl transition-shadow duration-300 p-4 bg-gray-100">
  Effects Example
</div>
```

# ⚙️ Visibility
`visible | invisible | collapse | hidden` → Visibility
`hidden | block | md:block ` → Display

```html
<div class="visible">Visible</div>
<div class="invisible">Invisible</div>
<div class="collapse">Collapse</div>
<div class="hidden">Hidden</div>
```
