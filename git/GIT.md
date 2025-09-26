# Git Study Guide

### 📄 Introduction to Git
- **What is Git?**
  - A distributed version control system for tracking changes in source code during software development.

### 📦 Setting Up
- **Installing Git**:
  - Download and install from the [official Git website](https://git-scm.com/).

### 📋 Basic Commands
- **Checking Git Version**:
```bash
git --version
```
- **Configuring User Information**:
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

### 🔄 Creating a Repository
- **Initializing a New Repository**:
```bash
git init
```
- **Cloning an Existing Repository**:
```bash
git clone https://github.com/username/repo.git
```

### 📚 Staging Changes
- **Adding Files to Staging Area**:
```bash
git add filename.txt
```
- **Adding All Changes**:
```bash
git add .
```

### 🔄 Committing Changes
- **Committing Staged Changes**:
```bash
git commit -m "Commit message"
```

### 📋 Viewing Changes
- **Viewing Status**:
```bash
git status
```
- **Viewing Commit History**:
```bash
git log
```
- **Viewing Changes**:
```bash
git diff
```

### 🔄 Branching
- **Creating a New Branch**:
```bash
git branch new-branch
```
- **Switching to a Branch**:
```bash
git checkout new-branch
```
- **Creating and Switching in One Command**:
```bash
git checkout -b new-branch
```

### 📦 Merging
- **Merging a Branch**:
```bash
git checkout main
git merge new-branch
```

### 🔄 Remote Repositories
- **Adding a Remote Repository**:
```bash
git remote add origin https://github.com/username/repo.git
```
- **Pushing Changes to Remote**:
```bash
git push origin main
```
- **Pulling Changes from Remote**:
```bash
git pull origin main
```

### 📋 Undoing Changes
- **Unstaging a File**:
```bash
git reset filename.txt
```
- **Reverting a Commit**:
```bash
git revert commit_hash
```
- **Resetting to a Previous Commit**:
```bash
git reset --hard commit_hash
```

### 🔄 Tags
- **Creating a Tag**:
```bash
git tag v1.0
```
- **Pushing Tags to Remote**:
```bash
git push origin v1.0
```

### 📜 Working with Remotes
- **Listing Remote Repositories**:
```bash
git remote -v
```
- **Removing a Remote**:
```bash
git remote remove origin
```
