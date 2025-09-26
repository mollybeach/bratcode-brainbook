  # Root Makefile for neuronet-consensus

# -------------------------
# Variables
# -------------------------
RUST_SIGN_MANIFEST=sdk/node/sync/Cargo.toml
MODEL_PATHS=src/models/training/models/peft_model/adapter_model.safetensors
BLS_TEST_PATH=./tests/blockchain
VALIDATOR_TEST_PATH=./tests/consensus
IPFS_TEST_PATH=./tests/utils
TRAINING_PATH=src/models/training
EVALUATION_PATH=src/models/evaluation
API_PATH=src/api

# -------------------------
# Test Paths
# -------------------------
TEST_PATHS=./tests/unit ./tests/integration ./tests/contracts ./tests/api ./tests/utils ./tests/models ./tests/blockchain ./tests/consensus ./tests/sdk

# -------------------------
# Short Aliases
# -------------------------
t: test-all
tc: test-all-coverage
fp: full-pipeline
dn: down
upb: up

# -------------------------
# Dependencies Installation
# -------------------------
install-go:
	@echo "📦 Installing Go 1.21.6..."
	@if [ "$(shell uname)" = "Darwin" ]; then \
		echo "Installing Go for macOS..."; \
		brew install go@1.21; \
	elif [ "$(shell uname)" = "Linux" ]; then \
		ARCH=$(shell uname -m); \
		if [ "$$ARCH" = "aarch64" ]; then \
			wget https://go.dev/dl/go1.21.6.linux-arm64.tar.gz; \
			sudo rm -rf /usr/local/go; \
			sudo tar -C /usr/local -xzf go1.21.6.linux-arm64.tar.gz; \
		else \
			wget https://go.dev/dl/go1.21.6.linux-amd64.tar.gz; \
			sudo rm -rf /usr/local/go; \
			sudo tar -C /usr/local -xzf go1.21.6.linux-amd64.tar.gz; \
		fi; \
		echo 'export PATH=$$PATH:/usr/local/go/bin' >> ~/.bashrc; \
		source ~/.bashrc; \
	else \
		echo "Unsupported operating system"; \
		exit 1; \
	fi
	@echo "✅ Go installation complete"

install-rust:
	@echo "📦 Checking for Rust (cargo)..."
	@if ! command -v cargo >/dev/null 2>&1; then \
		echo "Installing Rust..."; \
		curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh -s -- -y; \
		echo 'source $$HOME/.cargo/env' >> $$HOME/.bashrc; \
		source $$HOME/.cargo/env; \
	else \
		echo "Rust (cargo) already installed."; \
	fi
	@cargo --version
	@echo "✅ Rust installation complete"

install-node:
	@echo "📦 Checking for Node.js (node & npm)..."
	@if ! command -v node >/dev/null 2>&1 || ! command -v npm >/dev/null 2>&1; then \
		if [ "$(shell uname)" = "Darwin" ]; then \
			echo "Installing Node.js for macOS..."; \
			brew install node; \
		elif [ "$(shell uname)" = "Linux" ]; then \
			echo "Installing Node.js for Linux..."; \
			curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -; \
			sudo apt-get install -y nodejs; \
			if ! command -v npm >/dev/null 2>&1; then \
				echo "Falling back to sudo apt install npm..."; \
				sudo apt-get install -y npm; \
			fi; \
		else \
			echo "Unsupported operating system for Node.js install"; \
			exit 1; \
		fi; \
	else \
		echo "Node.js (node & npm) already installed."; \
	fi
	@node --version
	@npm --version
	@echo "✅ Node.js installation complete"

install-deps: install-go install-rust install-node
	# Install Go dependencies
	go mod tidy
	# Install Rust dependencies
	cargo build --manifest-path $(RUST_SIGN_MANIFEST)
	# Install Python dependencies
	pip install -r requirements.txt
	# Install Node.js dependencies
	npm install

# -------------------------
# Docker Commands
# -------------------------
up:
	docker-compose up --build

down:
	docker-compose down

rebuild:
	docker-compose build --no-cache

start:
	docker-compose start

stop:
	docker-compose stop

ps:
	docker-compose ps

clean:
	docker system prune -af

# -------------------------
# Rust - Model Signing
# -------------------------
build-sign:
	cargo build --release --manifest-path $(RUST_SIGN_MANIFEST)

