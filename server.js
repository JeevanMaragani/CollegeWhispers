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


// Configure CORS to allow requests from both the frontend (Netlify) and localhost (for development)
app.use(cors({
    origin: [
        'http://localhost:3000', // Allow local development on localhost:3000
        'https://collegewhispers.netlify.app' // Replace with your actual Netlify URL
    ],


    credentials: true, // If you need cookies to be sent between frontend and backend
}));

// Routes
app.use('/api/confessions', require('./routes/confessionRoutes'));

// Basic route to test
app.get('/', (req, res) => {
    res.send('Whisper backend is running!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
