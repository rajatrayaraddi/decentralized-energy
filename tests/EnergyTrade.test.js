const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EnergyTrade", function () {
    let owner, user1, user2;
    let EnergyToken, energyToken;
    let EnergyTrade, energyTrade;

    beforeEach(async function () {
        [owner, user1, user2] = await ethers.getSigners();

        // Deploy EnergyToken
        EnergyToken = await ethers.getContractFactory("EnergyToken");
        energyToken = await EnergyToken.deploy();
        await energyToken.deployed();

        // Deploy EnergyTrade
        EnergyTrade = await ethers.getContractFactory("EnergyTrade");
        energyTrade = await EnergyTrade.deploy(energyToken.address);
        await energyTrade.deployed();

        // Distribute tokens to users
        await energyToken.transfer(user1.address, ethers.utils.parseEther("100"));
        await energyToken.transfer(user2.address, ethers.utils.parseEther("100"));
    });

    it("Should allow users to trade energy tokens", async function () {
        await energyToken.connect(user1).approve(energyTrade.address, ethers.utils.parseEther("20"));
        await energyTrade.connect(user1).sellEnergy(ethers.utils.parseEther("20"), ethers.utils.parseEther("5"));

        const listing = await energyTrade.energyListings(0);
        expect(listing.seller).to.equal(user1.address);
        expect(listing.amount).to.equal(ethers.utils.parseEther("20"));
    });

    it("Should allow users to buy energy from listings", async function () {
        await energyToken.connect(user1).approve(energyTrade.address, ethers.utils.parseEther("20"));
        await energyTrade.connect(user1).sellEnergy(ethers.utils.parseEther("20"), ethers.utils.parseEther("5"));

        await energyToken.connect(user2).approve(energyTrade.address, ethers.utils.parseEther("5"));
        await energyTrade.connect(user2).buyEnergy(0);

        const user1Balance = await energyToken.balanceOf(user1.address);
        const user2Balance = await energyToken.balanceOf(user2.address);

        expect(user1Balance).to.equal(ethers.utils.parseEther("105"));
        expect(user2Balance).to.equal(ethers.utils.parseEther("80"));
    });

    it("Should not allow buying energy without sufficient balance", async function () {
        await energyToken.connect(user1).approve(energyTrade.address, ethers.utils.parseEther("50"));
        await energyTrade.connect(user1).sellEnergy(ethers.utils.parseEther("50"), ethers.utils.parseEther("10"));

        await energyToken.connect(user2).approve(energyTrade.address, ethers.utils.parseEther("5"));

        await expect(
            energyTrade.connect(user2).buyEnergy(0)
        ).to.be.revertedWith("Insufficient token balance");
    });
});
