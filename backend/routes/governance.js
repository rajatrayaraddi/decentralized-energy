const express = require("express");
const router = express.Router();

// Submit a Proposal
router.post("/proposal", (req, res) => {
  const { title, description } = req.body;
  res.json({ message: `Proposal "${title}" submitted successfully!` });
});

// Fetch Proposals
router.get("/proposals", (req, res) => {
  res.json({
    proposals: [
      { id: 1, title: "Upgrade Solar Panels", votes: 12 },
      { id: 2, title: "Reduce Transaction Fees", votes: 8 },
    ],
  });
});

module.exports = router;
