const Web3 = require("web3");
const { abi: tradeAbi, address: tradeAddress } = require("./EnergyTrade.json");

const web3 = new Web3("http://127.0.0.1:8545");
const tradeContract = new web3.eth.Contract(tradeAbi, tradeAddress);

async function tradeEnergy(buyer, amount, price, seller) {
    return await tradeContract.methods.tradeEnergy(buyer, amount, price).send({ from: seller });
}

module.exports = { tradeEnergy };
