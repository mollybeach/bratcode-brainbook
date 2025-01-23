# NPM Study Guide

### 📄 Introduction to NPM
- **What is NPM?**
  - NPM (Node Package Manager) is the default package manager for Node.js, allowing developers to install, share, and manage dependencies in their projects.

### 📦 Setting Up
- **Installing Node.js and NPM**:
  - Download and install from the [official Node.js website](https://nodejs.org/). NPM is included with Node.js.

### 📋 Basic Commands
- **Checking NPM Version**:
```bash
npm --version
```
- **Initializing a New Project**:
```bash
npm init
```
- **Creating a Package.json File**:
```bash
npm init -y  # Initializes with default settings
```

### 🔄 Installing Packages
- **Installing a Package**:
```bash
npm install package-name
```
- **Installing a Package Globally**:
```bash
npm install -g package-name
```
- **Installing Specific Version**:
```bash
npm install package-name@1.0.0
```

### 📦 Managing Dependencies
- **Viewing Installed Packages**:
```bash
npm list
```
- **Removing a Package**:
```bash
npm uninstall package-name
```
- **Updating a Package**:
```bash
npm update package-name
```

### 📋 Package.json File
- **Understanding package.json**:
  - Contains metadata about the project, including dependencies, scripts, and versioning.
- **Example package.json**:
```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "keywords": [
    "sample",
    "project",
    "npm"
  ],
  "author": "Your Name",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.10.9"
  },
  "devDependencies": {
    "jest": "^26.6.0",
    "webpack": "^5.11.0"
  },
  "peerDependencies": {
    "react": "^17.0.0"
  },
  "optionalDependencies": {
    "fsevents": "^2.3.2"
  },
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  },
  "os": [
    "darwin",
    "linux"
  ],
  "cpu": [
    "x64",
    "arm"
  ],
  "homepage": "https://example.com",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/my-project.git"
  },
  "bugs": {
    "url": "https://github.com/username/my-project/issues"
  },
  "private": true
}
```

### 🔄 Running Scripts
- **Running a Script**:
```bash
npm run script-name
```
- **Example**:
```bash
npm run start
```

### 📦 Using NPM with Git
- **Ignoring Node Modules**:
  - Add `node_modules/` to your `.gitignore` file to prevent committing dependencies.

### 🔄 Publishing Packages
- **Publishing a Package**:
```bash
npm publish
```
- **Setting Up a Package for Publishing**:
  - Ensure your package.json has a unique name and version.

### 📋 NPM Configurations
- **Viewing Configuration**:
```bash
npm config list
```
- **Setting a Configuration**:
```bash
npm config set key value
```

### 🔄 NPM Audit
- **Checking for Vulnerabilities**:
```bash
npm audit
```
- **Fixing Vulnerabilities**:
```bash
npm audit fix
```
