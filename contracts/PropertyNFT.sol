// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
    
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PropertyNFT is ERC721, Ownable {
    // Metadata base URI
    string private _baseTokenURI;

    // Constructor to initialize NFT contract
    constructor() ERC721("PraediumProperty", "PRP") {
        _baseTokenURI = "https://praedium-metadata.io/property/";       
    }

    // Function to mint unique properties (NFTs)
    function mintProperty(address to, uint256 tokenId) public onlyOwner {
        _mint(to, tokenId);
    }

    // Override _baseURI to set the base URI for NFT metadata
    function _baseURI() internal view virtual override returns (string memory) {
        return _baseTokenURI;
    }

    // Function to set the base URI for metadata
    function setBaseURI(string memory baseURI) public onlyOwner {
        _baseTokenURI = baseURI;
    }
}
