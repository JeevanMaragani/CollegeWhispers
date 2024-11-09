import React, { useState } from 'react';

const ChatModal = ({ confession, closeChat }) => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      text: message,
      sender: 'You',  // Since this is anonymous chat, no real user info is displayed
      timestamp: new Date().toLocaleString(),
    };

    setChatHistory([...chatHistory, newMessage]);
    setMessage('');  // Clear the input field
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 w-full max-w-md">
        <h2 className="text-lg font-bold text-[#FF6F61] mb-4">Chat about this Confession</h2>
        <p className="text-gray-600 mb-4">{confession.text}</p>

        <div className="border-t border-gray-300 mt-4 pt-4">
          <div className="mb-4 h-48 overflow-y-auto bg-gray-100 p-2 rounded">
            {/* Chat history */}
            {chatHistory.map((chat, index) => (
              <div key={index} className="mb-2">
                <strong>{chat.sender}</strong> <span className="text-xs text-gray-500">{chat.timestamp}</span>
                <p>{chat.text}</p>
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-grow border p-2 rounded-l-lg"
            />
            <button
              onClick={sendMessage}
              className="bg-[#FF6F61] text-white p-2 rounded-r-lg hover:bg-[#FF0800] transition duration-300"
            >
              Send
            </button>
          </div>
        </div>

        <button onClick={closeChat} className="mt-4 text-gray-600 hover:text-gray-900">
          Close Chat
        </button>
      </div>
    </div>
  );
};

export default ChatModal;
