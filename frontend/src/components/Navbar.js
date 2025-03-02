import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Decentralized Energy</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/trade">Trade Energy</Link></li>
        <li><Link to="/vote">Governance</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
