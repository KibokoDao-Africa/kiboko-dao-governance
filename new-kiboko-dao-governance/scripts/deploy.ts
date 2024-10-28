import { ethers } from "hardhat";

async function main() {
  // Replace with your contract's name
  const Governance = await ethers.getContractFactory("Governance");

  // Deploy the contract
  const kdtAddress = "0xE08144124F654C8Bb347eC682ED71683871e9B42"; 
  const quorum = 5; // Replace with your desired quorum
  const governance = await Governance.deploy(kdtAddress, quorum);

  // Wait for the deployment to be mined
  await governance.deployed();

  console.log("Governance contract deployed to:", governance.address);
}

// Run the main function and handle errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
