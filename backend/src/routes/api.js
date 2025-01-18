const express = require("express");
const router = express.Router();
import User from "../model/user";
import Workout from "../model/workout";

const users = [];
const workouts = [];

// GET endpoint for /api/users
router.get("/users", (req, res) => {

    // Responding with hardcoded JSON data
    res.json({
        "result": users
    });
});

// POST endpoint for /api/users
router.post("/users", (req, res) => {

    // Getting the request body
    users.push(new User(req.body));

    // Responding with the request body
    res.json({
        "result": req.body
    });
});

module.exports = router;
