// whisper/client/src/components/SkeletonLoader.js
import React from 'react';

const SkeletonLoader = () => {
    return (
        <div className="animate-pulse space-y-4">
            <div className="bg-gray-200 h-6 w-1/3 rounded"></div>
            <div className="bg-gray-200 h-4 w-2/3 rounded"></div>
            <div className="bg-gray-200 h-16 w-full rounded"></div>
        </div>
    );
};

export default SkeletonLoader;