sign-models:
	@for model in $(MODEL_PATHS); do \
		cargo run --manifest-path $(RUST_SIGN_MANIFEST) $$model; \
	done

# -------------------------
# Python Scripts
# -------------------------
.PHONY: run-py-%
run-py-%:
	python3 scripts/tools/$*.py

run-api:
	PYTHONPATH=$(shell pwd) uvicorn $(API_PATH).server:app --host 0.0.0.0 --port 7545

run-server:
	@echo "🚀 Starting server..."
	. .venv/bin/activate && PYTHONPATH=$(shell pwd) python $(API_PATH)/server.py

stop-server:
	@pkill -f "python $(API_PATH)/server.py" || true

restart-server: stop-server run-server
	@echo "✅ Server restarted"

train-models:
	python3 $(TRAINING_PATH)/train_mot.py

eval-model:
	python3 $(EVALUATION_PATH)/model_evaluation.py

inspect-model:
	python3 scripts/tools/inspect_model.py

generate-models:
	python3 scripts/tools/generate_all_models.py

# -------------------------
# Training Commands
# -------------------------
train-finetune:
	python3 $(TRAINING_PATH)/finetune_with_lora.py

train-sft:
	python3 $(TRAINING_PATH)/sft_trainer.py

train-base:
	python3 $(TRAINING_PATH)/base_trainer.py

setup-training:
	cd $(TRAINING_PATH) && bash sh/setup_and_train.sh

# -------------------------
# Evaluation Commands
# -------------------------
evaluate-model:
	python3 $(EVALUATION_PATH)/model_evaluation.py

evaluate-update:
	python3 scripts/tools/evaluate_update.py

# -------------------------
# Full Pipeline
# -------------------------
full-pipeline: generate-models sign-models run-evm-main

# -------------------------
# Go - Node Simulation
# -------------------------
run-validator-sim:
	go run scripts/tools/validator-sim

run-node-training:
	go run scripts/tools/node-training

test-ai-tx:
	go test $(AI_TX_TEST_PATH) $(GO_TEST_ARGS)

run-evm-main:
	go run src/blockchain/main.go

# -------------------------
# Rust - Node Sync
# -------------------------
run-rust-node-sync:
	cargo run --manifest-path $(RUST_SIGN_MANIFEST)

# -------------------------
# Contracts
# -------------------------
start-node:
	npx hardhat node

compile-contracts:
	npx hardhat compile

deploy-contracts: compile-contracts
	@echo "📦 Deploying contracts and Updating Env With New ContractAddresses.."
	@npx hardhat run scripts/deployment/deploy_all_contracts.mjs --network lcai_testnet
	@echo "✅ Contracts deployed"

# -------------------------
# Tests
# -------------------------
PYTEST_ARGS ?= -v
GO_TEST_ARGS ?= -v
TEST_PATH ?= ./tests
MODEL_TEST_PATH ?= tests/models/test_model_evaluation.py
BYTE_RANGE_TEST_PATH ?= tests/utils/test_byte_range_hasher.py
API_BYTE_RANGE_TEST_PATH ?= tests/api/test_api_byte_range.py
INTEGRATION_TEST_PATH ?= ./tests/blockchain
AI_TX_TEST_PATH ?= ./tests/blockchain

test-model:
	PYTHONPATH=$(shell pwd) pytest $(MODEL_TEST_PATH) $(PYTEST_ARGS)

test-byte-range:
	PYTHONPATH=$(shell pwd) pytest $(BYTE_RANGE_TEST_PATH) $(PYTEST_ARGS)

test-api-byte-range:
	PYTHONPATH=$(shell pwd) pytest $(API_BYTE_RANGE_TEST_PATH) $(PYTEST_ARGS)

test-model-coverage:
	PYTHONPATH=$(shell pwd) pytest $(MODEL_TEST_PATH) --cov=src/models $(PYTEST_ARGS)

test-byte-range-coverage:
	PYTHONPATH=$(shell pwd) pytest $(BYTE_RANGE_TEST_PATH) --cov=src/utils/byte_range_hasher $(PYTEST_ARGS)
#test-integration: go test $(INTEGRATION_TEST_PATH) $(GO_TEST_ARGS)

test-go-coverage:
	go test $(INTEGRATION_TEST_PATH) $(AI_TX_TEST_PATH) -coverprofile=coverage.out

