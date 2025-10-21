// SPDX-License-Identifier: MIT
pragma solidity 0.8.20; //Do not change the solidity version as it negatively impacts submission grading

import "hardhat/console.sol";
import "./ExampleExternalContract.sol";

contract Staker {
    ExampleExternalContract public exampleExternalContract;

    modifier notCompleted {
        require(!exampleExternalContract.completed(), "Already completed");
        _;
    }

    event Stake(address, uint256);

    mapping ( address => uint256 ) public balances;
    mapping (address => bool) public withdrawnYet;

    uint256 public constant threshold = 1 ether;
    uint256 public deadline = block.timestamp + 72 hours;
    bool private called = false; 
    bool private openForWithdraw = false;

    constructor(address exampleExternalContractAddress) {
        exampleExternalContract = ExampleExternalContract(exampleExternalContractAddress);
    }

    // Collect funds in a payable `stake()` function and track individual `balances` with a mapping:
    // (Make sure to add a `Stake(address,uint256)` event and emit it for the frontend `All Stakings` tab to display)
    function stake() public payable {
        require(!called, "Staking period over");
        require(msg.value > 0, "Send ETH to deposit");
        balances[msg.sender] += msg.value;
        emit Stake(msg.sender, msg.value);
    }

    // After some `deadline` allow anyone to call an `execute()` function
    // If the deadline has passed and the threshold is met, it should call `exampleExternalContract.complete{value: address(this).balance}()`
    function execute() public notCompleted {
        require(timeLeft() == 0, "Not deadline yet");
        require(!called, "Function can only be called once");
        called = true;

        if (address(this).balance > threshold) {
            exampleExternalContract.complete{value: address(this).balance}();
        } else {
            openForWithdraw = true;
            withdraw();
        }

    }
    // If the `threshold` was not met, allow everyone to call a `withdraw()` function to withdraw their balance
    function withdraw() public notCompleted {
        require(openForWithdraw, "Not open for withdraw");
        require(!withdrawnYet[msg.sender], "Withdrawn already");
        payable(msg.sender).transfer(balances[msg.sender]);
        withdrawnYet[msg.sender] = true;
        balances[msg.sender] = 0;
    }

    // Add a `timeLeft()` view function that returns the time left before the deadline for the frontend
    function timeLeft() public view returns (uint256){
        if (block.timestamp >= deadline){
            return 0;
        } else {
            return deadline - block.timestamp;
        }
    }

    // Add the `receive()` special function that receives eth and calls stake()
    receive() external payable {
    }
}
