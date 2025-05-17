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
brew install git node python scala java sbt r ruby
brew install postgresql mongodb redis
brew install docker kubectl terraform
brew install jq wget tree gh tmux fzf bat
brew install nvm pyenv pipx
brew install --cask visual-studio-code iterm2 blender unity-hub
```

---

## ✅ 3. Git Configuration

```bash
git config --global user.name "myGitHubUserName"
git config --global user.email "myEmail@example.com"
```

Use SSH instead of HTTPS by default:

```bash
git config --global url."git@github.com:".insteadOf "https://github.com/"
```

---

## ✅ 4. GitHub SSH Key Setup (macOS)

This command will:

- Generate a new SSH key pair using the Ed25519 algorithm and tag it with your email
- Start the SSH agent in the background
- Configure your SSH settings in `~/.ssh/config`
- Add your private key to the macOS keychain

### 🚀 Run this in Terminal:
```bash
# Replace with your GitHub email address
ssh-keygen -t ed25519 -C "youremail@example.com" && \
eval "$(ssh-agent -s)" && \
echo "Host *" >> ~/.ssh/config && \
echo "  AddKeysToAgent yes" >> ~/.ssh/config && \
echo "  UseKeychain yes" >> ~/.ssh/config && \
echo "  IdentityFile ~/.ssh/id_ed25519" >> ~/.ssh/config && \
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

### 📋 Copy your public key to the clipboard:
```bash
pbcopy < ~/.ssh/id_ed25519.pub
```

> 💡 After copying, paste the key into [GitHub SSH Settings](https://github.com/settings/ssh/new)

---

## 🔐 Adding the SSH Key to GitHub

When adding a **New SSH Key** in GitHub:

- **Title**: Anything you want — this is just for your own reference.  
  Example: `SSH_KEY_Molly_MacBook_M4`
- **Key type**: Leave as the default (`Authentication Key`)
- **Key example**:
  ```
  ssh-ed25519 AAAABBBBCCCCDDDD1111222233334444EEEEFFFFGGGGHHHH0000 youremail@example.com
  ```

> 💡 **Important:** Paste the entire key exactly as it appears — including the `ssh-ed25519` prefix and your email at the end.  
> Don’t add line breaks, extra spaces, or quotation marks.

---

### ✅ Test your SSH connection to GitHub

After saving the key in GitHub, run:

```bash
ssh -T git@github.com
```

You should see:
```
Hi your-username! You've successfully authenticated, but GitHub does not provide shell access.
```

That means your SSH key is set up correctly! 🔑

---

## ✅ 5. Go

```bash
brew install go
```

Add Go to your path:

```bash
echo 'export PATH="/opt/homebrew/opt/go/libexec/bin:$PATH"' >> ~/.zprofile
source ~/.zprofile
go version
```

---

## ✅ 6. Rust

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Add Cargo to your path:

```bash
echo 'source $HOME/.cargo/env' >> ~/.zprofile
source ~/.zprofile
cargo --version
```

Install useful Rust tools:

```bash
rustup component add clippy rustfmt rust-analyzer
brew install wasm-pack
```

---

## ✅ 7. Python

If `pip3` is available but `pip` is not:

```bash
sudo ln -s $(which pip3) /opt/homebrew/bin/pip
```

To enable installation in the Homebrew Python environment:

```bash
pip3 install --break-system-packages -r requirements.txt
```

Make it persistent:

```bash
mkdir -p ~/Library/Application\ Support/pip
echo -e "[global]\nbreak-system-packages = true" >> ~/Library/Application\ Support/pip/pip.conf
```

---

## ✅ 8. Blockchain / Web3 Tooling

```bash
npm install -g hardhat truffle ganache
brew tap foundry-rs/foundry && brew install foundry
brew install solidity
brew install aptos solana
```

---

## ✅ 9. AWS Setup

Install AWS CLI:

```bash
brew install awscli
```

Configure your AWS credentials:

```bash
aws configure
```

You'll be prompted for:

* AWS Access Key ID
* AWS Secret Access Key
* Default region (e.g. us-west-2)
* Default output format (e.g. json)

Verify it's working:

```bash
aws sts get-caller-identity
```

---

## ✅ 10. GCP SDK Setup

```bash
brew install --cask google-cloud-sdk
```

Initialize the CLI:

```bash
gcloud init
```

Authenticate:

```bash
gcloud auth login
```

---

## ✅ 11. Azure CLI Setup

```bash
brew install azure-cli
```

Login to your Azure account:

```bash
az login
```

---

## ✅ 12. Firebase CLI

```bash
npm install -g firebase-tools
```

Login and initialize a project:

```bash
firebase login
firebase init
```

---

## ✅ 10. Sample Project Cloning (via SSH)

```bash
git clone git@github.com:myGitHubUserName/myProjectName.git
cd myProjectName
make install-deps
```

---

## ✅ 11. Optional: VS Code Extensions

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
