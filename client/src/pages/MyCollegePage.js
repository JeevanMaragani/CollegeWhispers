// whisper/client/src/pages/MyCollegePage.js
import React, { useState, useEffect } from 'react';
import ConfessionList from '../ConfessionList';
import FAB from '../components/FAB';

const MyCollegePage = () => {
    const [confessions, setConfessions] = useState([]);
    const [error, setError] = useState(null); // State to handle errors

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

    return (
        <div className="max-w-3xl mx-auto p-4 sm:p-6 lg:p-8">
            {error && <div className="text-red-600 text-center">{error}</div>}
            <ConfessionList confessions={confessions} />
            <FAB /> 
        </div>
    );
};

export default MyCollegePage;
