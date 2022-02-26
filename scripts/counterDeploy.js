// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const { network, artifacts } = require("hardhat");

const { writeAbiAddr } = require("./save.js");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy(1);

  await counter.deployed();

  const Artifact = await artifacts.readArtifact("Counter");
  //   console.log("sss", Artifact, counter.address, "Counter", network.name);

  await writeAbiAddr(Artifact, counter.address, "Counter", network.name);

  console.log("counter deployed to:", counter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
