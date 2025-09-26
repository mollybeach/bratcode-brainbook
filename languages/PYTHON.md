# Python Study Guide

### 📜 Variables
- **Declaration**: No explicit declaration needed, dynamic typing
- **Example**:
```python
name = "John"  # String
age = 30       # Integer
city = "New York"  # String
```

### 🔄 Data Types
- **Primitive Types**: `str`, `int`, `float`, `bool`, `NoneType`
- **Example**:
```python
str_value = "Hello, World!"  # String
int_value = 42                # Integer
float_value = 3.14            # Float
bool_value = True             # Boolean
none_value = None             # NoneType
```

### 📚 Functions
- **Function Definition**:
```python
def greet(name):
    return f"Hello, {name}!"
```
- **Lambda Function**:
```python
add = lambda a, b: a + b
```

### 📦 Classes and Objects
- **Class Definition**:
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def greet(self):
        return f"Hi, I'm {self.name}"
```
- **Creating an Object**:
```python
person = Person("Alice", 25)
print(person.greet())
```

### 📋 Lists
- **List Creation**:
```python
fruits = ["apple", "banana", "cherry"]
```
- **List Methods**:
```python
fruits.append("orange")  # Add to end
fruits.pop()             # Remove from end
fruits.remove("banana")  # Remove specific item
```

### 🔄 Control Flow
- **Conditional Statements**:
```python
if age >= 18:
    print("Adult")
else:
    print("Minor")
```
- **Match Statement (Python 3.10+)**:
```python
match day:
    case 1:
        print("Monday")
    case 2:
        print("Tuesday")
    case _:
        print("Another day")
```

### 🔁 Loops
- **For Loop**:
```python
for i in range(5):
    print(i)
```
- **While Loop**:
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

### 📅 Functions as First-Class Citizens
- **Passing Functions**:
```python
def apply_function(func, value):
    return func(value)

result = apply_function(lambda x: x * 2, 5)
print(result)  # Output: 10
```

### 🧩 Exception Handling
- **Try/Except Block**:
```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero!")
```

### ⚡ List Comprehensions
- **Creating Lists**:
```python
squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
