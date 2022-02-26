//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint256 public count;

    constructor(uint256 _count) {
        console.log("_count", _count);
        count = _count;
    }

    function getCount() public view returns (uint256) {
        console.log("getCount", count);
        return count;
    }

    function addOne() public returns (uint256) {
        console.log("count", count);
        return count++;
    }

    function add(uint256 num) public {
        console.log("count", count);
        if (num == 0) {
            count++;
        } else {
            count = count + num;
        }
    }
}
