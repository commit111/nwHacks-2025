const express = require("express");
const router = express.Router();

// GET endpoint for /api/users
router.get("/users", (req, res) => {

    // Responding with hardcoded JSON data
    res.json({
        "result": [
            {
                "id": 1,
                "name": "John Doe",
                "email": "test@example.com"
            }
        ]
    });
});

module.exports = router;
