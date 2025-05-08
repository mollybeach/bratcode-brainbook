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

## ✅ 4. GitHub SSH Key Setup

```bash
ssh-keygen -t ed25519 -C "myEmail@example.com"
eval "$(ssh-agent -s)"

echo "Host *" >> ~/.ssh/config
echo "  AddKeysToAgent yes" >> ~/.ssh/config
echo "  UseKeychain yes" >> ~/.ssh/config
echo "  IdentityFile ~/.ssh/id_ed25519" >> ~/.ssh/config

ssh-add --apple-use-keychain ~/.ssh/id_ed25519
pbcopy < ~/.ssh/id_ed25519.pub
```

Paste the copied key into [GitHub SSH Settings](https://github.com/settings/ssh/new) and test:

```bash
ssh -T git@github.com
```

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
