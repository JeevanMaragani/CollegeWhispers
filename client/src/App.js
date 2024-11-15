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
                <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-10 flex flex-col items-center"> 
                    {/* Centered Logo */}
                    <h1 className="text-3xl font-extrabold text-[#FF0800] mb-2">CollegeWhispers</h1>
                    
                    {/* Centered Links under the logo with tooltips */}
                    <div className="space-x-8">
                        <a
                            href="/my-college"
                            className="relative group text-gray-700 hover:text-[#FF6F61] focus:text-[#FF6F61] transition duration-300"
                        >
                            My College
                            <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-max opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
                                Stories from your college
                            </span>
                        </a>
                        <a
                            href="/explore"
                            className="relative group text-gray-700 hover:text-[#FF6F61] focus:text-[#FF6F61] transition duration-300"
                        >
                            Explore
                            <span className="absolute left-1/2 transform -translate-x-1/2 mt-1 w-max opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity bg-gray-800 text-white text-xs rounded px-2 py-1">
                                Stories from other colleges
                            </span>
                        </a>
                    </div>
                </nav>

                {/* Main Content */}
                <main className="flex-grow pt-20 p-8">
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
