import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import MyCollegePage from './pages/MyCollegePage';
import ExplorePage from './pages/ExplorePage';
import ConfessionFormPage from './pages/ConfessionFormPage';

function Navigation() {
    const location = useLocation();

    return (
        <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-10 flex flex-col items-center">
            {/* Centered Logo */}
            <h1 className="text-3xl font-extrabold text-[#FF0800] mb-2">CollegeWhispers</h1>

            {/* Navigation Links */}
            <div className="space-x-8 flex">
                <a
                    href="/my-college"
                    className={`px-3 py-1 rounded-full text-lg font-semibold transition-all duration-300 ${
                        location.pathname === '/my-college'
                            ? 'bg-[#FF6F61] bg-opacity-50 text-white'
                            : 'text-gray-700 hover:bg-gray-200 hover:bg-opacity-50'
                    }`}
                >
                    My College
                </a>
                <a
                    href="/explore"
                    className={`px-3 py-1 rounded-full text-lg font-semibold transition-all duration-300 ${
                        location.pathname === '/explore'
                            ? 'bg-[#FF6F61] bg-opacity-50 text-white'
                            : 'text-gray-700 hover:bg-gray-200 hover:bg-opacity-50'
                    }`}
                >
                    Explore
                </a>
            </div>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <Navigation />
                <main className="flex-grow pt-24 p-8">
                    <Routes>
                        <Route path="/my-college" element={<MyCollegePage />} />
                        <Route path="/explore" element={<ExplorePage />} />
                        <Route path="/confess" element={<ConfessionFormPage />} />
                    </Routes>
                </main>

                {/* Floating Action Button */}
                <a href="/confess" className="fixed bottom-8 right-8 bg-[#E60023] text-white p-4 rounded-full shadow-lg hover:bg-[#FF6F61] transition transform hover:scale-110 duration-300">
                    +
                </a>
            </div>
        </Router>
    );
}

export default App;
