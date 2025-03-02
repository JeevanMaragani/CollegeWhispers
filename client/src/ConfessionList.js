import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const ConfirmModal = ({ onConfirm, onCancel, message }) => {
    return (
        <AnimatePresence>
            <motion.div 
                className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                <motion.div 
                    className="bg-white rounded-lg p-6 shadow-lg"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.8 }}
                >
                    <p className="mb-4 text-lg text-center">{message}</p>
                    <div className="flex justify-center gap-4">
                        <button 
                            className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
                            onClick={onConfirm}
                        >
                            Yes
                        </button>
                        <button 
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
                            onClick={onCancel}
                        >
                            No
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

const ConfessionItem = ({ confession }) => {
    const cardRef = useRef(null);
    const [showConfirm, setShowConfirm] = useState(false);
    const [clicked, setClicked] = useState(false);

    // Fallback to 'General' if no category is provided
    const categoryName = confession.category || "General";
    const categoryClass = confession.category 
        ? categoryColors[confession.category] 
        : "bg-pink-200 text-pink-800";

    const handleInstagramClick = (e) => {
        e.preventDefault();
        setShowConfirm(true);
    };

    const handleConfirm = () => {
        setShowConfirm(false);
        setClicked(true);
        window.open("https://instagram.com/collegewhispers", "_blank", "noopener,noreferrer");
    };

    const handleCancel = () => {
        setShowConfirm(false);
    };

    return (
        <>
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
                        <motion.a 
                            href="https://instagram.com/collegewhispers" 
                            onClick={handleInstagramClick}
                            whileHover={{ scale: 1.05, color: '#db2777' }}
                            whileTap={{ scale: 0.95 }}
                            animate={{ color: clicked ? '#c026d3' : '#000000' }}
                            className="transition-colors duration-300"
                        >
                            <InstagramHandle />
                        </motion.a>
                        <ShareButton cardRef={cardRef} categoryClass={categoryClass} />
                    </div>
                </div>
            </motion.div>
            {showConfirm && (
                <ConfirmModal 
                    message="Do you want to open Instagram and see if your confession is posted?"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default ConfessionList;
