import React from "react";
import { Download, ChevronDown, Wifi, Battery, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 px-4 md:px-8 lg:px-16 min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-ms-accent">MS Bridge</span>
              <br />
              <span className="text-ms-text-light">
                Connect. Simplify. Achieve.
              </span>
            </h1>

            <p className="text-ms-text-light/80 text-lg mb-8">
              MS Bridge is your intelligent note reading and note taking
              companion, designed for Android and iOS. Experience seamless
              offline access, AI-generated summaries, personalized color themes,
              and direct integration with rafay99.com — all in one streamlined
              mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://rafay99.com/MSBridge-APK"
                download
                className="ms-button flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download App
              </a>
              <a
                href="#features"
                className="ms-button bg-transparent border border-ms-accent hover:bg-ms-accent/10 flex items-center justify-center gap-2"
              >
                Learn More
                <ChevronDown size={20} />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-[320px]">
              {/* iPhone Frame */}
              <div className="relative aspect-[9/18] rounded-[40px] overflow-hidden border-[2px] border-neutral-400 bg-black shadow-[0_10px_40px_rgba(0,0,0,0.3)]">
                {/* Camera Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-black rounded-b-2xl z-20"></div>

                {/* App Screenshot */}
                <img
                  src="/lovable-uploads/427b740e-2b98-4a3c-b1b9-c3dafad7dff8.png"
                  alt="MS Bridge Welcome Screen"
                  className="object-cover w-full h-full"
                />

                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-[5px] bg-white/80 rounded-full"></div>
              </div>

              {/* Shadow below the phone */}
              <div className="absolute -bottom-5 left-0 right-0 h-4 bg-black/10 blur-lg rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
          <p className="text-sm text-ms-text-light/60 mb-2">
            Scroll to explore
          </p>
          <ChevronDown size={20} className="text-ms-accent" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
