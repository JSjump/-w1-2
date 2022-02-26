const { ethers, network } = require("hardhat");

const Addr = require(`../deployments/${network.name}/Counter.json`);

async function main() {
  const [owner] = await ethers.getSigners();

  console.log("owner", owner);

  const counter = await ethers.getContractAt("Counter", Addr.address, owner);

  //   await counter.addOne();

  await counter.add(4);

  const newValue = await counter.count();

  console.log("newValue:" + newValue);
}

main()
  // eslint-disable-next-line no-process-exit
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    // eslint-disable-next-line no-process-exit
    process.exit(1);
  });
