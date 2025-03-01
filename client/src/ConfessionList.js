import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import categoryColors from './utils/categoryColors';
import InstagramHandle from './components/InstagramHandle';
import ShareButton from './components/ShareButton';

const ConfessionList = ({ confessions }) => {
    if (!Array.isArray(confessions)) {
        console.error("Expected confessions to be an array, but received:", confessions);
        return <p className="text-gray-500 text-center">No confessions available.</p>;
    }

    return (
        <motion.div
            className="
                max-w-3xl 
                mx-auto 
                mt-6 
                space-y-6 
                px-4 
                py-8
                // Removed background and min-h-screen to avoid the large pink rectangle
            "
        >
            {confessions.length > 0 ? (
                confessions.map((confession) => (
                    <ConfessionItem key={confession._id} confession={confession} />
                ))
            ) : (
                <p className="text-gray-500 text-center">No confessions yet.</p>
            )}
        </motion.div>
    );
};

const ConfessionItem = ({ confession }) => {
    const cardRef = useRef(null);

    // Fallback to 'General' if no category is provided
    const categoryName = confession.category || "General";
    const categoryClass = confession.category 
        ? categoryColors[confession.category] 
        : "bg-pink-200 text-pink-800";

    return (
        <motion.div
            ref={cardRef}
            className="
                relative 
                bg-gradient-to-br from-pink-50 to-pink-100 
                p-6 
                rounded-xl 
                shadow-md 
                border border-pink-200 
                hover:shadow-lg 
                hover:scale-[1.02] 
                transition 
                duration-300 
                flex 
                flex-col 
                gap-5
            "
        >
            {/* Category Pill & Confession Content */}
            <div className="flex flex-col gap-4">
                <span 
                    className={`
                        px-3 py-1 
                        rounded-full 
                        text-sm 
                        font-semibold 
                        shadow-sm 
                        self-start
                        ${categoryClass}
                    `}
                >
                    {categoryName}
                </span>
                {/* Confession text in Comic Sans */}
                <p className="text-pink-700 text-lg font-medium leading-relaxed break-words font-['Comic Sans MS']">
                    {confession.text}
                </p>
            </div>

            {/* Footer Section with Date, Instagram Handle, and Share Button */}
            <div className="flex justify-between items-center mt-4">
                <small className="text-pink-400 text-xs font-light">
                    {new Date(confession.date).toLocaleString()}
                </small>
                <div className="flex items-center gap-2">
                    <InstagramHandle />
                    <ShareButton cardRef={cardRef} categoryClass={categoryClass} />
                </div>
            </div>
        </motion.div>
    );
};

export default ConfessionList;
