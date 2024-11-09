const express = require('express');
const router = express.Router();
const Confession = require('../models/Confession');

// @route   POST /api/confessions
// @desc    Create a new confession
router.post('/', async (req, res) => {
    try {
        const { text, author } = req.body;

        // Set default author to "Anonymous" if not provided
        const confessionAuthor = author || 'Anonymous';

        // Create a new confession
        const newConfession = new Confession({
            text,
            author: confessionAuthor
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

// @route   PUT /api/confessions/:id/like
// @desc    Like a confession
router.put('/:id/like', async (req, res) => {
    try {
        const confession = await Confession.findById(req.params.id);
        if (!confession) {
            return res.status(404).json({ message: 'Confession not found' });
        }
        
        // Increment the likes count
        confession.likes += 1;
        await confession.save();
        
        // Send back the updated confession
        res.json(confession);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
