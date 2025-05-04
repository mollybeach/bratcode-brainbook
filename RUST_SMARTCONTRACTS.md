# 🦀 Smart Contracts in Rust — Study Guide

---

## 🧠 Overview

Rust is a systems programming language known for memory safety and performance. In blockchain development, it powers smart contracts for platforms like:

* **Solana** (via Anchor framework)
* **CosmWasm** (for Cosmos SDK-based chains)
* **Near Protocol** (via Rust SDK)

This guide focuses on Solana and CosmWasm.

---

## 🏗 Structure of a Rust Smart Contract

### Common Components

* **State**: Data stored on-chain
* **Entry Points**: Functions triggered by transactions
* **Context**: Information about accounts or the blockchain environment
* **Serialization**: Via `serde` or platform-specific macros

---

## 🔱 Solana + Anchor Framework

### 🧰 Setup

```toml
# Cargo.toml
[dependencies]
anchor-lang = "0.29.0"  # Anchor framework for Solana smart contracts
```

### 🧱 Example Contract (with Comments)

```rust
use anchor_lang::prelude::*; // Import commonly used Anchor types and macros

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkgXX5YexT9W5");
// `declare_id!` macro defines the program ID used for deployment

#[program] // Marks the beginning of contract logic block
pub mod my_contract {
    use super::*; // Bring everything from outer scope (common Rust idiom)

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        // Entry function `initialize`, takes Context with required accounts
        msg!("Hello from Solana smart contract!"); // Macro for logging to Solana runtime
        Ok(()) // Return success wrapped in Result
    }
}

#[derive(Accounts)] // Derives a trait to deserialize input accounts
pub struct Initialize {} // Empty struct (no accounts needed in this example)
```

### 🔤 Symbol Notes

* `::`: path separator (like `.` in Python or `/` in JS module systems)
* `!`: indicates macro invocation (from Rust's macro system, inspired by Lisp and C macros)
* `#[...]`: attributes or annotations used for code generation and metadata
* `use`: similar to `import` in JS or Python
* `super::*`: means "everything from the parent module"

### 🚀 Deploy & Test

```bash
anchor build    # Compile the program to BPF bytecode
anchor deploy   # Deploy to localnet or devnet
anchor test     # Run unit and integration tests
```

---

## ☄️ CosmWasm (Cosmos SDK)

### 🧰 Setup

```toml
# Cargo.toml
[dependencies]
cosmwasm-std = "1.4.0"        # Core Cosmos standard library
cosmwasm-schema = "1.4.0"     # Schema generation utilities
```

### 🧱 Example Increment Contract (with Comments)

```rust
use cosmwasm_std::{DepsMut, Env, MessageInfo, Response, StdResult};
// Import Cosmos types: dependencies, environment, message info, response format

use crate::state::{STATE, State}; // Import defined contract state

pub fn try_increment(deps: DepsMut, _env: Env, _info: MessageInfo) -> StdResult<Response> {
    // Entry point to update state (increments counter)
    STATE.update(deps.storage, |mut state| -> StdResult<_> {
        state.count += 1; // Modify on-chain state
        Ok(state)
    })?; // `?` unwraps or returns error — Rust error handling idiom

    Ok(Response::default()) // Return default response to chain
}
```

### 📦 State Example

```rust
use schemars::JsonSchema; // For JSON schema generation (for frontend devs)
use serde::{Deserialize, Serialize}; // Derives for serializing state to/from storage

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub count: i32, // Integer count, part of contract's persistent state
}

pub const STATE: Item<State> = Item::new("state");
// `Item` is a wrapper for reading/writing a value with a unique storage key
```

### 🚀 Compile & Deploy

```bash
cargo wasm                             # Build WASM binary
wasmd tx wasm store contract.wasm ...  # Store and deploy contract to Cosmos chain
```

---

## 🔍 Comparison

| Feature       | Solana (Anchor)     | CosmWasm           |
| ------------- | ------------------- | ------------------ |
| Language      | Rust                | Rust               |
| Build System  | Anchor CLI          | Cargo + wasm       |
| Serialization | Borsh               | Serde (JSON)       |
| Target Format | BPF ELF binary      | Wasm (WebAssembly) |
| Gas Model     | Transaction compute | CosmWasm metering  |

---

## 📘 Additional Concepts

### ✅ Ownership & Lifetimes

Rust’s compiler enforces ownership and borrowing rules. This prevents memory leaks, race conditions, and null pointer errors at compile-time — perfect for untrusted blockchain environments.

### 🧩 Serialization

* Anchor: **Borsh** — Binary Object Representation Serializer for Hashing (from NEAR)
* CosmWasm: **Serde** — Popular Rust framework for JSON/XML/CBOR, widely used in the Rust ecosystem

### 🧪 Testing

* Anchor tests live in `/tests/` directory and use Mocha-style JS wrappers or Rust tests with `#[cfg(test)]`
* CosmWasm uses `#[cfg(test)]` modules within Rust files

---

## 📚 Resources

* [Solana Anchor Book](https://book.anchor-lang.com/)
* [CosmWasm Docs](https://docs.cosmwasm.com/)
* [Rust Book](https://doc.rust-lang.org/book/)
* [Serde Docs](https://serde.rs/)

---

Let me know if you'd like a diagram of state transitions, lifetime scopes, or Solana account models!
