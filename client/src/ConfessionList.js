import React, { useState, useEffect, useRef } from 'react';
import {
    WhatsappShareButton,
    WhatsappIcon,
} from 'react-share';
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

// ConfessionItem component with category and share button
const ConfessionItem = ({ confession }) => {
    const [showShareOptions, setShowShareOptions] = useState(false);
    const dropdownRef = useRef(null); // Reference to the share dropdown
    const buttonRef = useRef(null); // Reference to the share button

    // The URL to share (can be replaced with the actual confession URL)
    const shareUrl = `https://mycollegewhispers.com/confession/${confession._id}`;
    const title = confession.text.slice(0, 100) + "..."; // Share a snippet of the confession

    // Toggle the visibility of share options
    const toggleShareOptions = () => {
        setShowShareOptions(!showShareOptions);
    };

    // Close the share options when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setShowShareOptions(false); // Close the share options if clicked outside
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownRef, buttonRef]);

    // Close the share options when the mouse leaves both button and dropdown area
    const handleMouseLeave = () => {
        setTimeout(() => {
            // Ensure both dropdownRef.current and buttonRef.current are not null
            if (
                dropdownRef.current && 
                buttonRef.current &&
                !dropdownRef.current.matches(':hover') &&
                !buttonRef.current.matches(':hover')
            ) {
                setShowShareOptions(false); // Close the dropdown if not hovering over button or dropdown
            }
        }, 200); // Small delay to allow for checking hover state
    };

    return (
        <li className="bg-[#FDF3F3] p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
            <strong className="block text-[#FF6F61] font-semibold text-lg mb-3">
                {confession.author || 'Anonymous'}
            </strong>
            
            {/* Display Confession Text */}
            <p className="text-gray-700 text-base mb-4">{confession.text}</p>
            
            {/* Display Category */}
            {confession.category && (
                <span className="inline-block bg-gray-200 text-sm text-gray-700 font-semibold px-3 py-1 rounded-full mb-4">
                    {confession.category}
                </span>
            )}

            <div className="flex justify-between items-center">
                <small className="text-gray-500 text-sm">
                    {new Date(confession.date).toLocaleString()}
                </small>

                {/* Single Share Button */}
                <div className="relative" onMouseLeave={handleMouseLeave}>
                    <button
                        ref={buttonRef} // Reference to the share button
                        onClick={toggleShareOptions}
                        className="p-2 bg-gray-300 rounded-full hover:bg-gray-400 transition"
                    >
                        <AiOutlineShareAlt className="h-6 w-6" /> {/* New share icon */}
                    </button>

                    {/* Share Options Dropdown */}
                    {showShareOptions && (
                        <div
                            ref={dropdownRef} // Reference to the dropdown
                            className="absolute right-0 mt-2 p-2 bg-white border border-gray-200 shadow-lg rounded-lg z-10"
                        >
                            <div className="flex space-x-2">
                                {/* WhatsApp Share */}
                                <WhatsappShareButton url={shareUrl} title={title}>
                                    <WhatsappIcon size={32} round={true} />
                                </WhatsappShareButton>

                                {/* Instagram (Custom Share) */}
                                <a
                                    href={`https://www.instagram.com/`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-8 h-8 rounded-full bg-pink-500 text-white"
                                >
                                    <AiFillInstagram className="h-6 w-6" /> {/* Instagram icon */}
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
