require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
// Connect to the database
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/confessions', require('./routes/confessionRoutes'));

// Basic route to test
app.get('/', (req, res) => {
    res.send('Whisper backend is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

