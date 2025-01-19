const express = require("express");
const apiRoutes = require("./routes/api");
const mongoose = require("mongoose");
const workoutModel = require("./mongodb/schemas").workoutModel;
const initialState = require("./mongodb/initial_state").initialState;
require('dotenv').config();
const cors = require('cors');

// Initializing an instance of "express" and setting up all dependencies
let app = express();
const port = 3001;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Object to store allowed sites for CORS
const corsOptions = {
    origins: ["http://localhost:8080", "http://localhost:3000", "http://localhost:5173", "https://commit111-frontend--3000.prod1.defang.dev"]
}

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

// Using API routes
app.use("/api", apiRoutes);

// Connecting to the nwHacks-2025 database in the MongoDB cluster
mongoose.connect(process.env.ATLAS_URI, { dbName: "nwHacks-2025" }).then(async () => {
    console.log("Successfully connected to Atlas MongoDB server!");
    // Inserting initial data if the database is empty
    const data = await workoutModel.find({});
    if (data.length == 0) {
        await workoutModel.insertMany(JSON.parse(initialState));
    }
}).catch(
    error => {console.log("Error connecting to MongoDB Atlas server: " + error)}
);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



module.exports = app;
