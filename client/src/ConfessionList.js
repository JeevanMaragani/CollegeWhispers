import React, { useRef } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { motion } from 'framer-motion'; // Import Framer Motion
import html2canvas from 'html2canvas';

// Define color classes for each category and a default color
const categoryColors = {
    Love: 'bg-red-100 text-red-800',
    Academics: 'bg-green-100 text-green-800',
    "Campus Life": 'bg-blue-100 text-blue-800',
    "Embarrassing Moments": 'bg-yellow-100 text-yellow-800',
    Crush: 'bg-pink-100 text-pink-800',
    Advice: 'bg-purple-100 text-purple-800',
    Default: 'bg-gray-100 text-gray-800',
};

const ConfessionList = ({ confessions }) => {
    // Animation settings for the container (staggered animation for child elements)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger each child animation
            },
        },
    };

    // Animation settings for individual confession cards
    const cardVariants = {
        hidden: { opacity: 0, y: 20 }, // Start slightly below and invisible
        visible: { opacity: 1, y: 0 }, // Move into view
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto mt-6 space-y-4 list-none" // Add list-none class here to remove bullets
        >
            {confessions.length > 0 ? (
                confessions.map((confession) => (
                    <ConfessionItem key={confession._id} confession={confession} variants={cardVariants} />
                ))
            ) : (
                <p className="text-gray-500">No confessions yet.</p>
            )}
        </motion.div>
    );
};

const ConfessionItem = ({ confession, variants }) => {
    const cardRef = useRef(null); // Reference to capture the confession card
    const shareButtonRef = useRef(null); // Reference to the share button

    const categoryClass = confession.category ? categoryColors[confession.category] : categoryColors.Default;

    // Capture confession card as an image without watermark
    const handleImageShare = async () => {
        if (cardRef.current) {
            // Temporarily hide the share button for the capture
            if (shareButtonRef.current) {
                shareButtonRef.current.style.display = 'none';
            }

            // Capture the card with higher quality and custom settings
            const canvas = await html2canvas(cardRef.current, {
                scale: 3, // Increase scale for better quality
                useCORS: true,
                width: cardRef.current.clientWidth,
                height: cardRef.current.clientHeight,
                backgroundColor: null, // Keep background transparent if desired
            });

            // Restore the share button visibility after capture
            if (shareButtonRef.current) {
                shareButtonRef.current.style.display = 'block';
            }

            // Convert to blob and share
            canvas.toBlob((blob) => {
                if (navigator.share && blob) {
                    const file = new File([blob], "confession.png", { type: "image/png" });
                    navigator.share({
                        files: [file],
                        title: "Check out this confession!",
                    }).catch(console.error);
                } else {
                    // Fallback: Download image if sharing is unsupported
                    const link = document.createElement("a");
                    link.href = canvas.toDataURL("image/png");
                    link.download = "confession.png";
                    link.click();
                }
            });
        }
    };

    return (
        <motion.li
            ref={cardRef}
            variants={variants} // Apply Framer Motion animation variants
            className="bg-[#FDF3F3] p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
        >
            <div className="flex items-center space-x-2 mb-3">
                <strong className="text-[#FF6F61] font-semibold text-lg">
                    {confession.author || 'Anonymous'}
                </strong>

                {/* Only display category if it exists */}
                {confession.category && (
                    <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryClass}`}
                        style={{
                            display: 'inline-block',
                            lineHeight: '1',
                            textAlign: 'center',
                            minWidth: '50px',
                            maxWidth: '100px',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap',
                            textOverflow: 'ellipsis',
                        }}
                    >
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

                <button
                    ref={shareButtonRef}
                    onClick={handleImageShare}
                    className={`p-2 rounded-full transition ${categoryClass}`}
                >
                    <AiOutlineShareAlt className="h-6 w-6" />
                </button>
            </div>
        </motion.li>
    );
};

export default ConfessionList;
