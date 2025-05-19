# 🍎 macOS Developer Setup Guide

This guide walks through setting up a new macOS machine for full-stack, blockchain, iOS, and AI development. It includes all dependencies used across your work in React, Node, Solidity, Python, Swift, Go, Rust, Scala, and more — with proper environment configuration for all tools.

---

## ✅ 1. Xcode Tools & Homebrew

```bash
xcode-select --install
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Add Homebrew to your path:

```bash
echo 'eval "$\(/opt/homebrew/bin/brew shellenv\)"' >> ~/.zprofile
eval "$\(/opt/homebrew/bin/brew shellenv\)"
```

Verify:

```bash
brew doctor
brew --version
```

---

## ✅ 2. Core Tools

```bash
brew install git node yarn python scala java sbt r ruby
brew install postgresql mongodb redis
brew install docker kubectl terraform
brew install jq wget tree gh tmux fzf bat
brew install nvm pyenv pipx
```

---

## ✅ 3. Git Configuration

Set your global Git identity (this will be used for all Git commits):

```bash
git config --global user.name "myGitHubUserName"
git config --global user.email "myEmail@example.com"
```

> 💡 **Important:** Keep the double quotes (`"`) around your name and email — they are required, especially if your name contains spaces or special characters.

Configure Git to use SSH instead of HTTPS by default (recommended for authentication with GitHub):

```bash
git config --global url."git@github.com:".insteadOf "https://github.com/"
```

---

## ✅ 4. GitHub SSH Key Setup (macOS)

This command will:

* Generate a new SSH key pair using the Ed25519 algorithm and tag it with your email
* Start the SSH agent in the background
* Configure your SSH settings in `~/.ssh/config`
* Add your private key to the macOS keychain

### 🚀 Run this in Terminal:

* 🔁 IMPORTANT: Replace `youremail@example.com` with your actual GitHub email
* 🧠  Make sure to KEEP the double quotes around the email — they are required

```bash
ssh-keygen -t ed25519 -C "youremail@example.com" && \
eval "$(ssh-agent -s)" && \
echo "Host *" >> ~/.ssh/config && \
echo "  AddKeysToAgent yes" >> ~/.ssh/config && \
echo "  UseKeychain yes" >> ~/.ssh/config && \
echo "  IdentityFile ~/.ssh/id_ed25519" >> ~/.ssh/config && \
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

> 🧑‍💻 **Note:** After running the command, you’ll be prompted a few times — just **keep pressing Enter** to accept the defaults and skip the optional passphrase.

### 📋 Copy your public key to the clipboard:

```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

