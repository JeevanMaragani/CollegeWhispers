const express = require('express');
const router = express.Router();

// Dummy college data (we will replace this with MongoDB later)
const colleges = [
    { id: 1, name: "College of Engineering", location: "City A" },
    { id: 2, name: "Tech University", location: "City B" },
];

// @route   GET /api/colleges
// @desc    Get all colleges
// @access  Public
router.get('/', (req, res) => {
    res.json(colleges);
});

module.exports = router;
