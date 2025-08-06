# 🪠 Windows Developer Setup Guide

This guide walks through setting up a **Windows 11** machine for full-stack, blockchain, AI, and cross-platform development. It includes environment setup for tools used in React, Node, Solidity, Python, Swift (via virtual machine), Go, Rust, Scala, and more.

---

## ✅ 1. Install Windows Subsystem for Linux (WSL)

Run this in **PowerShell as Administrator**:

```powershell
wsl --install
```

> 💡 This installs Ubuntu by default. You can later run `wsl` to access your Linux shell.

---

## ✅ 2. Install Windows Package Manager (`winget`)

Windows 11 includes `winget` by default. To verify:

```powershell
winget --version
```

If not installed, update Windows or get it from the Microsoft Store: [App Installer](https://apps.microsoft.com/store/detail/app-installer/9NBLGGH4NNS1)

---

## ✅ 3. Install Core Tools

Run in **PowerShell (Admin)**:

```powershell
# Developer tools
winget install -e --id Git.Git
winget install -e --id OpenJS.NodeJS.LTS
winget install -e --id Yarn.Yarn
winget install -e --id Python.Python.3
winget install -e --id EclipseAdoptium.Temurin.17.JDK
winget install -e --id SBT.SBT
winget install -e --id MongoDB.MongoDBCompass
winget install -e --id Redis.Redis
winget install -e --id PostgreSQL.PostgreSQL
winget install -e --id Docker.DockerDesktop
winget install -e --id Hashicorp.Terraform
winget install -e --id Rustlang.Rustup
winget install -e --id GoLang.Go
winget install -e --id Microsoft.WindowsTerminal
```

---

## ✅ 4. Git Configuration
Set your global Git identity (this will be used for all Git commits):

```bash
git config --global user.name "yourGitHubUsername"
git config --global user.email "youremail@example.com"
git config --global url."git@github.com:".insteadOf "https://github.com/"
```
> 💡 **Important:** Keep the double quotes (`"`) around your name and email — they are required, especially if your name contains spaces or special characters.

Configure Git to use SSH instead of HTTPS by default (recommended for authentication with GitHub):
```bash
git config --global url."git@github.com:".insteadOf "https://github.com/"
```

---

## ✅ 5. GitHub SSH Key Setup (Windows)

This command will:

* Generate a new SSH key pair using the Ed25519 algorithm and tag it with your email
* Start the SSH agent in the background
* Configure your SSH settings in `~/.ssh/config`
* Add your private key to the macOS keychain

  
### 🚀 Run this in **Git Bash** or **Ubuntu WSL**:

* 🔁 IMPORTANT: Replace `youremail@example.com` with your actual GitHub email
* 🧠  Make sure to KEEP the double quotes around the email — they are required

```bash
ssh-keygen -t ed25519 -C "youremail@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```
> 🧑‍💻 **Note:** After running the command, you’ll be prompted a few times — just **keep pressing Enter** to accept the defaults and skip the optional passphrase.

### 📋 Copy your public key to the clipboard:

```bash
cat ~/.ssh/id_ed25519.pub | clip.exe
```

> 💡 After copying, paste the key into: [https://github.com/settings/ssh/new](https://github.com/settings/ssh/new)

---

## 🔐 Adding the SSH Key to GitHub

When adding a **New SSH Key** in GitHub:

* **Title**: Anything you want — this is just for your own reference
  Example: `SSH_KEY_JOHN_MacBook_M4`
* **Key type**: Leave as the default (`Authentication Key`)
* **Key example**:

  ```
  ssh-ed25519 AAAABBBBCCCCDDDD1111222233334444EEEEFFFFGGGGHHHH0000 youremail@example.com
  ```

> 💡 **Important:** Paste the entire key exactly as it appears — including the `ssh-ed25519` prefix and your email at the end.
> Don’t add line breaks, extra spaces, or quotation marks.

---

## ✅ 6. Rust Setup

```bash
rustup install stable
rustup component add clippy rustfmt rust-analyzer
```

Verify:

```bash
rustc --version
cargo --version
```

---

## ✅ 7. Python Setup

Python is installed via winget, but use `pyenv` for version control inside WSL:

```bash
curl https://pyenv.run | bash
```

Add to `~/.bashrc`:

```bash
export PATH="$HOME/.pyenv/bin:$PATH"
eval "$(pyenv init --path)"
eval "$(pyenv virtualenv-init -)"
```

Reload:

```bash
source ~/.bashrc
```

Install Python:

```bash
pyenv install 3.12.2
pyenv global 3.12.2
```

---

## ✅ 8. Node.js and NVM (via WSL)

Install `nvm`:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm install --lts
nvm use --lts
```

---

## ✅ 9. VS Code & Extensions

```powershell
winget install -e --id Microsoft.VisualStudioCode
```

Recommended extensions:

* Rust Analyzer
* Python
* ESLint + Prettier
* GitHub Copilot
* Solidity
* Docker
* GraphQL

---

## ✅ 10. Developer Apps

```powershell
# Terminal & Shell
winget install -e --id Microsoft.WindowsTerminal
winget install -e --id Git.Git

# Browsers
winget install -e --id Google.Chrome
winget install -e --id Mozilla.Firefox

# Design
winget install -e --id Figma.Figma
winget install -e --id Kap.Kap

# Productivity
winget install -e --id Warp.Dev
winget install -e --id Postman.Postman
winget install -e --id Insomnia.Insomnia
```

---

## ✅ 11. Blockchain / Web3 Tooling

```bash
npm install -g hardhat truffle ganache
curl -L https://foundry.paradigm.xyz | bash
source ~/.bashrc
foundryup
```

```bash
brew install solidity
brew install aptos solana
brew install ipfs
```

> Or use the respective Windows installers for Aptos and Solana CLI from their official sites.

---

## ✅ 12. Cloud SDKs

### AWS

```bash
winget install -e --id Amazon.AWSCLI
aws configure
```

### GCP

```bash
winget install -e --id Google.CloudSDK
gcloud init
```

### Azure

```bash
winget install -e --id Microsoft.AzureCLI
az login
```

---

## ✅ 13. Firebase CLI

```bash
npm install -g firebase-tools
firebase login
firebase init
```

---

## ✅ 14. Optional: iOS Dev via VM (for Swift)

You can’t run Xcode natively on Windows. Use a **macOS VM** with UTM or rent Mac-in-the-cloud:

* [https://www.macincloud.com/](https://www.macincloud.com/)
* [https://www.macstadium.com/](https://www.macstadium.com/)

Or use Swift CLI:

```powershell
winget install -e --id Swift.Swift
```

---

## ✅ 15. Sample Project Setup

Clone via SSH:

```bash
git clone git@github.com:yourusername/yourproject.git
cd yourproject
make install-deps
```

---

## 🧠 You're Now Ready To Develop

* Full-stack apps (React, Node, GraphQL)
* Blockchain DApps (Solidity, Hardhat, Foundry)
* Cross-platform systems (Rust, Go, Scala)
* AI and ML workflows (Python, Jupyter, Docker)
* Cloud & CI/CD (Terraform, Docker, GitHub Actions)

---

Happy hacking! 👩‍💻
