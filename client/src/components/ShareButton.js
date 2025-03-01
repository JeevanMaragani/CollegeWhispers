import React, { useRef } from 'react';
import { AiOutlineShareAlt } from 'react-icons/ai';
import html2canvas from 'html2canvas';

const ShareButton = ({ cardRef, categoryClass }) => {
    const shareButtonRef = useRef(null);

    const handleImageShare = async () => {
        if (cardRef.current) {
            try {
                if (shareButtonRef.current) {
                    shareButtonRef.current.style.display = 'none';
                }

                const canvas = await html2canvas(cardRef.current, { scale: 3, useCORS: true, backgroundColor: null });

                canvas.toBlob((blob) => {
                    if (navigator.share && blob) {
                        const file = new File([blob], "confession.png", { type: "image/png" });
                        navigator.share({
                            files: [file],
                            title: "Check out this confession!",
                        }).catch(console.error);
                    } else {
                        const link = document.createElement("a");
                        link.href = canvas.toDataURL("image/png");
                        link.download = "confession.png";
                        link.click();
                    }
                });
            } catch (error) {
                console.error("Error capturing image:", error);
            } finally {
                if (shareButtonRef.current) {
                    shareButtonRef.current.style.display = 'block';
                }
            }
        }
    };

    return (
        <button 
            ref={shareButtonRef} 
            onClick={handleImageShare} 
            className={`p-2.5 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-md focus:outline-none ${categoryClass}`}
        >
            <AiOutlineShareAlt className="h-6 w-6 text-gray-50 drop-shadow-sm" />
        </button>
    );
};

export default ShareButton;
