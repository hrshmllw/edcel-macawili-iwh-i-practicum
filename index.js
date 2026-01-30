const express = require("express");
require("dotenv").config();

const app = express();

// Configure Pug as view engine
app.set("view engine", "pug");

// Serve static files from /public
app.use(express.static(__dirname + "/public"));

// Basic GET route
app.get("/", (req, res) => {
	res.send("Server running");
});

// Listen on port 3000
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
