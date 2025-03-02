import React from "react";
import WalletConnect from "../components/WalletConnect";

function Home() {
  return (
    <div>
      <h1>Welcome to Decentralized Energy</h1>
      <p>Trade energy, vote on policies, and contribute to the community.</p>
      <WalletConnect />
    </div>
  );
}

export default Home;
