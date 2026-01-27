// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

/**
 * @title Counter
 * @author Mohammed Muzammil
 * @notice This contract stores a count value and can be increased and decreased through functions!
 * @notice This contract is created to complete Assignment-3 of Monad-101 Speedrun Hyderabad
 */
contract Counter {
    uint256 public count;

    /**
     * @notice This function increases the count value by 1.
     */
    function increment() public {
        count++;
    }

    /**
     * @notice This function decreases the count value by 1.
     */
    function decrement() public {
        count--;
    }

    /**
     *
     * @param _newCount A number to set count value
     * @notice This function sets new count value
     */
    function setCount(uint256 _newCount) public {
        count = _newCount;
    }
}
