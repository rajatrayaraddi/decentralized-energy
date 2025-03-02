import React, { useState } from "react";

const EnergyTrade = () => {
    const [tradeFrom, setTradeFrom] = useState("");
    const [tradeTo, setTradeTo] = useState("");
    const [amount, setAmount] = useState("");
    const [message, setMessage] = useState("");

    const handleTrade = async (e) => {
        e.preventDefault();
        
        if (!tradeFrom || !tradeTo || !amount) {
            setMessage("Please fill in all fields before proceeding.");
            return;
        }

        if (tradeFrom === tradeTo) {
            setMessage("You cannot trade to the same entity.");
            return;
        }

        try {
            // Replace with actual API call
            console.log(`Trading ${amount} tokens from ${tradeFrom} to ${tradeTo}`);

            setMessage(`Successfully traded ${amount} tokens from ${tradeFrom} to ${tradeTo}.`);
        } catch (error) {
            setMessage("Trade failed. Please try again.");
        }
    };

    return (
        <div className="trade-container">
            <h2>Trade Energy Tokens</h2>
            
            <form onSubmit={handleTrade}>
                <label>Trade From:</label>
                <select value={tradeFrom} onChange={(e) => setTradeFrom(e.target.value)}>
                    <option value="">Select Entity</option>
                    <option value="User1">User 1</option>
                    <option value="User2">User 2</option>
                    <option value="CompanyX">Company X</option>
                </select>

                <label>Trade To:</label>
                <select value={tradeTo} onChange={(e) => setTradeTo(e.target.value)}>
                    <option value="">Select Entity</option>
                    <option value="User1">User 1</option>
                    <option value="User2">User 2</option>
                    <option value="CompanyX">Company X</option>
                </select>

                <label>Amount:</label>
                <input 
                    type="number" 
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                    placeholder="Enter amount"
                    min="1"
                />

                <button type="submit">Execute Trade</button>
            </form>

            {message && <p>{message}</p>}
        </div>
    );
};

export default EnergyTrade;
