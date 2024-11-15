import React, { useState, useEffect } from 'react';
import ConfessionList from '../ConfessionList';
import FAB from '../components/FAB'; 

const ExplorePage = () => {
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
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#E0E0E0] mb-2 sm:mb-4 text-center">
            
            </h2>
            {error && <div className="text-red-600 text-center">{error}</div>}
            <ConfessionList confessions={confessions} />
            <FAB /> 
        </div>
    );
};

export default ExplorePage;
