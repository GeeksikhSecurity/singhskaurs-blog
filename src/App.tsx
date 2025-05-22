import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JourneyList from './pages/JourneyList';
import Journey from './pages/Journey';
import Principle from './pages/Principle';
import Profile from './pages/Profile';
import FearLevelsBlogPost from './pages/FearLevelsBlogPost';
import Blog from './pages/Blog';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 dark:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/journeys" element={<JourneyList />} />
            <Route path="/journey/:journeyId" element={<Journey />} />
            <Route path="/principle/:principleId" element={<Principle />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/moving-beyond-fear-levels-of-consciousness" element={<FearLevelsBlogPost />} />
          </Routes>
        </main>
        <div className="fixed bottom-4 right-4">
          <ThemeToggle />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;