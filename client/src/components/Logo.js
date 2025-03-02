import React from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
    const navigate = useNavigate();

    return (
        <h1
            className="text-3xl font-extrabold text-[#E63946] mb-2 cursor-pointer hover:scale-105 transition-all duration-300"
            onClick={() => navigate("/")}
        >
            CollegeWhispers
        </h1>
    );
};

export default Logo;
