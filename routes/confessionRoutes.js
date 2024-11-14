const express = require('express');
const router = express.Router();
const Confession = require('../models/Confession');

// @route   POST /api/confessions
// @desc    Create a new confession
router.post('/', async (req, res) => {
    try {
        const { text, author, category } = req.body;

        // Set default author to "Anonymous" if not provided
        const confessionAuthor = author || 'Anonymous';

        // Create a new confession with the category included
        const newConfession = new Confession({
            text,
            author: confessionAuthor,
            category  // Add the category field here
        });

        await newConfession.save();
        res.json(newConfession);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET /api/confessions
// @desc    Get all confessions
router.get('/', async (req, res) => {
    try {
        const confessions = await Confession.find().sort({ date: -1 });
        res.json(confessions);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
