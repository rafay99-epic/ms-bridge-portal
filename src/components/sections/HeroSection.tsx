
import React from 'react';
import { Download, ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 px-4 md:px-8 lg:px-16 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-ms-accent">MS Bridge</span> 
              <br />
              <span className="text-ms-text-light">Connect. Simplify. Achieve.</span>
            </h1>
            
            <p className="text-ms-text-light/80 text-lg mb-8">
              Streamline your workflow, enhance productivity, and bridge the gap between your devices with our powerful mobile application.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="ms-button flex items-center justify-center gap-2">
                <Download size={20} />
                Download App
              </button>
              <a href="#features" className="ms-button bg-transparent border border-ms-accent hover:bg-ms-accent/10 flex items-center justify-center gap-2">
                Learn More
                <ChevronDown size={20} />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="w-full max-w-[300px] aspect-[9/16] bg-ms-accent-dark border-4 border-ms-accent/30 rounded-[32px] shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-ms-accent/20 to-transparent flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mb-4 mx-auto rounded-full bg-ms-accent flex items-center justify-center">
                    <span className="text-2xl font-bold">MS</span>
                  </div>
                  <p className="font-semibold">MS Bridge App</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <p className="text-sm text-ms-text-light/60 mb-2">Scroll to explore</p>
          <ChevronDown size={20} className="text-ms-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
