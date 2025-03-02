const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/energy", require("./routes/energy"));
app.use("/api/transactions", require("./routes/transactions"));
app.use("/api/governance", require("./routes/governance"));

// Default Route
app.get("/", (req, res) => {
  res.send("Decentralized Energy Backend is Running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
