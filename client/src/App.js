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
            <h1 className="text-3xl font-extrabold text-[#E63946] mb-2">CollegeWhispers</h1>

            {/* Navigation Links */}
            <div className="space-x-4 flex">
                <a
                    href="/my-college"
                    className={`text-lg transition-all duration-300 ${
                        location.pathname === '/my-college'
                            ? 'text-[#E63946] font-bold'
                            : 'text-[#5F5F5F] hover:text-[#E63946]'
                    }`}
                >
                    My College
                </a>
                <a
                    href="/explore"
                    className={`text-lg transition-all duration-300 ${
                        location.pathname === '/explore'
                            ? 'text-[#E63946] font-bold'
                            : 'text-[#5F5F5F] hover:text-[#E63946]'
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
                <a href="/confess" className="fixed bottom-8 right-8 bg-[#E63946] text-white p-4 rounded-full shadow-lg hover:bg-[#FF6F61] transition transform hover:scale-110 duration-300">
                    +
                </a>
            </div>
        </Router>
    );
}

export default App;
