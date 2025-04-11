
import React from 'react';
import { Download, ChevronDown, Wifi, Battery, Clock } from 'lucide-react';

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
            {/* Mobile Phone Frame with Welcome Screen */}
            <div className="relative w-full max-w-[300px]">
              {/* Phone Frame */}
              <div className="relative aspect-[9/16] rounded-[32px] overflow-hidden border-[8px] border-black bg-black shadow-2xl">
                {/* Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black z-10 flex items-center justify-between px-5">
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 text-white mr-1" />
                    <span className="text-white text-xs">10:11</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Wifi className="h-3 w-3 text-white" />
                    <Battery className="h-4 w-4 text-white" />
                  </div>
                </div>
                
                {/* Welcome Screen Image */}
                <img 
                  src="/lovable-uploads/24884562-fbae-481e-95ac-8ef4221eaf12.png" 
                  alt="MS Bridge Welcome Screen" 
                  className="object-cover w-full h-full"
                />
                
                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full opacity-80"></div>
              </div>
              
              {/* Phone Shadow */}
              <div className="absolute -bottom-4 left-0 right-0 h-4 bg-black/20 blur-xl rounded-full"></div>
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