test-all:
	@echo "Running all tests..."
	@for path in $(TEST_PATHS); do \
		if [ -d "$$path" ]; then \
			echo "Testing $$path..."; \
			if [[ "$$path" == *"contracts"* ]]; then \
				forge test --match-path "$$path/*.t.sol"; \
			else \
				python3 -m pytest $$path -v; \
			fi \
		fi \
	done

test-unit:
	@echo "Running unit tests..."
	python3 -m pytest tests/unit -v

test-integration:
	@echo "Running integration tests..."
	python3 -m pytest tests/integration -v

test-contracts:
	@echo "Running contract tests..."
	forge test --match-path "tests/blockchain/contracts/*.t.sol"

test-api:
	@echo "Running API tests..."
	python3 -m pytest tests/api -v

test-utils:
	@echo "Running utility tests..."
	python3 -m pytest tests/utils -v

test-models:
	@echo "Running model tests..."
	python3 -m pytest tests/models -v

test-blockchain:
	@echo "Running blockchain tests..."
	python3 -m pytest tests/blockchain -v

test-consensus:
	@echo "Running consensus tests..."
	python3 -m pytest tests/consensus -v

test-sdk:
	@echo "Running SDK tests..."
	python3 -m pytest tests/sdk -v

test-all-coverage:
	@echo "Running all tests with coverage..."
	@for path in $(TEST_PATHS); do \
		if [ -d "$$path" ]; then \
			echo "Testing $$path with coverage..."; \
			if [[ "$$path" == *"contracts"* ]]; then \
				forge coverage --match-path "$$path/*.t.sol"; \
			else \
				python3 -m pytest $$path --cov=src --cov-report=term-missing -v; \
			fi \
		fi \
	done

clean-tests:
	rm -f coverage.out
	rm -rf .coverage
	rm -rf htmlcov
	rm -rf .pytest_cache

# Test Commands
test-rewards:
	@echo "Testing reward distribution system..."
	npx hardhat run scripts/tools/test_reward_distribution.js --network localhost

test-chat-flow:
	@echo "🧪 Running ModelReward Chat Flow Test..."
	@npx hardhat test tests/blockchain/hardhat/ModelRewardChatFlow.test.js --network lcai_testnet
	@echo "✅ Test complete"

# -------------------------
# BLS Signature Commands
# -------------------------
test-bls:
	go test $(BLS_TEST_PATH) $(GO_TEST_ARGS)

test-validator:
	go test $(VALIDATOR_TEST_PATH) $(GO_TEST_ARGS)

run-bls-validator:
	go run src/blockchain/validator_sim/bls_validator.go

# -------------------------
# IPFS Commands
# -------------------------
run-ipfs-node:
	ipfs daemon

upload-model:
	go run src/utils/ipfs/client.go upload

download-model:
	go run src/utils/ipfs/client.go download

# -------------------------
# Monitoring Commands
# -------------------------
monitor-bls-metrics:
	@echo "Monitoring BLS metrics..."
	curl http://localhost:9090/metrics | grep bls

monitor-validator-performance:
	@echo "Monitoring validator performance metrics..."
	curl http://localhost:9090/metrics | grep validator

# -------------------------
# API Server Commands
# -------------------------
run-api-server:
	PYTHONPATH=$(shell pwd) uvicorn $(API_PATH).server:app --reload

stop-api-server:
	@pkill -f "uvicorn $(API_PATH).server:app" || true

restart-api-server: stop-api-server run-api-server

list-models:
	curl -u admin:admin http://localhost:8000/models/demo_model/versions || true
	curl -u admin:admin http://localhost:8000/models/peft_model/versions || true

list-validators:
	curl -u admin:admin http://localhost:8000/validators/0xValidatorA || true
	curl -u admin:admin http://localhost:8000/validators/0xValidatorB || true

# -------------------------
# API Testing Commands
# -------------------------
test-list-model-versions:
	@echo "Testing: List all versions for demo_model and peft_model"
	curl -u admin:admin http://localhost:8000/models/demo_model/versions || true
	curl -u admin:admin http://localhost:8000/models/peft_model/versions || true

test-get-model-metadata:
	@echo "Testing: Get metadata for demo_model v1"
	curl -u admin:admin "http://localhost:8000/models/demo_model?version=v1" || true

