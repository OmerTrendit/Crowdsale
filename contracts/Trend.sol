pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract Trend is MintableToken {
    string public name = "Trend";
    string public symbol = "TND";
    uint8 public decimals = 18;
}