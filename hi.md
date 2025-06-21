# \:trophy: Rewards System Overview

### What are rewards for?

* **AI Chat Interactions**: Users get rewarded for each successful chat interaction with the AI model
* **Model Usage**: Every chat request that gets processed and stored earns rewards
* **Network Participation**: Active users who contribute to the AI training data get incentivized

### How rewards work:

* **Credit System**: Users need credits to use the AI chat (`ModelAccessCredits` contract)
* **Earning Rewards**: Users earn **LCAI tokens** for:

  * Successful chat interactions (**1 LCAI** per interaction)
  * Having their chat data stored on **IPFS and blockchain**
  * Being added as **"inferencers"** in the reward system
* **Automatic Distribution**: Smart contracts automatically issue rewards after each chat

---

# \:electric\_plug: API Endpoints (Current Implementation)

### Core Chat Endpoint

* `POST /api/chat` – Main chat endpoint

  * **Required**: `message` (string), `user_address` (string)
  * **Returns**: `{response, status, cid?, blockchain_tx?, ipfs_url?, blockchain_url?}`
  * **Error Handling**:

    * 400 for missing message/address
    * 500 for server errors

### User Statistics

* `GET /api/user-stats?address={wallet_address}` – Get user stats

  * **Returns**: `{token_balance, total_rewards, interaction_count, last_interaction, rank, is_private, quality_score}`

### Health Check

* `GET /api/health` – Server health status

### WebSocket Support

* `WS /ws` – Real-time notifications for rewards and updates

---

# \:building\_construction: Backend Architecture Details

### Key Components

#### FastAPI Server (`src/api/server.py`)

* Handles chat requests with LoRA model inference
* Integrates with blockchain for rewards and storage
* Manages IPFS storage for chat data
* WebSocket support for real-time updates

#### Blockchain Integration (`src/blockchain/`)

* `ModelReward.sol`: Handles reward distribution (1 LCAI per chat)
* `ModelAccessCredits.sol`: Credit-based access control
* `ModelRegistry.sol`: Stores IPFS hashes of chat interactions
* `ModelToken.sol`: LCAI token contract

#### AI Model System (`src/models/`)

* LoRA fine-tuned models for chat responses
* Jupyter kernel integration for model inference

#### IPFS Storage (`src/storage/`)

* Stores chat interactions with metadata
* Returns IPFS CID for blockchain storage

### Chat Flow

1. User sends chat request with wallet address
2. AI generates response using LoRA model
3. Chat data stored on IPFS
4. IPFS hash stored in blockchain
5. User automatically rewarded with 1 LCAI token
6. Real-time notification sent via WebSocket

---

# \:clipboard: Frontend Requirements

### Must-Have Features

* Wallet Connection (using `wagmi`)
* Chat Interface with real-time responses
* Credit Balance Display (from `ModelAccessCredits` contract)
* Token Balance Display (LCAI tokens from `ModelToken` contract)
* Transaction History (reward transactions)
* WebSocket Integration for real-time reward notifications

### API Integration Points

```js
// Chat request
const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message, user_address })
});

// User stats
const stats = await fetch(`/api/user-stats?address=${walletAddress}`);
```
