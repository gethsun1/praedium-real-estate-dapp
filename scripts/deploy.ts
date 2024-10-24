const hre = require("hardhat");

async function main() {
  // Deploy the ERC20 $PRDGM Token Contract
  try {
    const PRDGMToken = await hre.ethers.getContractFactory("PRDGMToken");
    console.log("Deploying $PRDGM Token...");

    // Deploy with an initial supply of 1 billion tokens (adjust decimals if necessary)
    const initialSupply = hre.ethers.utils.parseUnits("1000000000", 18); // 1 billion with 18 decimals
    const prdgmToken = await PRDGMToken.deploy(initialSupply);

    // Wait for the contract to be deployed
    await prdgmToken.deployed();
    console.log("$PRDGM Token successfully deployed to:", prdgmToken.address);

  } catch (error) {
    console.error("Error deploying $PRDGM Token:", error);
    process.exit(1);
  }

  // Deploy the ERC721 PropertyNFT Contract
  try {
    const PropertyNFT = await hre.ethers.getContractFactory("PropertyNFT");
    console.log("Deploying PropertyNFT Contract...");

    // Deploy the NFT contract
    const propertyNFT = await PropertyNFT.deploy();

    // Wait for the contract to be deployed
    await propertyNFT.deployed();
    console.log("PropertyNFT Contract successfully deployed to:", propertyNFT.address);

  } catch (error) {
    console.error("Error deploying PropertyNFT Contract:", error);
    process.exit(1);
  }
}

// Execute the main deployment function
main().catch((error) => {
  console.error("Deployment failed:", error);
  process.exitCode = 1;
});