test-get-validator:
	@echo "Testing: Get info for validator 0xValidatorA and 0xValidatorB"
	curl -u admin:admin http://localhost:8000/validators/0xValidatorA || true
	curl -u admin:admin http://localhost:8000/validators/0xValidatorB || true

test-inference-result:
	@echo "Testing: Simulate and fetch inference result for testhash123 (demo_model v2)"
	curl -u admin:admin "http://localhost:8000/inference_results/testhash123?model_id=demo_model&version=v2" || true

test-swagger-ui:
	@echo "Open http://localhost:8000/docs in your browser for the Swagger UI."

test-evaluate-model:
	@echo "Testing: Evaluate demo_model v1 with sample features"
	curl -u admin:admin -X POST \
	    -H "Content-Type: application/json" \
	    -d '{"features": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}' \
	    http://localhost:8000/models/demo_model/evaluate?version=v1

curl-evaluate-model:
	@echo "Direct curl: Evaluate demo_model v1 with sample features (prevents zsh globbing)"
	curl -u admin:admin -X POST \
	    -H "Content-Type: application/json" \
	    -d '{"features": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]}' \
	    'http://localhost:8000/models/demo_model/evaluate?version=v1'

# Byte-range hash validation example
hash-demo-model-byte-ranges:
	@echo "Hashing byte ranges for demo_model v1 via API..."
	curl -u admin:admin -X POST \
	  	-H "Content-Type: application/json" \
	  	-d '{"version": "v1", "ranges": [[0, 200], [1024, 200], [1048, 200]]}' \
	  	http://localhost:8000/models/demo_model/hash_ranges | jq

# -------------------------
# Model Validation Commands
# -------------------------
validate-model-hash:
	@echo "Hashing a model using the validation tool..."
	python3 scripts/tools/validate_models.py hash -m src/models/training/models/peft_model/adapter_model.safetensors --standard

validate-model-custom-ranges:
	@echo "Hashing a model with custom byte ranges..."
	python3 scripts/tools/validate_models.py hash -m src/models/training/models/peft_model/adapter_model.safetensors -r 0,200 1024,200 1048,200

batch-validate-models:
	@echo "Batch validating models using config file..."
	python3 scripts/tools/validate_models.py batch -c scripts/tools/validation_config.json -o output/validation_results.json

validate-model-api:
	@echo "Validating model using API endpoint..."
	python3 scripts/tools/validate_models.py api -u http://localhost:8000 -m demo_model -v v1 --standard --auth admin:admin

# Make the scripts executable
chmod-validation-script:
	chmod +x scripts/tools/validate_models.py

# -------------------------
# Model Loading Commands
# -------------------------
test-model-loader:
	PYTHONPATH=$(pwd) pytest tests/models/test_model_loader.py $(PYTEST_ARGS)

test-model-loader-coverage:
	PYTHONPATH=$(pwd) pytest tests/models/test_model_loader.py --cov=src/models $(PYTEST_ARGS)

load-demo-model:
	@echo "Loading demo model with validation via API endpoint..."
	curl -u admin:admin -X GET \
	  "http://localhost:8000/models/demo_model/load?validate=true" | jq

# -------------------------
# ZK Proof Research & Implementation
# -------------------------
zk-proof-setup:
	@echo "Setting up ZK proof environment..."
	pip install circom-helper snarkjs py-zkp

zk-proof-demo:
	@echo "Running ZK proof demonstration..."
	python3 scripts/tools/zk_proof_demo.py

# -------------------------
# AI-assisted Consensus
# -------------------------
run-ai-consensus:
	@echo "Starting AI-assisted consensus demonstration..."
	python3 scripts/tools/ai_consensus_demo.py

test-ai-scoring:
	@echo "Testing AI-based validator scoring algorithm..."
	python3 scripts/tools/test_ai_scoring.py

# -------------------------
# Multi-factor Validator Selection
# -------------------------
run-validator-selection:
	@echo "Running multi-factor validator selection..."
	go run src/blockchain/validator_sim/multi_factor_selection.go

test-validator-selection:
	@echo "Testing validator selection algorithms..."
	go test src/blockchain/validator_sim/selection_test.go

# -------------------------
# JSON-RPC Endpoints
# -------------------------
run-json-rpc-server:
	@echo "Starting JSON-RPC server with weight diff endpoint..."
	go run src/blockchain/api/rpc/server.go

