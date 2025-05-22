import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Award, Shield } from 'lucide-react';
import { useGameContext } from '../context/GameContext';
import { APP_NAME, EXTERNAL_LINKS } from '../utils/constants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { points } = useGameContext();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition"
            >
              <Shield className="h-8 w-8" />
              <span className="text-xl font-bold">{APP_NAME}</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-6">
            <NavLink to="/" label="Home" currentPath={location.pathname} />
            <NavLink to="/journey" label="Journey" currentPath={location.pathname} />
            <NavLink to="/blog" label="Blog" currentPath={location.pathname} />
            <NavLink to="/profile" label="Profile" currentPath={location.pathname} />
          </nav>

          {/* Points counter */}
          <div className="hidden md:flex items-center">
            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full flex items-center space-x-1">
              <Award className="h-4 w-4" />
              <span className="font-medium">{points} Points</span>
            </div>
            <Link 
              to="/profile" 
              className="ml-4 p-2 rounded-full bg-indigo-100 hover:bg-indigo-200 transition"
            >
              <User className="h-5 w-5 text-indigo-600" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-indigo-600 hover:text-indigo-800 hover:bg-indigo-50 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink 
              to="/" 
              label="Home" 
              currentPath={location.pathname} 
              onClick={() => setIsMenuOpen(false)} 
            />
            <MobileNavLink 
              to="/journey" 
              label="Journey" 
              currentPath={location.pathname} 
              onClick={() => setIsMenuOpen(false)} 
            />
            <MobileNavLink 
              to="/blog" 
              label="Blog" 
              currentPath={location.pathname} 
              onClick={() => setIsMenuOpen(false)} 
            />
            <MobileNavLink 
              to="/profile" 
              label="Profile" 
              currentPath={location.pathname} 
              onClick={() => setIsMenuOpen(false)} 
            />
            <div className="px-4 py-2 flex items-center">
              <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full flex items-center space-x-1">
                <Award className="h-4 w-4" />
                <span className="font-medium">{points} Points</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Nav Link
const NavLink = ({ to, label, currentPath }: { to: string; label: string; currentPath: string }) => {
  const isActive = to === '/' ? currentPath === to : currentPath.startsWith(to);
  
  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
        isActive
          ? 'text-indigo-700 bg-indigo-50'
          : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
      }`}
    >
      {label}
    </Link>
  );
};

// Mobile Nav Link
const MobileNavLink = ({ 
  to, 
  label, 
  currentPath, 
  onClick 
}: { 
  to: string; 
  label: string; 
  currentPath: string;
  onClick: () => void;
}) => {
  const isActive = to === '/' ? currentPath === to : currentPath.startsWith(to);
  
  return (
    <Link
      to={to}
      className={`block px-3 py-2 rounded-md text-base font-medium ${
        isActive
          ? 'text-indigo-700 bg-indigo-50'
          : 'text-gray-700 hover:text-indigo-600 hover:bg-indigo-50'
      }`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
};

export default Header;