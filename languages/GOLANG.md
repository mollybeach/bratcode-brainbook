# 🐹 Go (Golang) Study Guide with In-Depth Comments and Symbol Explanations

---

## 📜 Variables

```go
var name string = "John"       // Explicit type
age := 30                      // Short declaration with type inference
const city = "Paris"           // Constant value
```

* `var`: declares a variable, optionally with an explicit type.
* `:=`: shorthand for declaring and initializing; Go infers the type.
* `const`: creates an immutable, compile-time constant.
* **Comparison to JavaScript**: similar to `let` vs `const`, but `:=` is unique to Go.

---

## 🔄 Data Types

```go
var x int = 42
var y float64 = 3.14
var flag bool = true
var letter rune = 'A'         // Alias for int32, represents a Unicode code point
var message string = "Hello"
```

* `int`, `float64`, `bool`, `rune`, `string`: basic types.
* Go is statically typed, similar to Rust and unlike JavaScript.

---

## 📚 Functions and Closures

```go
func greet(name string) string {
    return fmt.Sprintf("Hello, %s!", name)
}

add := func(a int, b int) int {
    return a + b
}
```

* `func`: keyword to define a function.
* `fmt.Sprintf`: formats a string like `format!` in Rust.
* Closures (anonymous functions) are declared with `func(...)` inline.
* **Comparison to JavaScript**: Closures are like arrow functions but with stricter type rules.

---

## 📦 Structs and Methods

```go
type Person struct {
    Name string
    Age  int
}

func (p Person) Greet() string {
    return "Hi, I'm " + p.Name
}

person := Person{"Alice", 25}
fmt.Println(person.Greet())
```

* `struct`: defines a custom type.
* `(p Person)`: receiver type for methods, like `self` in Rust or `this` in JS.
* **Comparison to JavaScript**: Similar to classes but Go has no inheritance.

---

## 📋 Arrays and Slices

```go
arr := [3]string{"a", "b", "c"}  // Fixed-size array
slice := []string{"x", "y"}       // Slice (dynamic array)
slice = append(slice, "z")
```

* Arrays have fixed size; slices are more flexible.
* `append`: adds elements to a slice.
* **Comparison to JavaScript**: Slices are like JS arrays, but memory and capacity are more explicit.

---

## 🔄 Control Flow

```go
if age >= 18 {
    fmt.Println("Adult")
} else {
    fmt.Println("Minor")
}

switch day := 2; day {
case 1:
    fmt.Println("Monday")
case 2:
    fmt.Println("Tuesday")
default:
    fmt.Println("Another day")
}
```

* `if`/`else`, `switch`: standard control structures.
* `switch` cases do not fall through by default (unlike C).

---

## 🔁 Loops

```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}

count := 0
for count < 5 {
    fmt.Println(count)
    count++
}
```

* `for` is the only loop keyword in Go (used for all looping).
* Works like `for`, `while`, and `foreach` depending on usage.

---

## 🧩 Error Handling

```go
result, err := divide(10, 2)
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Result:", result)
}

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("division by zero")
    }
    return a / b, nil
}
```

* No exceptions; Go handles errors with multiple return values.
* `error` is a built-in interface type.

---

## ⚡ Goroutines and Channels

```go
func say(msg string) {
    fmt.Println(msg)
}

go say("Hello")

messages := make(chan string)
go func() {
    messages <- "ping"
}()
fmt.Println(<-messages)
```

* `go` keyword runs a function as a goroutine (lightweight thread).
* `chan`: used for communication between goroutines.
* `<-`: receive or send operator on a channel.

---

## 🧬 Interfaces

```go
type Speaker interface {
    Speak() string
}

type Cat struct{}

func (c Cat) Speak() string {
    return "Meow"
}

func talk(s Speaker) {
    fmt.Println(s.Speak())
}
```

* Interfaces define behavior without inheritance.
* Any type that implements the method is said to satisfy the interface.
* **Comparison to JavaScript**: Like duck typing, but enforced at compile time.

---

## 📦 Packages and Modules

```go
import (
    "fmt"
    "math"
)

func main() {
    fmt.Println(math.Sqrt(16))
}
```

* `import`: includes external packages.
* `go mod init <module>` creates a module project.

---

## ❗ Notes on Syntax Origins

* `:=` is unique to Go, introduced to simplify variable declarations.
* `func` from C, `interface` from Java.
* No parentheses in control flow (`if`, `for`) like Python.

---

Let me know if you’d like a diagram for goroutines or memory layout!
