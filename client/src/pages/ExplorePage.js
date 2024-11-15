// whisper/client/src/pages/ExplorePage.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';
import ConfessionList from '../ConfessionList';
import FAB from '../components/FAB';

const ExplorePage = () => {
    const [confessions, setConfessions] = useState([]);
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate(); // Hook to navigate between pages

    useEffect(() => {
        const fetchConfessions = async () => {
            try {
                const response = await fetch('https://collegewhispers-backend.onrender.com/api/confessions');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch confessions. Please try again.');
                }

                const data = await response.json();
                setConfessions(data);
                setError(null); // Clear any previous errors

            } catch (error) {
                setError(error.message); // Set error message
            }
        };

        fetchConfessions();
    }, []);

    // Swipe handlers
    const handlers = useSwipeable({
        onSwipedRight: () => navigate('/my-college'), // Navigate to My College page
        preventDefaultTouchmoveEvent: true,
    });

    return (
        <div
            {...handlers} // Attach swipe handlers to the container
            className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8"
        >
            {error && <div className="text-red-600 text-center">{error}</div>}
            <ConfessionList confessions={confessions} />
            <FAB /> 
        </div>
    );
};

export default ExplorePage;
