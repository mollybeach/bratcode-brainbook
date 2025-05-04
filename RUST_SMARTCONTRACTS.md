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
anchor-lang = "0.29.0"
```

### 🧱 Example Contract

```rust
use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkgXX5YexT9W5");

#[program]
pub mod my_contract {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Hello from Solana smart contract!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
```

### 💡 Notes

* `#[program]`: Defines entry points
* `Context<...>`: Specifies required accounts
* `msg!`: Logging macro (similar to `println!`, outputs to Solana logs)

### 🚀 Deploy & Test

```bash
anchor build
anchor deploy
anchor test
```

---

## ☄️ CosmWasm (Cosmos SDK)

### 🧰 Setup

```toml
# Cargo.toml
[dependencies]
cosmwasm-std = "1.4.0"
cosmwasm-schema = "1.4.0"
```

### 🧱 Example Increment Contract

```rust
use cosmwasm_std::{DepsMut, Env, MessageInfo, Response, StdResult};

use crate::state::{STATE, State};

pub fn try_increment(deps: DepsMut, _env: Env, _info: MessageInfo) -> StdResult<Response> {
    STATE.update(deps.storage, |mut state| -> StdResult<_> {
        state.count += 1;
        Ok(state)
    })?;

    Ok(Response::default())
}
```

### 📦 State Example

```rust
use schemars::JsonSchema;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone, Debug, PartialEq, JsonSchema)]
pub struct State {
    pub count: i32,
}

pub const STATE: Item<State> = Item::new("state");
```

### 🚀 Compile & Deploy

```bash
cargo wasm
wasmd tx wasm store target/wasm32-unknown-unknown/release/contract.wasm ...
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

Rust’s ownership model ensures memory safety and prevents race conditions — critical in smart contract logic.

### 🧩 Serialization

* **Anchor** uses Borsh
* **CosmWasm** uses Serde

### 🧪 Testing

Write tests in `tests/` directory (Anchor) or `lib.rs` using `#[cfg(test)]`.

---

## 📚 Resources

* [Solana Anchor Book](https://book.anchor-lang.com/)
* [CosmWasm Docs](https://docs.cosmwasm.com/)
* [Rust Book](https://doc.rust-lang.org/book/)

---

Let me know if you'd like a visual diagram of the contract lifecycle or account struct
