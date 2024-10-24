// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PRDGMToken is ERC20 {
    // Owner of the contract
    address public owner;

    // Token details
    string public projectName = "Praedium";
    string public realEstateDescription = "Fractional ownership in real estate assets.";

    // Constructor to initialize the token
    constructor(uint256 initialSupply) ERC20("Praedium", "PRDGM") {
        owner = msg.sender;
        _mint(owner, initialSupply * (10 ** uint256(decimals()))); // Minting initial supply
    }

    // Function to mint new tokens (for future property expansions)
    function mint(address to, uint256 amount) public {
        require(msg.sender == owner, "Only owner can mint tokens");
        _mint(to, amount);
    }
}
