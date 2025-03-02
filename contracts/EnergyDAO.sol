// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract EnergyDAO {
    IERC20 public energyToken;
    address public owner;

    struct Proposal {
        string description;
        uint256 votesFor;
        uint256 votesAgainst;
        bool executed;
    }

    Proposal[] public proposals;
    mapping(address => uint256) public votingPower;

    constructor(address _energyToken) {
        energyToken = IERC20(_energyToken);
        owner = msg.sender;
    }

    function createProposal(string memory _description) external {
        proposals.push(Proposal(_description, 0, 0, false));
    }

    function vote(uint256 proposalId, bool support) external {
        require(proposalId < proposals.length, "Invalid proposal ID");

        uint256 votes = energyToken.balanceOf(msg.sender);
        require(votes > 0, "No voting power");

        Proposal storage proposal = proposals[proposalId];

        if (support) {
            proposal.votesFor += votes;
        } else {
            proposal.votesAgainst += votes;
        }
    }

    function executeProposal(uint256 proposalId) external {
        Proposal storage proposal = proposals[proposalId];
        require(!proposal.executed, "Already executed");

        if (proposal.votesFor > proposal.votesAgainst) {
            proposal.executed = true;
            // Implement DAO decision execution logic
        }
    }
}
