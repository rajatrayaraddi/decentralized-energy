const express = require("express");
const router = express.Router();

// Fetch Energy Balance (Dummy Data)
router.get("/balance", (req, res) => {
  res.json({ balance: 100, unit: "kWh" });
});

// Transfer Energy Tokens
router.post("/transfer", (req, res) => {
  const { from, to, amount } = req.body;
  res.json({ message: `Transferred ${amount} ETK from ${from} to ${to}` });
});

module.exports = router;
