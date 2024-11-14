import React, { useState, useEffect, useRef } from 'react';
import { WhatsappShareButton, WhatsappIcon } from 'react-share';
import { AiOutlineShareAlt, AiFillInstagram } from 'react-icons/ai';

const ConfessionList = ({ confessions }) => {
    return (
        <div className="max-w-3xl mx-auto mt-6 space-y-4">
            {confessions.length > 0 ? (
                <ul className="space-y-4">
                    {confessions.map((confession) => (
                        <ConfessionItem key={confession._id} confession={confession} />
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No confessions yet.</p>
            )}
        </div>
    );
};

const ConfessionItem = ({ confession }) => {
    const [showShareOptions, setShowShareOptions] = useState(false);
    const dropdownRef = useRef(null);
    const buttonRef = useRef(null);

    const shareUrl = `https://mycollegewhispers.com/confession/${confession._id}`;
    const title = confession.text.slice(0, 100) + "...";

    const toggleShareOptions = () => {
        setShowShareOptions((prev) => !prev);
    };

    // Close share options when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowShareOptions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleMouseLeave = () => {
        setTimeout(() => {
            if (
                dropdownRef.current && 
                buttonRef.current &&
                !dropdownRef.current.matches(':hover') &&
                !buttonRef.current.matches(':hover')
            ) {
                setShowShareOptions(false);
            }
        }, 200);
    };

    return (
        <li className="bg-[#FDF3F3] p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center space-x-2 mb-3">
                <strong className="text-[#FF6F61] font-semibold text-lg">
                    {confession.author || 'Anonymous'}
                </strong>
                {confession.category && (
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                        {confession.category}
                    </span>
                )}
            </div>
            
            {/* Display Confession Text */}
            <p className="text-gray-700 text-base mb-4">{confession.text}</p>

            <div className="flex justify-between items-center">
                <small className="text-gray-500 text-sm">
                    {new Date(confession.date).toLocaleString()}
                </small>

                <div className="relative" onMouseLeave={handleMouseLeave}>
                    <button
                        ref={buttonRef}
                        onClick={toggleShareOptions}
                        className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                    >
                        <AiOutlineShareAlt className="h-6 w-6" />
                    </button>

                    {showShareOptions && (
                        <div
                            ref={dropdownRef}
                            className="absolute right-0 mt-2 p-2 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
                        >
                            <div className="flex space-x-2">
                                <WhatsappShareButton url={shareUrl} title={title}>
                                    <WhatsappIcon size={32} round={true} />
                                </WhatsappShareButton>
                                <a
                                    href={`https://www.instagram.com/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white"
                                >
                                    <AiFillInstagram className="h-6 w-6" />
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default ConfessionList;
