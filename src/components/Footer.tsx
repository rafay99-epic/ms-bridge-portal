
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-ms-accent-dark border-t border-ms-accent/20 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-ms-accent font-bold text-xl mb-2">MS Bridge</h3>
            <p className="text-ms-text-light/70 text-sm">
              Connect. Simplify. Achieve.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#home" className="text-ms-text-light/70 hover:text-ms-accent text-sm">
                Home
              </a>
              <a href="#features" className="text-ms-text-light/70 hover:text-ms-accent text-sm">
                Features
              </a>
              <a href="#privacy" className="text-ms-text-light/70 hover:text-ms-accent text-sm">
                Privacy
              </a>
              <a href="#terms" className="text-ms-text-light/70 hover:text-ms-accent text-sm">
                Terms
              </a>
              <a href="#contact" className="text-ms-text-light/70 hover:text-ms-accent text-sm">
                Contact
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-ms-accent/10 text-center text-ms-text-light/50 text-sm">
          &copy; {currentYear} MS Bridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
