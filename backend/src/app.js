const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require("./routes/api");

// Creating an express app
const app = express();
const PORT = process.env.PORT || 3000;

// Using bodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Using API routes
app.use("/api", apiRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
