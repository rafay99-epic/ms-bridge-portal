
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => {
  return (
    <a 
      href={href} 
      className="px-3 py-2 text-ms-text-light/80 hover:text-ms-accent transition-colors"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={cn(
      "ms-navbar transition-all duration-300",
      scrolled ? "shadow-md" : ""
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="text-ms-accent font-bold text-2xl">
              MS Bridge
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-baseline space-x-2">
              <NavLink href="#home" label="Home" />
              <NavLink href="#screenshots" label="Screenshots" />
              <NavLink href="#features" label="Features" />
              <NavLink href="#advanced-features" label="Advanced Features" />
              <NavLink href="#privacy" label="Privacy" />
              <NavLink href="#terms" label="Terms" />
              <NavLink href="#contact" label="Contact" />
            </div>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-ms-text-light hover:text-ms-accent"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-ms-accent-dark border-t border-ms-accent/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <NavLink href="#home" label="Home" onClick={closeMenu} />
            <NavLink href="#screenshots" label="Screenshots" onClick={closeMenu} />
            <NavLink href="#features" label="Features" onClick={closeMenu} />
            <NavLink href="#advanced-features" label="Advanced Features" onClick={closeMenu} />
            <NavLink href="#privacy" label="Privacy" onClick={closeMenu} />
            <NavLink href="#terms" label="Terms" onClick={closeMenu} />
            <NavLink href="#contact" label="Contact" onClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
