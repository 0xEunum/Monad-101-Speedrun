# Session 4 Assignment – Hardhat Testing with Access Control

This repository contains a Hardhat project created as part of **Monad-101 Speedrun – Session 4 Assignment**.
The goal of this assignment is to demonstrate how to build an ERC token with authentication and role-based access control, and how to validate its behavior using automated tests in a production-style workflow.

---

## 📝 Assignment Summary

- Set up a Hardhat project
- Implement an ERC token using OpenZeppelin
- Add role-based access control
- Write automated tests for core functionality and permission checks
- Deploy the contract on Monad Testnet

---

## 📦 Smart Contract Overview

### MyToken (ERC20)

`MyToken` is a simple ERC20 token built using OpenZeppelin’s `ERC20` and `AccessControl` contracts.

### Roles

- **DEFAULT_ADMIN_ROLE**
  - Assigned at deployment
  - Can grant and revoke roles

- **MINTER_ROLE**
  - Allowed to mint new tokens
  - Restricted from administrative actions

Minting is protected using role-based access control, similar to real-world token systems.

---

## 🧪 Tests

Automated tests are written using **Hardhat (v3)** with modern tooling.

### What is tested

- ERC20 metadata (token name and symbol)
- Successful minting by an account with `MINTER_ROLE`
- Token balance updates after minting
- Reverts when an unauthorized account attempts to mint
- Correct role assignment at deployment

Both success paths and expected failure cases are covered.

---

## ▶️ Running the Project

### Install dependencies

```bash
npm install
```

### Run tests

```bash
npx hardhat test
```

All tests should pass successfully.

---

## 🌐 Deployment Details

- **Network:** Monad Testnet
- **Contract Address:** `0x2f6B3Cf334D373EF5FAd2E7e8CB3Bd62370Af440`
- **Explorer Link:**
  `https://testnet.monadvision.com/address/0x2f6B3Cf334D373EF5FAd2E7e8CB3Bd62370Af440`

---

## 📁 Project Structure

```
contracts/
 └── MyToken.sol

test/
 └── MyToken.test.ts

hardhat.config.ts
README.md
```

---

## 🛠 Tech Stack

- Solidity ^0.8.28
- Hardhat v3
- OpenZeppelin Contracts
- viem
- TypeScript
- Chai

---

## ✍️ Author

**Mohammed Muzammil**
Monad-101 Speedrun – Hyderabad

---

## 📌 Notes

This assignment focuses on clarity, correctness, and test-driven validation of smart contracts.
The implementation is intentionally simple to highlight best practices in access control and automated testing.
