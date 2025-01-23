# Vercel Study Guide

### 📄 Introduction to Vercel
- **What is Vercel?**
  - Vercel is a cloud platform for static sites and Serverless Functions, designed to enable developers to host and deploy websites and applications quickly and efficiently.

### 📦 Setting Up
- **Creating a Vercel Account**:
  - Go to the [Vercel website](https://vercel.com/) and sign up for an account.

### 📋 Deploying a Project
- **Deploying from GitHub**:
  1. Connect your GitHub account to Vercel.
  2. Import a repository from GitHub.
  3. Configure the project settings and click "Deploy".

- **Deploying a Static Site**:
  - You can also deploy a static site by dragging and dropping your project folder into the Vercel dashboard.

### 🔄 Vercel CLI
- **Installing Vercel CLI**:
```bash
npm install -g vercel
```

- **Deploying with Vercel CLI**:
```bash
vercel
```

- **Linking a Project**:
```bash
vercel link
```

### 📦 Environment Variables
- **Setting Up Environment Variables**:
  - Go to your project settings in the Vercel dashboard.
  - Under the "Environment Variables" section, add your variables.

### 📋 Custom Domains
- **Adding a Custom Domain**:
  1. Go to the "Domains" section in your project settings.
  2. Click "Add" and enter your custom domain.
  3. Follow the instructions to configure DNS settings.

### 🔄 Serverless Functions
- **Creating a Serverless Function**:
  - Create a folder named `api` in your project root.
  - Add a JavaScript file for your function:
```javascript
// api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello from Vercel!' });
}
```

### 📦 Analytics
- **Setting Up Vercel Analytics**:
  - Enable analytics in your project settings to monitor performance and traffic.

### 📜 Preview Deployments
- **Using Preview Deployments**:
  - Every time you push changes to your Git repository, Vercel automatically creates a preview deployment for you to review.

### 🔄 Integrations
- **Using Integrations**:
  - Vercel supports various integrations (e.g., with CMSs, databases) that can be configured in the project settings.
