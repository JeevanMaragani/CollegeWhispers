import React from 'react';

const ConfessionList = ({ confessions }) => {
    return (
        <div className="max-w-3xl mx-auto mt-6 space-y-4">
            {confessions.length > 0 ? (
                <ul className="space-y-4">
                    {confessions.map((confession) => (
                        <li key={confession._id} className="bg-[#FDF3F3] p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
                            <strong className="block text-[#FF6F61] font-semibold text-lg mb-3">
                                {confession.author || 'Anonymous'}
                            </strong>
                            <p className="text-gray-700 text-base mb-4">{confession.text}</p>
                            <div className="flex justify-between items-center">
                                <small className="text-gray-500 text-sm">
                                    {new Date(confession.date).toLocaleString()}
                                </small>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No confessions yet.</p>
            )}
        </div>
    );
};

export default ConfessionList;
