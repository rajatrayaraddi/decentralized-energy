async function main() {
    // Get the first signer (deployer address) from Hardhat
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    // Get the contract factory for the EnergyToken contract
    const EnergyToken = await ethers.getContractFactory("EnergyToken");
  
    // Deploy the contract and pass the deployer's address as the initial owner
    const energyToken = await EnergyToken.deploy(deployer.address);  
  
    console.log("EnergyToken deployed to:", energyToken.address);
  }
  
  main()
    .then(() => process.exit(0))  // Exit the script when done
    .catch((error) => {
      console.error(error);  // Log any errors
      process.exit(1);       // Exit with an error code
    });
  