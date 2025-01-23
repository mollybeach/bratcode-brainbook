# Java Study Guide

### 📄 Introduction to Java
- **What is Java?**
  - A high-level, object-oriented programming language designed to have as few implementation dependencies as possible.

### 📦 Setting Up
- **Installing Java**:
  - Download and install the JDK from the [official Oracle website](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html).
- **Setting Up Environment Variables**:
  - Set `JAVA_HOME` and update the `PATH` variable.

### 📋 Basic Structure
- **Hello World Program**:
```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

### 🔄 Data Types
- **Primitive Data Types**:
  - `int`, `double`, `char`, `boolean`
- **Reference Data Types**:
  - `String`, `Arrays`, `Classes`

### 📚 Variables
- **Declaring Variables**:
```java
int age = 30;
String name = "Alice";
```

### 🔄 Control Structures
- **If-Else Statement**:
```java
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}
```
- **Switch Statement**:
```java
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    default:
        System.out.println("Another day");
}
```

### 🔁 Loops
- **For Loop**:
```java
for (int i = 0; i < 5; i++) {
    System.out.println(i);
}
```
- **While Loop**:
```java
int count = 0;
while (count < 5) {
    System.out.println(count);
    count++;
}
```

### 📦 Methods
- **Defining a Method**:
```java
public static int add(int a, int b) {
    return a + b;
}
```
- **Calling a Method**:
```java
int sum = add(5, 10);
```

### 📦 Classes and Objects
- **Defining a Class**:
```java
public class Person {
    String name;
    int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String greet() {
        return "Hi, I'm " + name;
    }
}
```
- **Creating an Object**:
```java
Person person = new Person("Alice", 25);
System.out.println(person.greet());
```

### 📋 Exception Handling
- **Try-Catch Block**:
```java
try {
    int result = 10 / 0;
} catch (ArithmeticException e) {
    System.out.println("Cannot divide by zero!");
}
```

### 🔄 Collections
- **Using ArrayList**:
```java
import java.util.ArrayList;

ArrayList<String> fruits = new ArrayList<>();
fruits.add("Apple");
fruits.add("Banana");
```
- **Iterating Over a Collection**:
```java
for (String fruit : fruits) {
    System.out.println(fruit);
}
```

### 🔒 Access Modifiers
- **Public, Private, Protected**:
```java
public class Example {
    private int privateVar;
    protected int protectedVar;
    public int publicVar;
}
```

### 📜 Inheritance
- **Base Class**:
```java
public class Animal {
    public void sound() {
        System.out.println("Animal sound");
    }
}
```
- **Derived Class**:
```java
public class Dog extends Animal {
    @Override
    public void sound() {
        System.out.println("Bark");
    }
}
```