> 💡 After copying, paste the key into [GitHub SSH Settings](https://github.com/settings/ssh/new)

---

## 🔐 Adding the SSH Key to GitHub

When adding a **New SSH Key** in GitHub:

* **Title**: Anything you want — this is just for your own reference
  Example: `SSH_KEY_Molly_MacBook_M4`
* **Key type**: Leave as the default (`Authentication Key`)
* **Key example**:

  ```
  ssh-ed25519 AAAABBBBCCCCDDDD1111222233334444EEEEFFFFGGGGHHHH0000 youremail@example.com
  ```

> 💡 **Important:** Paste the entire key exactly as it appears — including the `ssh-ed25519` prefix and your email at the end.
> Don’t add line breaks, extra spaces, or quotation marks.

---

### ✅ Test your SSH connection to GitHub

```bash
ssh -T git@github.com
```

The first time you connect, you may see a warning like this:

```
The authenticity of host 'github.com (109.99.125.3)' can't be established.
ED25519 key fingerprint is SHA256:XxYyZz123FakeFingerprintABCDEFghijkLmnoPQRSTuvwxYZ890=
This key is not known by any other names.

Are you sure you want to continue connecting (yes/no/[fingerprint])? yes    # ⏎ Type "yes" and press Enter
```

📅 Then, if everything is set up correctly, you should see:

```
Warning: Permanently added 'github.com' (ED25519) to the list of known hosts.
Hi yourusername! You've successfully authenticated, but GitHub does not provide shell access.
```

That means your SSH key is set up correctly! 🔑

---

## ✅ 5. Go

Install Go using Homebrew:

```bash
brew install go
```

Add Go and Homebrew to your shell path by updating `.zprofile`:

```bash
# Add Homebrew environment setup (if not already present)
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> ~/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"

# Add Go's binary path
echo 'export PATH="/opt/homebrew/opt/go/libexec/bin:$PATH"' >> ~/.zprofile
source ~/.zprofile
```

Verify the installation:

```bash
go version
```

> 💡 You should see something like: `go version go1.24.3 darwin/arm64`

---

## ✅ 6. Rust

Install Rust using the official `rustup` installer:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

> ⏎ Press **Enter** to proceed with the default installation.
> If prompted with a warning about an existing Rust install, type **y** to continue.

---

### 🛠️ Add Cargo to your shell path:

```bash
echo 'source "$HOME/.cargo/env"' >> ~/.zprofile
source ~/.zprofile
```

> 🧠 **If `cargo` or `rustc` are still not found**, run this once in your terminal to load the environment:
>
> ```bash
> . "$HOME/.cargo/env"
> ```

---

### ✅ Verify Rust installation:

```bash
rustc --version
cargo --version
```

> 💡 You should see something like:
>
> ```
> rustc 1.87.0 (17067e9ac 2025-05-09)
> cargo 1.87.0 (b7ed5f0fa 2025-05-09)
> ```

---

### 📦 Install useful Rust tooling:

```bash
rustup component add clippy rustfmt rust-analyzer
brew install wasm-pack
```

---

## ✅ 7. Python

Install Python via Homebrew (recommended for macOS):

```bash
brew install python
```

This will install the latest version of `python3` and `pip3`.

---

### ⚙️ Fix `pip` command (optional)

```bash
sudo ln -s $(which pip3) /opt/homebrew/bin/pip
```

---

### 🧪 ✅ Verify installation:

```bash
python3 --version
pip3 --version
```

Expected output:

```
Python 3.12.2
pip 23.3.1 from /opt/homebrew/lib/python3.12/site-packages/pip (python 3.12)
```

---

### 📦 Optional: Install project dependencies safely

```bash
pip3 install --break-system-packages -r requirements.txt
```

Or:

```bash
pip install --break-system-packages -r requirements.txt
```

---

### 🔄 Optional: Make `--break-system-packages` behavior persistent

```bash
mkdir -p ~/Library/Application\ Support/pip
echo -e "[global]\nbreak-system-packages = true" >> ~/Library/Application\ Support/pip/pip.conf
```

---

## 📂 ✅ 8. Launchpad Developer Apps

Install GUI apps that show up in **Launchpad**:



```bash
### 💻 Install Full Xcode IDE rcommended for iOS/macOS dev
brew install --cask xcode
```

```bash
# Code Editors
brew install --cask visual-studio-code cursor github

# Infrastructure & Databases
brew install --cask docker postgres-unofficial insomnia warp

# Browsers (for web dev testing)
brew install --cask google-chrome firefox arc

# Design Tools
brew install --cask figma kap
```

> 💡 Once installed, launch each app manually once to complete macOS permissions setup.

---

## 🚀 ✅ 9. Blockchain / Web3 Tooling

```bash
npm install -g hardhat truffle ganache
brew tap foundry-rs/foundry && brew install foundry
brew install solidity
brew install aptos solana
```

---

## ☁️ ✅ 10. AWS Setup

```bash
brew install awscli
```

```bash
aws configure
```

Verify:

```bash
aws sts get-caller-identity
```

---

## 🌍 ✅ 11. GCP SDK Setup

```bash
brew install --cask google-cloud-sdk
```

```bash
gcloud init
gcloud auth login
```

---

## 🔳 ✅ 12. Azure CLI Setup

```bash
brew install azure-cli
az login
```

---

## 🌟 ✅ 13. Firebase CLI

```bash
npm install -g firebase-tools
firebase login
firebase init
```

---

## 📚 ✅ 14. Sample Project Cloning (via SSH)

```bash
git clone git@github.com:myGitHubUserName/myProjectName.git
cd myProjectName
make install-deps
```

---

## 📄 ✅ 15. Optional: VS Code Extensions

* Rust Analyzer
* ESLint + Prettier
* GitHub Copilot
* Solidity
* Python
* Docker
* GraphQL

---

## 🧠 You're now ready to develop:

* Full-stack apps with React + Node + GraphQL
* Scalable distributed systems in Scala, Go, and Rust
* Web3 DApps and smart contracts (Solidity, Hardhat, Foundry)
* AI-powered bots and tools (TensorFlow, Python)
* Data pipelines and analytics dashboards
* iOS apps with Swift + REST APIs
* DevOps pipelines and Docker-based CI/CD workflows

---

Happy hacking! 👩‍💻🍀
