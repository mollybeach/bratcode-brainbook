# 🦀 Rust Study Guide with In-Depth Comments and Symbol Explanations

---

## 📜 Variables

```rust
let name = "John";               // Immutable string slice (&str)
let mut age = 30;                // `mut` allows this variable to be changed later
let city: &str = "Paris";        // Explicit type annotation using a string slice
```

* `let`: keyword for variable declaration, borrowed from ML languages.
* `mut`: stands for "mutable", enables reassignment, like in C++.
* `&str`: a borrowed reference to a string slice; does not own the data.
* `:`: used to annotate type explicitly.
* Comparison to JavaScript: similar to const vs let, but Rust enforces immutability much more strictly.

---

## 🔄 Data Types

```rust
let int_value: i32 = 42;           // 32-bit signed integer
let float_value: f64 = 3.14;       // 64-bit floating-point number
let bool_value: bool = true;       // Boolean value
let char_value: char = 'R';        // A single Unicode character
let string_value: &str = "Hello!"; // String slice, not heap-allocated
```

* `i32`, `f64`, `bool`, `char`, `&str`: primitive types, similar to C/C++ but memory-safe.
* Comparison to JavaScript: Rust is statically typed; types are checked at compile time unlike JavaScript's dynamic typing.

---

## 📚 Functions and Closures

```rust
fn greet(name: &str) -> String {
    format!("Hello, {}!", name) // Returns a formatted String
}

let add = |a: i32, b: i32| a + b; // Closure (anonymous function)
```

* `fn`: defines a function.
* `-> String`: return type of the function.
* `format!`: macro that returns a `String`, similar to `sprintf`.
* `|a, b|`: closure syntax, adopted from functional languages like Haskell.
* What is a closure?: A closure is an anonymous function that can capture variables from its surrounding scope.
* Comparison to JavaScript: Closures in Rust are similar to arrow functions ((a, b) => a + b), but with strong type safety and variable ownership rules.

---

## 📦 Structs and impl

```rust
struct Person {
    name: String,
    age: u32,
}

impl Person {
    fn greet(&self) -> String {
        format!("Hi, I'm {}", self.name)
    }
}

let person = Person { name: "Alice".to_string(), age: 25 };
println!("{}", person.greet());
```

* `struct`: defines a custom data type.
* `impl`: implements methods for the struct.
* `&self`: borrowed reference to the instance.
* `String::from` / `.to_string()`: allocates an owned heap string.
* Comparison to JavaScript: Structs are like JavaScript objects but with strict typing and no dynamic properties.

---

## 📋 Vectors

```rust
let mut fruits = vec!["apple", "banana", "cherry"];
fruits.push("orange");
fruits.pop();
fruits.remove(1);
```

* `vec![]`: macro to create a growable array.
* `.push()`: adds an element.
* `.pop()`: removes the last element.
* `.remove(index)`: removes element at given index.
* Comparison to JavaScript: Vectors are like JS arrays, but you must declare them with a type and they are bounds-checked.

---

## 🔄 Control Flow

```rust
if age >= 18 {
    println!("Adult");
} else {
    println!("Minor");
}

match day {
    1 => println!("Monday"),
    2 => println!("Tuesday"),
    _ => println!("Another day"),
}
```

* `if`, `else`: standard conditional branches.
* `match`: like switch-case, adopted from functional languages.
* `=>`: separates pattern from result.
* `_`: wildcard match (default case).
* Comparison to JavaScript: match is like a switch, but is exhaustive and safer.

---

## 🔁 Loops

```rust
for i in 0..5 {
    println!("{}", i);
}

let mut count = 0;
while count < 5 {
    println!("{}", count);
    count += 1;
}
```

* `0..5`: range, includes 0 to 4 (excludes 5).
* `for` and `while`: borrowed from C-like languages.
* Comparison to JavaScript: Ranges (0..5) behave like Python's range or JS for(let i = 0; i < 5; i++).

