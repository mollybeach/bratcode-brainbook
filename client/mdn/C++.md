# C++ Study Guide

### 📄 Introduction to C++
- **What is C++?**
  - A high-level programming language that supports object-oriented, procedural, and generic programming.

### 📦 Setting Up
- **Installing C++ Compiler**:
  - Install a compiler like GCC or use an IDE like Code::Blocks or Visual Studio.

### 📋 Basic Structure
- **Hello World Program**:
```cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
```

### 🔄 Data Types
- **Primitive Data Types**:
  - `int`, `float`, `double`, `char`, `bool`
- **User-Defined Data Types**:
  - `struct`, `class`, `enum`

### 📚 Variables
- **Declaring Variables**:
```cpp
int age = 30;
float salary = 50000.50;
char initial = 'A';
```

### 🔄 Control Structures
- **If-Else Statement**:
```cpp
if (age >= 18) {
    cout << "Adult" << endl;
} else {
    cout << "Minor" << endl;
}
```
- **Switch Statement**:
```cpp
switch (day) {
    case 1:
        cout << "Monday" << endl;
        break;
    case 2:
        cout << "Tuesday" << endl;
        break;
    default:
        cout << "Another day" << endl;
}
```

### 🔁 Loops
- **For Loop**:
```cpp
for (int i = 0; i < 5; i++) {
    cout << i << endl;
}
```
- **While Loop**:
```cpp
int count = 0;
while (count < 5) {
    cout << count << endl;
    count++;
}
```

### 📦 Functions
- **Defining a Function**:
```cpp
int add(int a, int b) {
    return a + b;
}
```
- **Calling a Function**:
```cpp
int sum = add(5, 10);
```

### 📦 Classes and Objects
- **Defining a Class**:
```cpp
class Person {
public:
    string name;
    int age;

    Person(string n, int a) {
        name = n;
        age = a;
    }

    string greet() {
        return "Hi, I'm " + name;
    }
};
```
- **Creating an Object**:
```cpp
Person person("Alice", 25);
cout << person.greet() << endl;
```

### 📋 Exception Handling
- **Try-Catch Block**:
```cpp
try {
    int result = 10 / 0; // This will cause an exception
} catch (const exception& e) {
    cout << "Error: " << e.what() << endl;
}
```

### 🔄 Standard Template Library (STL)
- **Using Vectors**:
```cpp
#include <vector>
vector<int> numbers = {1, 2, 3, 4, 5};
```
- **Iterating Over a Vector**:
```cpp
for (int num : numbers) {
    cout << num << endl;
}
```

### 🔒 Access Modifiers
- **Public, Private, Protected**:
```cpp
class Example {
private:
    int privateVar;
protected:
    int protectedVar;
public:
    int publicVar;
};
```

### 📜 Inheritance
- **Base Class**:
```cpp
class Animal {
public:
    void sound() {
        cout << "Animal sound" << endl;
    }
};
```
- **Derived Class**:
```cpp
class Dog : public Animal {
public:
    void sound() {
        cout << "Bark" << endl;
    }
};
```