test-weight-diff-upload:
	@echo "Testing weight diff upload endpoint..."
	curl -X POST -H "Content-Type: application/json" \
		-d '{"model_id":"demo_model","version":"v1","diff_data":"base64encodeddata"}' \
		https://light-testnet-rpc.lightchain.ai/weight_diff

# -------------------------
# Storage Usage Tracking
# -------------------------
run-storage-tracker:
	@echo "Starting storage usage tracking system..."
	python3 scripts/monitoring/storage_tracker.py

generate-storage-report:
	@echo "Generating storage usage report..."
	python3 scripts/monitoring/generate_storage_report.py

submit-model:
	curl -u admin:admin -X POST http://localhost:7545/submit -H "Content-Type: application/json" -d '{"model_data": {"name": "test_model", "version": "v1"}}'

# Fund MetaMask wallet from faucet
fund-wallet:
	@echo "Funding MetaMask wallet from faucet..."
	npx hardhat run scripts/tools/fund_wallet.js --network lcai_testnet

# -------------------------
# Frontend (lcai-chat) Commands
# -------------------------
run-chat-dev:
	cd lcai-chat && npm run dev

jupyter-lab:
	jupyter lab --notebook-dir=.

# -------------------------
# H200 Setup and Sync
# -------------------------
h200-rm:
	ssh h200 "rm -rf neuronet-consensus"

h200-pipeline:
	@echo "================================================================================"
	@echo "\033[1;35m🚀 H200 PIPELINE: FULL REMOTE DEPLOYMENT & SERVER LAUNCH WORKFLOW 🚀\033[0m"
	@echo "================================================================================"
	@echo "\033[1;36mSTEP 1: \033[0;32mSync local code to H200 server\033[0m"
	@echo "   - Uses \033[1;33mrsync\033[0m to copy all changed files to the remote H200 machine"
	@echo "   - Excludes .git, __pycache__, and .pyc files for a clean transfer"
	@echo "   - Ensures the remote neuronet-consensus directory is up to date"
	@echo "   - Runs \033[1;33mmake h200-step2\033[0m automatically"
	@echo ""
	@echo "\033[1;36mSTEP 2: \033[0;34mSSH into H200 and run remote Makefile\033[0m"
	@echo "   - Securely connects to the H200 server using your SSH key"
	@echo "   - Changes to the neuronet-consensus directory"
	@echo "   - Runs \033[1;33mmake h200-step3\033[0m on the remote server automatically"
	@echo "   - Drops you into an interactive shell so you can run further commands if needed"
	@echo ""
	@echo "\033[1;36mSTEP 3: \033[0;36mActivate Python venv & launch server in tmux\033[0m"
	@echo "   - Activates the Python virtual environment for isolated dependencies"
	@echo "   - Starts the API server inside a persistent \033[1;32mtmux\033[0m session named neuronet"
	@echo "   - Ensures the server keeps running even if you disconnect from SSH"
	@echo ""
	@echo "\033[1;32m✨ The full pipeline ensures your code is synced, your environment is ready, and your server is running reliably on the H200! ✨\033[0m"
	@echo "================================================================================"
	make h200-step1

