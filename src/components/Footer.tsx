import React from 'react';
import { Heart } from 'lucide-react';
import { APP_NAME, EXTERNAL_LINKS } from '../utils/constants';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-1 text-gray-600 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span>for the Sikh community</span>
          </div>
          
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a 
              href={EXTERNAL_LINKS.BLOG}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Blog
            </a>
            <a 
              href={EXTERNAL_LINKS.GITHUB}
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              GitHub
            </a>
            <a 
              href={EXTERNAL_LINKS.CONTACT}
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;