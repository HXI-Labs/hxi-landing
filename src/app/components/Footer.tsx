'use client';

import { useState, useEffect } from 'react';
import { PAGE_PADDING } from '@/lib/constants';

export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`py-8 ${PAGE_PADDING} ${isScrolled ? 'bg-white/10 backdrop-blur-xl ' : 'bg-white/5 backdrop-blur-lg'
      }`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm text-center md:text-left">
            Building thoughtful technology for human moments
          </p>
          <p className="text-gray-400 text-sm">© 2025 HXI Labs.</p>
        </div>
      </div>
    </footer>
  );
}
