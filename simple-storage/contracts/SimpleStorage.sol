// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract SimpleStorage {
  address owner;
  uint storedData;

  event setEvent(uint newValue);

  constructor() public {
    owner = msg.sender;
  }

  function set(uint x) public {
    storedData = x;
    emit setEvent(x);
  }

  function get() public view returns (uint) {
    return storedData;
  }    

}