h200-step1:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;36m🌟 STEP 1: 🚀 Syncing any changed files in neuronet-consensus to the H200... 🌟\033[0m"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;32m 🏃 Running This Command:\033[0m"
	rsync -avz -e "ssh -i ~/.ssh/h200_key" --exclude '.git' --exclude '__pycache__' --exclude '*.pyc' --checksum ./ ubuntu@192.222.58.49:~/neuronet-consensus/
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;32m✅ Files synced successfully! Your code is now up to date on the H200! 🎉\033[0m"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;34m➡️  Proceeding to STEP 2: SSH and remote Makefile execution...\033[0m"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;33m 🏃 Running this command:\033[0m"
	make h200-step2

h200-step2:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;36m🌐 STEP 2: 🔑 SSH into H200, run make h200-step3, then drop to interactive shell... 🌐\033[0m"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;34m➡️ Proceeding to STEP 3 After SSHing into H200...\033[0m"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;32m🏃 Running this command :\033[0m"
	ssh -t -i ~/.ssh/h200_key ubuntu@192.222.58.49 'cd neuronet-consensus && bash -i -c "make h200-step3; exec \\$$SHELL -l"'

h200-step3:
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;36m 🚀 STEP 3: Activate the venv and start the server in tmux to keep it running permanently 🐍\033[0m"
	@echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
	@echo "\033[1;32mActivating Python virtual environment and launching the API server in a persistent tmux session! 🟢\033[0m"
	@echo "\033[1;32m 🏃 Running this command:\033[0m"
	. .venv/bin/activate && tmux new -As "neuronet" "PYTHONPATH=$(pwd) python3 -m src.api.server"

h200-step4:
	@echo "Current directory: $$(pwd)"
	
	@echo "🔧 Setting up environment..."

	pip install -r requirements.txt

h200-step5:
	@echo "🔧 Setting up environment..."
	. .venv/bin/activate && \
	TMUX_SESSION="neuronet" && \
	tmux new -As "$TMUX_SESSION" "PYTHONPATH=$(pwd) python3 -m src.api.server"

curl-health:
	curl http://192.222.58.49:8000/api/health

curl-chat:
	curl -X POST http://192.222.58.49:8000/api/chat \
	-H "Content-Type: application/json" \
	-d '{"message": "Hello, how are you?", "user_address": "0x123"}'

curl-model-tiers:
	@echo "🔧 Getting model tiers..."
	curl -s http://192.222.58.49:8000/api/model-tiers

# -------------------------
# Training Commands
# -------------------------
install-train-deps:
	pip install -r requirements.txt
	pip install torch transformers datasets peft sentencepiece tokenizers huggingface_hub

train-lora:
	python3 src/models/training/finetune_with_lora.py \
		--model_name_or_path minteekkk/Metis-7B-v0.1 \
		--data_path src/models/training/data \
		--output_dir src/models/training/models/peft_model \
		--num_train_epochs 3 \
		--per_device_train_batch_size 8 \
		--per_device_eval_batch_size 8 \
		--gradient_accumulation_steps 8 \
		--learning_rate 1e-5 \
		--weight_decay 0.01 \
		--warmup_steps 50 \
		--lr_scheduler_type cosine \
		--logging_steps 10 \
		--save_strategy steps \
		--save_steps 1000 \
		--save_total_limit 2 \
		--eval_steps 1000 \
		--use_lora True

train-notebook:
	jupyter nbconvert --to notebook --execute src/models/training/finetune_trainer.ipynb --output src/models/training/finetune_trainer_executed.ipynb

clean-training:
	rm -rf src/models/training/models/peft_model
	rm -f src/models/training/finetune_trainer_executed.ipynb
	rm -rf ./processed_train_dataset
	rm -rf ./mistal

# -------------------------
# Go - Build
# -------------------------
build:
	cd src/blockchain && go build -o ../../neuronet-main main.go

build-all:
	cd src/blockchain && go build -o ../../neuronet-main main.go
	cd src/blockchain/validator_sim && go build -o ../../../validator-sim validator_sim.go
	cd src/utils/ipfs && go build -o ../../../ipfs-client client.go

# -------------------------
# Help Command
# -------------------------
help:
	@echo "Common Make targets:"
	@echo "  make run-api-server         # Start FastAPI server (python)"
	@echo "  make run-api-server-uvicorn # Start FastAPI server (uvicorn, hot reload)"
	@echo "  make stop-api-server        # Stop FastAPI server"
	@echo "  make restart-api-server     # Restart FastAPI server"
	@echo "  make list-models            # List model versions via API"
	@echo "  make list-validators        # List validator info via API"
	@echo "  make install-deps           # Install all dependencies"
	@echo "  make test-model             # Run model tests"
	@echo "  make test-integration       # Run integration tests"
	@echo "  make up                     # Start Docker Compose"
	@echo "  make down                   # Stop Docker Compose"
	@echo "  make monitor-bls-metrics    # View BLS signature metrics"
	@echo "  make run-bls-validator      # Run BLS validator simulation"
	@echo "  make zk-proof-setup         # Set up ZK proof environment"
	@echo "  make run-ai-consensus       # Run AI-assisted consensus demo"
	@echo "  make run-json-rpc-server    # Start JSON-RPC server with weight diff endpoint"
	@echo "  make run-storage-tracker    # Start storage usage tracking system"
	@echo "  make run-chat-dev           # Start frontend development server"
	@echo "  make sync-h200              # Sync code to H200 server"
	@echo "  make jupyter-lab            # Start Jupyter Lab"

# -------------------------
# Declare Phony Targets
# -------------------------
.PHONY: \
        install-deps up down rebuild start stop ps clean \
        build-sign sign-models train-models eval-model inspect-model generate-models \
        full-pipeline run-validator-sim run-node-training run-evm-main run-rust-node-sync \
        start-node compile-contracts deploy-contracts \
        train-finetune train-sft train-base setup-training \
        evaluate-model evaluate-update \
        test-model test-byte-range test-api-byte-range test-model-coverage test-byte-range-coverage \
        test-integration test-go-coverage test-all test-ipfs test-blockchain test-consensus \
        test-all-coverage clean-tests test-rewards test-bls test-validator \
        run-bls-validator run-ipfs-node upload-model download-model \
        monitor-bls-metrics monitor-validator-performance \
        zk-proof-setup zk-proof-demo run-ai-consensus test-ai-scoring run-validator-selection test-validator-selection \
        run-json-rpc-server test-weight-diff-upload run-storage-tracker generate-storage-report \
        fund-wallet sync-h200 jupyter-lab \
        train-lora train-notebook install-train-deps \
        clean-training \
        run-chat-dev \
        help

kill-ports:
	@echo "🔄 Killing all open ports..."
	@lsof -i :8545 | grep LISTEN | awk '{print $$2}' | xargs kill -9 2>/dev/null || true
	@lsof -i :7545 | grep LISTEN | awk '{print $$2}' | xargs kill -9 2>/dev/null || true
	@lsof -i :5001 | grep LISTEN | awk '{print $$2}' | xargs kill -9 2>/dev/null || true
	@lsof -i :3000 | grep LISTEN | awk '{print $$2}' | xargs kill -9 2>/dev/null || true
	@lsof -i :3001 | grep LISTEN | awk '{print $$2}' | xargs kill -9 2>/dev/null || true
	@lsof -i :8000 | grep LISTEN | awk '{print $$2}' | xargs kill -9 2>/dev/null || true
	@echo "✅ All ports killed."

# Monitor GPU usage
monitor-gpu:
	watch -n 2 nvidia-smi

## Foundry (Solidity/EVM)

foundry-build:
	forge build

foundry-test:
	forge test

foundry-fmt:
	forge fmt

foundry-snapshot:
	forge snapshot

foundry-anvil:
	anvil

foundry-deploy:
	forge script script/Counter.s.sol:CounterScript --rpc-url $(RPC_URL) --private-key $(PRIVATE_KEY)

foundry-cast:
	cast $(ARGS)

foundry-help:
	@echo "Foundry commands:"
	@echo "  make foundry-build      # Build Solidity contracts with Forge"
	@echo "  make foundry-test       # Run Forge tests"
	@echo "  make foundry-fmt        # Format Solidity code"
	@echo "  make foundry-snapshot   # Generate gas snapshots"
	@echo "  make foundry-anvil      # Start local Anvil node"
	@echo "  make foundry-deploy     # Deploy contracts with Forge script"
	@echo "  make foundry-cast ARGS='...' # Run Cast subcommands"
	@echo "  make foundry-help       # Show this help message"

ipfs-upload:
	node scripts/ipfs/uploadToIPFS.mjs

# -------------------------
# Python Environment
# -------------------------
create-venv:
	python3 -m venv .venv
	. .venv/bin/activate && pip install -r requirements.txt

train-qlora:
	@echo "Training model with QLoRA..."
	@PYTHONPATH=$(shell pwd) python3 src/models/training/trainers/qlora_trainer.py

h200-status:
	@echo "🔍 Checking process status..."
	@echo "Jupyter Kernel:"
	@ps aux | grep "[s]tart_kernel.py" || echo "Not running"
	@echo "FastAPI Server:"
	@ps aux | grep "[s]erver.py" || echo "Not running"
	@echo "Recent logs:"
	@echo "Kernel log:"
	@tail -n 5 kernel.log 2>/dev/null || echo "No kernel log found"
	@echo "Server log:"
	@tail -n 5 server.log 2>/dev/null || echo "No server log found"

h200-logs:
	@echo "📋 Monitoring H200 server logs..."
	@echo "Press Ctrl+C to stop monitoring"
	@ssh h200 "tail -f ~/neuronet-consensus/server.log ~/neuronet-consensus/kernel.log"


