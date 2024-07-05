// scripts/deploy.js

const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
  
    const Box = await ethers.getContractFactory('Box');
    console.log('Deploying Box...');
    const box = await Box.deploy();
    
    await box.waitForDeployment();
    console.log(box);
    // await box.deployTransaction.wait();
    console.log('Box deployed to:', box.runner.address);
}

// async function main () {
//     // We get the contract to deploy
//     const Box = await ethers.getContractFactory('Box');
//     console.log('Deploying Box...');
//     const box = await Box.deploy();
//     await box.waitForDeployment();
//     // await box.deployed();
//     // await box.deployTransaction.wait();
//     console.log('Box deployed to:', box.address);
//   }
  
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });