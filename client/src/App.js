import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MyCollegePage from './pages/MyCollegePage';
import ExplorePage from './pages/ExplorePage';
import ConfessionFormPage from './pages/ConfessionFormPage';
import WelcomePage from './pages/WelcomePage';
import Logo from './components/Logo';

function Navigation() {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <nav className="bg-white border-b border-gray-200 py-4 fixed w-full top-0 z-10 flex flex-col items-center">
            {/* Clickable Logo Redirects to Home Page */}
            <Logo />

            {/* Navigation Links */}
            <div className="space-x-4 flex">
                <a
                    href="/mycollege"
                    className={`text-lg transition-all duration-300 ${
                        location.pathname === '/mycollege'
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
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/mycollege" element={<MyCollegePage />} />
                        <Route path="/explore" element={<ExplorePage />} />
                        <Route path="/confess" element={<ConfessionFormPage />} />
                    </Routes>
                </main>

                {/* Floating Action Button */}
                <a
                    href="/confess"
                    className="fixed bottom-8 right-8 bg-[#E63946] text-white p-4 rounded-full shadow-lg hover:bg-[#FF6F61] transition transform hover:scale-110 duration-300"
                >
                    +
                </a>
            </div>
        </Router>
    );
}

export default App;