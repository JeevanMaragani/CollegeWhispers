import React, { useState, useEffect } from 'react';

const ConfessionForm = ({ addConfession }) => {
    const [text, setText] = useState('');
    const [category, setCategory] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const maxCharLimit = 500;

    useEffect(() => {
        if (submitted) {
            setText('');
            setCategory('');
        }
    }, [submitted]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        const newConfession = { text, category };

        try {
            const response = await fetch('https://collegewhispers-backend.onrender.com/api/confessions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newConfession),
            });

            if (!response.ok) throw new Error('Failed to submit confession. Please try again.');
            
            const data = await response.json();
            addConfession(data);

            setSubmitted(true);
            setError(null);

            setTimeout(() => {
                setSubmitted(false);
            }, 3000);

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-lg sm:max-w-2xl">
                <h2 className="text-3xl font-bold text-center text-[#FF6F61] mb-4">Share Your story here🥰.</h2>

                {error && <div className="text-red-600 text-center mb-4">{error}</div>}

                {submitted ? (
                    <div className="text-green-600 text-center">Your story has been successfully submitted!</div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                        {/* Category Field */}
                        <div>
                            <label className="block text-[#FF6F61] font-bold mb-1">Category:</label>
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61] bg-white shadow-sm placeholder-opacity-50"
                            >
                                <option value="">Select Category (optional)</option>
                                <option value="Love">Love</option>
                                <option value="Academics">Academics</option>
                                <option value="Campus Life">Campus Life</option>
                                <option value="Embarrassing Moments">Embarrassing Moments</option>
                                <option value="Crush">Crush</option>
                                <option value="Advice">Advice</option>
                            </select>
                        </div>

                        {/* Confession Field */}
                        <div>
                            <label className="block text-[#FF6F61] font-bold mb-1">Confession:</label>
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="What's on your mind?"
                                maxLength={maxCharLimit}
                                required
                                className="w-full p-4 h-40 sm:h-48 border border-[#FF6F61] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6F61] bg-white shadow-sm placeholder-opacity-50"
                            />
                            <p className="text-right text-sm text-gray-500">{text.length}/{maxCharLimit} characters</p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={!text.trim()}
                            className={`w-full p-3 rounded-lg transition duration-300 ${!text.trim() ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-[#FF0800] text-white hover:bg-[#FF6F61]'}`}
                        >
                            Submit Confession
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ConfessionForm;
