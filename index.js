const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();

// Environment variables
const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const CUSTOM_OBJECT_NAME = process.env.CUSTOM_OBJECT_NAME;

// Configure Pug as view engine
app.set("view engine", "pug");

// Serve static files from /public
app.use(express.static(__dirname + "/public"));

// GET route for homepage - fetch custom objects
app.get("/", async (req, res) => {
	const apiUrl = `https://api.hubspot.com/crm/v3/objects/${CUSTOM_OBJECT_NAME}?properties=name,description,price`;
	const headers = {
		Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
		"Content-Type": "application/json",
	};

	try {
		const response = await axios.get(apiUrl, { headers });
		const records = response.data.results.map((record) => ({
			name: record.properties.name,
			description: record.properties.description,
			price: record.properties.price,
		}));
		res.render("homepage", { title: "Custom Object Table", records });
	} catch (error) {
		console.error("Error fetching custom objects:", error.message);
		res.status(500).send("Error fetching data from HubSpot");
	}
});

// GET route for update custom object form
app.get("/update-cobj", (req, res) => {
	res.render("updates", {
		title: "Update Custom Object Form | Integrating With HubSpot I Practicum",
	});
});

// Listen on port 3000
app.listen(3000, () => console.log("Listening on http://localhost:3000"));
