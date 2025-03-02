const Web3 = require("web3");
const { abi: daoAbi, address: daoAddress } = require("./EnergyDAO.json");

const Web3 = require("web3"); // Ensure correct import

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545")); // Use HttpProvider

console.log("Connected to Ethereum RPC");

const daoContract = new web3.eth.Contract(daoAbi, daoAddress);

async function createProposal(description, fromAddress) {
    return await daoContract.methods.createProposal(description).send({ from: fromAddress });
}

async function vote(proposalId, support, voterAddress) {
    return await daoContract.methods.vote(proposalId, support).send({ from: voterAddress });
}

async function getProposals() {
    const count = await daoContract.methods.proposals.length().call();
    const proposals = [];
    for (let i = 0; i < count; i++) {
        proposals.push(await daoContract.methods.proposals(i).call());
    }
    return proposals;
}

module.exports = { createProposal, vote, getProposals };
