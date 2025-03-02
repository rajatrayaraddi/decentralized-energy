const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EnergyDAO", function () {
    let owner, user1, user2;
    let EnergyToken, energyToken;
    let EnergyDAO, energyDAO;

    beforeEach(async function () {
        [owner, user1, user2] = await ethers.getSigners();

        // Deploy EnergyToken
        EnergyToken = await ethers.getContractFactory("EnergyToken");
        energyToken = await EnergyToken.deploy();
        await energyToken.deployed();

        // Deploy EnergyDAO
        EnergyDAO = await ethers.getContractFactory("EnergyDAO");
        energyDAO = await EnergyDAO.deploy(energyToken.address);
        await energyDAO.deployed();

        // Distribute some tokens
        await energyToken.transfer(user1.address, ethers.utils.parseEther("100"));
        await energyToken.transfer(user2.address, ethers.utils.parseEther("100"));
    });

    it("Should allow users to stake tokens and vote", async function () {
        await energyToken.connect(user1).approve(energyDAO.address, ethers.utils.parseEther("50"));
        await energyDAO.connect(user1).stakeTokens(ethers.utils.parseEther("50"));

        const user1Stake = await energyDAO.getStake(user1.address);
        expect(user1Stake).to.equal(ethers.utils.parseEther("50"));
    });

    it("Should allow users to create and vote on proposals", async function () {
        await energyDAO.connect(owner).createProposal("Improve solar panel distribution");
        const proposal = await energyDAO.proposals(0);

        expect(proposal.description).to.equal("Improve solar panel distribution");
    });

    it("Should reject voting if user has no stake", async function () {
        await expect(
            energyDAO.connect(user2).vote(0, true)
        ).to.be.revertedWith("You must stake tokens to vote");
    });
});
