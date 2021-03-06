const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  it("the Counter test", async function () {
    const Counter = await ethers.getContractFactory("Counter");
    const counter = await Counter.deploy(1);
    await counter.deployed();

    expect(await counter.getCount()).to.equal(1);

    const addOneTx = await counter.addOne();

    // wait until the transaction is mined
    await addOneTx.wait();

    expect(await counter.getCount()).to.equal(2);

    const addTx = await counter.add(3);

    // wait until the transaction is mined
    await addTx.wait();

    expect(await counter.getCount()).to.equal(5);

    // const setGreetingTx = await counter.add();

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await counter.greet()).to.equal("Hola, mundo!");
  });
});
