# MyToken (MTK) – Role-Based ERC20 on Monad

An ERC20 token implemented using **OpenZeppelin Contracts** and enhanced with **role-based access control**.
Built and deployed as part of **Monad-101 Speedrun – Assignment (ERC + Access Control)**.

This contract demonstrates how real-world token systems restrict sensitive actions like minting using on-chain roles.

---

## 📌 Contract Overview

`MyToken` is a fungible ERC20 token where minting privileges are restricted to authorized accounts using OpenZeppelin’s `AccessControl`.

---

## 🔐 Access Control Design

The contract uses **role-based permissions** instead of hardcoded ownership.

### Roles

- **DEFAULT_ADMIN_ROLE**
  - Can grant and revoke roles
  - Assigned at deployment

- **MINTER_ROLE**
  - Allowed to mint new tokens
  - Cannot manage other roles

This mirrors production token systems where minting authority is separated from governance.

---

## ✨ Features

- ERC20-compliant fungible token
- Built using OpenZeppelin ERC20 template
- Secure minting via `MINTER_ROLE`
- Admin-controlled role management
- Deployed on Monad Testnet

---

## 🧠 Smart Contract Details

- **Token Name:** MyToken
- **Symbol:** MTK
- **Standard:** ERC20
- **Solidity Version:** ^0.8.27
- **Libraries:** OpenZeppelin Contracts v5

---

## 🔧 Key Functions

### `mint(address to, uint256 amount)`

Mints new tokens to a specified address.

- Restricted to `MINTER_ROLE`
- Reverts if caller is unauthorized

---

## 🚀 Deployment Details

- **Network:** Monad Testnet
- **Deployment Tool:** Remix IDE

**Deployed Contract Address:**
`0x2f6B3Cf334D373EF5FAd2E7e8CB3Bd62370Af440`

**Monad Explorer Link:**
`https://testnet.monadvision.com/address/0x2f6B3Cf334D373EF5FAd2E7e8CB3Bd62370Af440`

---
