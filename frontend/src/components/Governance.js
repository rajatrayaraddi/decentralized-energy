import React, { useState } from "react";

const Governance = () => {
    const [selectedPolicy, setSelectedPolicy] = useState("");
    const [vote, setVote] = useState(""); // For storing the user's vote (For or Against)
    const [message, setMessage] = useState("");

    const handleVote = async (e) => {
        e.preventDefault();

        if (!selectedPolicy || !vote) {
            setMessage("Please select a policy and vote option.");
            return;
        }

        try {
            // Replace with actual API call
            console.log(`Voting ${vote} for policy: ${selectedPolicy}`);

            setMessage(`Successfully voted ${vote} for policy: ${selectedPolicy}.`);
        } catch (error) {
            setMessage("Vote failed. Please try again.");
        }
    };

    return (
        <div className="governance-container">
            <h2>Governance: Vote on Policy</h2>
            
            <form onSubmit={handleVote}>
                <label>Select Policy:</label>
                <select value={selectedPolicy} onChange={(e) => setSelectedPolicy(e.target.value)}>
                    <option value="">Select Policy</option>
                    <option value="Energy Price Adjustment">Energy Price Adjustment</option>
                    <option value="Infrastructure Upgrade">Infrastructure Upgrade</option>
                    <option value="Sustainability Goals">Sustainability Goals</option>
                </select>

                <label>Vote:</label>
                <div>
                    <input 
                        type="radio" 
                        id="for" 
                        name="vote" 
                        value="For" 
                        onChange={(e) => setVote(e.target.value)} 
                    />
                    <label htmlFor="for">For</label>

                    <input 
                        type="radio" 
                        id="against" 
                        name="vote" 
                        value="Against" 
                        onChange={(e) => setVote(e.target.value)} 
                    />
                    <label htmlFor="against">Against</label>
                </div>

                <button type="submit">Submit Vote</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default Governance;
