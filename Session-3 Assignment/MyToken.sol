// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import {AccessControl} from "@openzeppelin/contracts/access/AccessControl.sol";
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title MyToken
 * @author Mohammed Muzammil
 * @notice ERC20 token with role-based access control for minting
 * @dev Uses OpenZeppelin ERC20 and AccessControl implementations
 *
 * This contract demonstrates a real-world token pattern where
 * minting permissions are restricted using on-chain roles.
 */
contract MyToken is ERC20, AccessControl {
    /**
     * @notice Role identifier for accounts allowed to mint new tokens
     * @dev Keccak256 hash of the role name
     */
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    /**
     * @notice Deploys the MyToken contract
     * @param defaultAdmin Address that will receive the DEFAULT_ADMIN_ROLE
     * @param minter Address that will receive the MINTER_ROLE
     *
     * The admin can grant and revoke roles.
     * The minter can mint new tokens.
     */
    constructor(address defaultAdmin, address minter) ERC20("MyToken", "MTK") {
        _grantRole(DEFAULT_ADMIN_ROLE, defaultAdmin);
        _grantRole(MINTER_ROLE, minter);
    }

    /**
     * @notice Mints new tokens to a specified address
     * @param to Address receiving the newly minted tokens
     * @param amount Number of tokens to mint (in smallest units)
     * @dev Can only be called by accounts with MINTER_ROLE
     */
    function mint(address to, uint256 amount) external onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
}
