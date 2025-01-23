# JavaScript Study Guide

### 📜 Variables
- **Declaration**: `var`, `let`, `const`
- **Example**:
```javascript
let name = "John"; // Block-scoped variable
const age = 30; // Constant variable
var city = "New York"; // Function-scoped variable
```

### 🔄 Data Types
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`
- **Example**:
```javascript
let str = "Hello, World!"; // String
let num = 42; // Number
let isActive = true; // Boolean
let emptyValue = null; // Null
let notDefined; // Undefined
```

### 📚 Functions
- **Function Declaration**: 
```javascript
function greet(name) {
    return `Hello, ${name}!`;
}
```
- **Function Expression**:
```javascript
const add = function(a, b) {
    return a + b;
};
```
- **Arrow Function**:
```javascript
const multiply = (a, b) => a * b;
```

### 📦 Objects
- **Object Creation**:
```javascript
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};
```
- **Accessing Properties**:
```javascript
console.log(person.name); // Dot notation
console.log(person['age']); // Bracket notation
```

### 📋 Arrays
- **Array Creation**:
```javascript
const fruits = ["apple", "banana", "cherry"];
```
- **Array Methods**:
```javascript
fruits.push("orange"); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from start
```

### 🔄 Control Flow
- **Conditional Statements**:
```javascript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```
- **Switch Statement**:
```javascript
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    default:
        console.log("Another day");
}
```

### 🔁 Loops
- **For Loop**:
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i);
}
```
- **While Loop**:
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

### 📅 Events
- **Event Listener**:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button clicked!");
});
```

### 🧩 Promises
- **Creating a Promise**:
```javascript
const myPromise = new Promise((resolve, reject) => {
    let success = true; // Simulate success or failure
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});
```
- **Using Promises**:
```javascript
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### ⚡ Async/Await
- **Async Function**:
```javascript
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
```
