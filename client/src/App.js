import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyCollegePage from './pages/MyCollegePage';
import ExplorePage from './pages/ExplorePage';
import ConfessionFormPage from './pages/ConfessionFormPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                {/* Navigation Bar */}
                <nav className="bg-white shadow-md py-4 px-8 fixed w-full top-0 z-10">
                    {/* Update branding name and style */}
                    <h1 className="text-2xl font-bold text-[#FF6F61]">CollegeWhispers</h1> 
                    <div className="space-x-4">
                        <a href="/my-college" className="text-gray-700 hover:text-[#FF6F61] transition duration-300">My College</a>
                        <a href="/explore" className="text-gray-700 hover:text-[#FF6F61] transition duration-300">Explore</a>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-grow pt-24 p-8">
                    <Routes>
                        <Route path="/my-college" element={<MyCollegePage />} />
                        <Route path="/explore" element={<ExplorePage />} />
                        <Route path="/confess" element={<ConfessionFormPage />} />
                    </Routes>
                </main>

                {/* Floating Action Button */}
                <a href="/confess" className="fixed bottom-8 right-8 bg-[#FF0800] text-white p-4 rounded-full shadow-lg hover:bg-[#FF6F61] transition transform hover:scale-110 duration-300">
                    +
                </a>
            </div>
        </Router>
    );
}

export default App;
