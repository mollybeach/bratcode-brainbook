# TypeScript Study Guide

### 📜 Variables
- **Declaration**: `let`, `const`, `var` with type annotations
- **Example**:
```typescript
let name: string = "John"; // String type
const age: number = 30; // Number type
var city: string = "New York"; // String type
```

### 🔄 Data Types
- **Primitive Types**: `string`, `number`, `boolean`, `null`, `undefined`, `any`, `void`, `never`
- **Example**:
```typescript
let str: string = "Hello, World!"; // String
let num: number = 42; // Number
let isActive: boolean = true; // Boolean
let emptyValue: null = null; // Null
let notDefined: undefined; // Undefined
let anything: any = "Can be anything"; // Any type
```

### 📚 Functions
- **Function Declaration**:
```typescript
function greet(name: string): string {
    return `Hello, ${name}!`;
}
```
- **Function Expression**:
```typescript
const add = function(a: number, b: number): number {
    return a + b;
};
```
- **Arrow Function**:
```typescript
const multiply = (a: number, b: number): number => a * b;
```

### 📦 Interfaces
- **Defining an Interface**:
```typescript
interface Person {
    name: string;
    age: number;
    greet(): string;
}
```
- **Using an Interface**:
```typescript
const person: Person = {
    name: "Alice",
    age: 25,
    greet: function() {
        return `Hi, I'm ${this.name}`;
    }
};
```

### 📋 Arrays
- **Array Creation**:
```typescript
const fruits: string[] = ["apple", "banana", "cherry"];
```
- **Array Methods**:
```typescript
fruits.push("orange"); // Add to end
fruits.pop(); // Remove from end
fruits.shift(); // Remove from start
```

### 🔄 Control Flow
- **Conditional Statements**:
```typescript
if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
```
- **Switch Statement**:
```typescript
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
```typescript
for (let i: number = 0; i < 5; i++) {
    console.log(i);
}
```
- **While Loop**:
```typescript
let count: number = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```

### 📅 Events
- **Event Listener**:
```typescript
document.getElementById("myButton")?.addEventListener("click", function() {
    alert("Button clicked!");
});
```

### 🧩 Promises
- **Creating a Promise**:
```typescript
const myPromise: Promise<string> = new Promise((resolve, reject) => {
    let success: boolean = true; // Simulate success or failure
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed.");
    }
});
```
- **Using Promises**:
```typescript
myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### ⚡ Async/Await
- **Async Function**:
```typescript
async function fetchData(): Promise<void> {
    try {
        let response = await fetch("https://api.example.com/data");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}
```
