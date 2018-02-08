pragma solidity ^0.4.18;

import './Trend.sol';
import 'zeppelin-solidity/contracts/crowdsale/Crowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/CappedCrowdsale.sol';
import 'zeppelin-solidity/contracts/crowdsale/RefundableCrowdsale.sol';

contract TrendCrowdsale is CappedCrowdsale, RefundableCrowdsale {

    function TrendCrowdsale(uint256 _goal, uint256 _cap)
        CappedCrowdsale(_cap)
        FinalizableCrowdsale()
        RefundableCrowdsale(_goal) 
        Crowdsale()
    {
        require(_goal <= _cap); 
    }

    // creates the token to be sold
    // override this method to have crowdsale of a specific mintableToken token.
    function createTokenContract() internal returns (MintableToken) { 
        return new Trend();
    }
}