# Solidity Study Guide

### 📄 Introduction to Solidity
- **What is Solidity?**
  - A high-level programming language for writing smart contracts on the Ethereum blockchain.

### 📦 Setting Up
- **Installing Solidity**:
```bash
npm install -g solc
```
- **Using Remix IDE**:
  - An online IDE for writing, testing, and deploying Solidity contracts.

### 📋 Basic Structure
- **Hello World Contract**:
```solidity
pragma solidity ^0.8.0;

contract HelloWorld {
    string public greeting = "Hello, World!";
}
```

### 🔄 Data Types
- **Value Types**:
  - `uint`, `int`, `bool`, `address`, `bytes`
- **Reference Types**:
  - `string`, `array`, `struct`, `mapping`

### 📚 Functions
- **Function Declaration**:
```solidity
function greet() public view returns (string memory) {
    return greeting;
}
```
- **Modifiers**:
```solidity
modifier onlyOwner() {
    require(msg.sender == owner);
    _;
}
```

### 📦 State Variables
- **Declaring State Variables**:
```solidity
address public owner;
uint256 public count;
```

### 🔄 Events
- **Defining and Emitting Events**:
```solidity
event NewGreeting(string greeting);

function setGreeting(string memory _greeting) public {
    greeting = _greeting;
    emit NewGreeting(_greeting);
}
```

### 📋 Control Structures
- **If-Else Statement**:
```solidity
if (count > 0) {
    count--;
} else {
    revert("Count cannot be negative");
}
```
- **Loops**:
```solidity
for (uint i = 0; i < 10; i++) {
    // Loop logic
}
```

### 📦 Arrays and Mappings
- **Dynamic Array**:
```solidity
uint[] public numbers;
```
- **Mapping**:
```solidity
mapping(address => uint) public balances;
```

### 🔒 Access Control
- **Using Modifiers**:
```solidity
function restrictedFunction() public onlyOwner {
    // Restricted logic
}
```

### 📜 Inheritance
- **Base Contract**:
```solidity
contract Base {
    function baseFunction() public pure returns (string memory) {
        return "Base Function";
    }
}
```
- **Derived Contract**:
```solidity
contract Derived is Base {
    function derivedFunction() public pure returns (string memory) {
        return "Derived Function";
    }
}
```

### 📈 Error Handling
- **Require Statement**:
```solidity
require(msg.value > 0, "Must send Ether");
```
- **Revert Statement**:
```solidity
revert("Transaction failed");
```

### 🔄 Testing and Deployment
- **Using Truffle**:
```bash
truffle init
truffle migrate
```
- **Using Hardhat**:
```bash
npx hardhat
```