---

## 🧩 Error Handling

```rust
fn divide(a: i32, b: i32) -> Result<i32, String> {
    if b == 0 {
        Err("Cannot divide by zero".to_string())
    } else {
        Ok(a / b)
    }
}

match divide(10, 2) {
    Ok(val) => println!("Result: {}", val),
    Err(e) => println!("Error: {}", e),
}
```

* `Result<T, E>`: standard enum for recoverable errors.
* `Ok(value)`: success.
* `Err(error)`: failure.
* Comparison to JavaScript: Similar to try/catch, but forces handling at compile time.

---

## ⚡ Iterator Comprehensions

```rust
let squares: Vec<i32> = (0..10).map(|x| x * x).collect();
let even: Vec<i32> = (0..10).filter(|x| x % 2 == 0).collect();
```

* `.map()`, `.filter()`: functional-style iterators.
* `|x|`: closure syntax for short functions.
* `.collect()`: transforms an iterator into a collection.
* Comparison to JavaScript: Nearly identical to array.map() and array.filter(), but with types and ownership enforced.

---

## 🧮 Enums

```rust
enum Direction {
    North,
    South,
    East,
    West,
}

match dir {
    Direction::North => println!("North"),
    _ => println!("Other"),
}
```

* `enum`: used to define variants.
* Pattern matching is type-safe and exhaustive.
* * Comparison to JavaScript: Enums don't exist natively in JS; you would use a string union or object.

---

## 🧬 Traits

```rust
trait Greet {
    fn greet(&self) -> String;
}

struct Dog;

impl Greet for Dog {
    fn greet(&self) -> String {
        "Woof!".to_string()
    }
}
```

* `trait`: like interfaces in Java/C++.
* `impl Trait for Type`: implements the trait.
* Comparison to JavaScript: Like using a class with a required method signature, but with no inheritance — only composition.

---

## ♻️ Lifetimes

```rust
fn longest<'a>(a: &'a str, b: &'a str) -> &'a str {
    if a.len() > b.len() { a } else { b }
}
```

* `'a`: lifetime annotation ensures both inputs and output share the same lifespan.
* Borrow checker uses lifetimes to prevent dangling references.
* Comparison to JavaScript: Lifetimes are not present in JS because memory is managed automatically by the garbage collector.

---

## 📦 Modules

```rust
// In file: src/math_utils.rs
pub fn add(a: i32, b: i32) -> i32 {
    a + b
}

// In main.rs
mod math_utils;

fn main() {
    let sum = math_utils::add(2, 3);
    println!("{}", sum);
}
```

* `mod`: declares a module.
* `pub`: makes function public across modules.
* `::`: namespace access (inspired by C++).
* Comparison to JavaScript: Like ES modules (import { add } from './math_utils.js').

---

## 🔄 Async Rust

```rust
use tokio::time::{sleep, Duration};

async fn delayed_hello() {
    sleep(Duration::from_secs(1)).await;
    println!("Hello after delay!");
}

#[tokio::main]
async fn main() {
    delayed_hello().await;
}
```

* `async fn`: declares an asynchronous function.
* `.await`: pauses until future is ready.
* `tokio`: most common async runtime.
* Comparison to JavaScript: Very similar to async/await in JavaScript.

---

## ❗ Macro Symbol Explanation

* `!` is used to call macros (e.g., `println!`, `format!`, `vec!`).
* Macros are code-generating functions that expand at compile-time.
* Inspired by C/C++ macros but much safer.

---
## 📖 What is a Slice?

* A slice is a view into a sequence (like part of an array or string).
* Syntax: &array[start..end]
* It does not own the data, just references it.
* Example: let sub = &arr[1..3];
* Comparison to JavaScript: Similar to using .slice() on arrays or strings, but with no copy and full safety.
* Let me know if you'd like a printable version or want this exported to PDF or HTML!
