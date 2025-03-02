const express = require("express");
const router = express.Router();

// Fetch Transaction History
router.get("/history", (req, res) => {
  res.json({
    transactions: [
      { from: "Alice", to: "Bob", amount: 10, timestamp: Date.now() },
      { from: "Charlie", to: "Alice", amount: 5, timestamp: Date.now() },
    ],
  });
});

module.exports = router;
