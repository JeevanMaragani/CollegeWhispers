import React from 'react';
import { useNavigate } from 'react-router-dom';

const FAB = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/confess');  // Navigate to the Confession form page
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-8 right-8 bg-[#FF0800] hover:bg-[#FF6F61] text-white p-4 rounded-full shadow-lg transition transform hover:scale-110 duration-300"
    >
      +
    </button>
  );
};

export default FAB;
