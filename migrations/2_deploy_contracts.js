const TrendCrowdsale = artifacts.require("./TrendCrowdsale.sol")

module.exports = function(deployer, network, accounts){

    //Cap and Goal
    const ETH_to_Wei = 1000000000000000000
    const cap = (400*ETH_to_Wei) //400 ETH HardCap
    const goal = (100*ETH_to_Wei) //100 ETH SoftCap

    deployer.deploy(TrendCrowdsale, goal, cap)
};