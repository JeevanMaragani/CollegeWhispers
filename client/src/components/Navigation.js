// whisper/client/src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="flex justify-center space-x-6 p-4 bg-white shadow-md">
            {/* My College Link with Tooltip */}
            <Link
                to="/my-college"
                className="relative group text-lg font-semibold text-gray-800"
            >
                My College
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
                    Stories from your college
                </span>
            </Link>

            {/* Explore Link with Tooltip */}
            <Link
                to="/explore"
                className="relative group text-lg font-semibold text-gray-800"
            >
                Explore
                <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-max opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
                    Stories from other colleges
                </span>
            </Link>
        </nav>
    );
};

export default Navigation;
