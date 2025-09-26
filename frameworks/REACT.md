# React Study Guide

### 📦 Components
- **Functional Component**:
```javascript
import React from 'react';

const Greeting = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
};
```
- **Class Component**:
```javascript
import React, { Component } from 'react';

class Greeting extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
```

### 🔄 Props
- **Passing Props**:
```javascript
<Greeting name="Alice" />
```
- **Accessing Props**:
```javascript
const Greeting = (props) => {
    return <h1>Hello, {props.name}!</h1>;
};
```

### 📋 State
- **Using State in Functional Components (Hooks)**:
```javascript
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
```
- **Using State in Class Components**:
```javascript
import React, { Component } from 'react';

class Counter extends Component {
    state = { count: 0 };

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
```

### 🔄 Lifecycle Methods
- **Class Component Lifecycle Methods**:
```javascript
class MyComponent extends Component {
    componentDidMount() {
        // Code to run after the component mounts
    }

    componentDidUpdate(prevProps, prevState) {
        // Code to run after updates
    }

    componentWillUnmount() {
        // Cleanup code before the component unmounts
    }
}
```
- **Using `useEffect` Hook**:
```javascript
import React, { useEffect } from 'react';

const MyComponent = () => {
    useEffect(() => {
        // Code to run after the component mounts or updates

        return () => {
            // Cleanup code before the component unmounts
        };
    }, []); // Empty array means it runs once on mount

    return <div>My Component</div>;
};
```

### 📅 Event Handling
- **Handling Events**:
```javascript
const Button = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return <button onClick={handleClick}>Click Me</button>;
};
```

### 📋 Conditional Rendering
- **Using Ternary Operator**:
```javascript
const Greeting = ({ isLoggedIn }) => {
    return (
        <div>
            {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
        </div>
    );
};
```
- **Using Logical AND**:
```javascript
const Notification = ({ message }) => {
    return <div>{message && <p>{message}</p>}</div>;
};
```

### 🔄 Lists and Keys
- **Rendering Lists**:
```javascript
const fruits = ['Apple', 'Banana', 'Cherry'];

const FruitList = () => {
    return (
        <ul>
            {fruits.map((fruit, index) => (
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    );
};
```

### ⚡ Forms
- **Controlled Components**:
```javascript
const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <form>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};
```

### 🧩 Context API
- **Creating Context**:
```javascript
const MyContext = React.createContext();

const MyProvider = ({ children }) => {
    const value = { /* context value */ };
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};
```
- **Using Context**:
```javascript
const MyComponent = () => {
    const context = useContext(MyContext);
    return <div>{context.value}</div>;
};
```
