const hre = require("hardhat");

async function main() {
  // Deploy the ERC20 contract ($PRDGM Token)
  const PRDGMToken = await hre.ethers.getContractFactory("PRDGMToken");
  const prdgmToken = await PRDGMToken.deploy(1000000000); // Initial supply of 1 billion tokens
  await prdgmToken.deployed();
  console.log("PRDGM Token deployed to:", prdgmToken.address);

  // Deploy the ERC721 contract (PropertyNFT)
  const PropertyNFT = await hre.ethers.getContractFactory("PropertyNFT");
  const propertyNFT = await PropertyNFT.deploy();
  await propertyNFT.deployed();
  console.log("PropertyNFT deployed to:", propertyNFT.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
