import React from "react";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
            <h1 className="text-4xl font-extrabold text-[#E63946] mb-4">Welcome to CollegeWhispers 🎉</h1>
            <p className="text-lg text-gray-600 max-w-xl">
                Here, you can anonymously share confessions, read real stories, and connect with your college community.
            </p>
            <div className="mt-6 space-x-4">
                <button
                    onClick={() => navigate("/mycollege")}
                    className="bg-[#E63946] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#FF6F61] transition-all"
                >
                    Go to My College
                </button>
                <button
                    onClick={() => navigate("/explore")}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition-all"
                >
                    Explore Confessions
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
