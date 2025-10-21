pragma solidity 0.8.20; //Do not change the solidity version as it negatively impacts submission grading
// SPDX-License-Identifier: MIT

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import "./YourToken.sol";

contract Vendor is Ownable {
    event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
    event SellTokens(address seller, uint256  amountOfTokens, uint256 amountOfETH);
    event Withdraw(address owner, uint256 amount);

    YourToken public yourToken;

    uint256 public constant tokensPerEth = 100;

    constructor(address tokenAddress) Ownable(msg.sender) {
        yourToken = YourToken(tokenAddress);
    }

    // ToDo: create a payable buyTokens() function:
    function buyTokens() public payable {
        yourToken.transfer(msg.sender, msg.value*tokensPerEth);
        emit BuyTokens(msg.sender, msg.value, msg.value*tokensPerEth);
    }

    // ToDo: create a withdraw() function that lets the owner withdraw ETH
    function withdraw() public onlyOwner {
        uint256 amount = address(this).balance;
        payable(owner()).transfer(amount);
        emit Withdraw(owner(), amount);
    }

    // ToDo: create a sellTokens(uint256 _amount) function:
    function sellTokens(uint256 _amount) public {
        yourToken.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(_amount / tokensPerEth);
        emit SellTokens(msg.sender, _amount, _amount / tokensPerEth);
    }
}
