require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Immediately Invoked Function Expression to handle async connectDB
(async () => {
    await connectDB();
})();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Configure CORS to allow requests from both frontend and localhost for development
app.use(cors({
    origin: [
        'http://localhost:3000', // Allow local development on localhost:3000
        'https://collegewhispers.netlify.app' // Replace with your actual Netlify URL
    ],
    credentials: true, // Only needed if you require cookies to be sent between frontend and backend
}));

// Routes
app.use('/api/confessions', require('./routes/confessionRoutes'));
app.use('/api/colleges', require('./routes/collegeRoutes'));

// Basic route to test
app.get('/', (req, res) => {
    res.send('Whisper backend is running!');
});

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
