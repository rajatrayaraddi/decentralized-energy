const express = require("express");
const router = express.Router();

// Dummy Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "password") {
    return res.json({ message: "Login successful", token: "fake-jwt-token" });
  }
  return res.status(401).json({ message: "Invalid credentials" });
});

module.exports = router;
