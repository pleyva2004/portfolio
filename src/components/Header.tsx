import React from 'react';
import { Github, Linkedin, Mail, MessageCircle, Youtube } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-dark-border/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left side - Profile info */}
          <div className="flex items-center space-x-3">
            <img 
              src="/profile-photo.jpg" 
              alt="Profile" 
              className="w-11 h-11 rounded-full border border-gray-600"
            />
            <div>
              <h1 className="text-lg font-semibold text-white leading-tight">Your Name</h1>
              <p className="text-sm text-gray-400 leading-tight">NYC • Dallas</p>
            </div>
          </div>

          {/* Center - Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#ventures" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Ventures
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Contact
            </a>
          </nav>

          {/* Right side - Social links */}
          <div className="flex items-center space-x-5">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:your@email.com" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Mail size={18} />
            </a>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <MessageCircle size={18} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;