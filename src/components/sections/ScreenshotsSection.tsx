
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Smartphone, Wifi, Battery, Clock } from 'lucide-react';

const ScreenshotsSection = () => {
  // Array of screenshots with descriptions from uploaded images
  const screenshots = [
    {
      src: "/lovable-uploads/3f3725e8-b372-40c0-8375-a62736acc9d6.png",
      alt: "MS Notes Home Screen",
      title: "Notes Dashboard",
      description: "Clean and intuitive interface to access your notes"
    },
    {
      src: "/lovable-uploads/1c694c9a-b2b7-4706-b579-3792a3a10ef6.png",
      alt: "Search Screen",
      title: "Smart Search",
      description: "Fast, tag-based note search with offline capabilities"
    },
    {
      src: "/lovable-uploads/9cae7496-579c-4f53-9b4b-2da899423b54.png",
      alt: "Note Taking UI",
      title: "Note Management",
      description: "Create, view, and organize your notes efficiently"
    },
    {
      src: "/lovable-uploads/013daddd-9d0b-467e-9f8e-371ab48822c8.png",
      alt: "Note Reading Screen",
      title: "Note Viewer",
      description: "Clean, distraction-free reading experience"
    },
    {
      src: "/lovable-uploads/8d0f13ef-3251-48d3-879e-6749b1e6e637.png",
      alt: "Settings Screen",
      title: "Customizable Settings",
      description: "Extensive options to personalize your experience"
    },
    {
      src: "/lovable-uploads/24884562-fbae-481e-95ac-8ef4221eaf12.png",
      alt: "Welcome Screen",
      title: "Welcome Screen",
      description: "Sleek introduction to the MS Bridge app"
    },
    {
      src: "/lovable-uploads/427b740e-2b98-4a3c-b1b9-c3dafad7dff8.png",
      alt: "Learn at Your Own Pace Screen",
      title: "Learn at Your Own Pace",
      description: "Access notes anytime, anywhere for your learning needs"
    },
    {
      src: "/lovable-uploads/ece7b297-a733-4747-b622-7b3f47976a2f.png",
      alt: "Collaborate with Ease Screen",
      title: "Collaborate with Ease",
      description: "Share notes with colleagues and friends seamlessly"
    },
    {
      src: "/lovable-uploads/c28d62c5-5907-4e16-93a8-b63877e493e8.png",
      alt: "Create Account Screen",
      title: "Create Account",
      description: "Simple and secure account creation process"
    },
    {
      src: "/lovable-uploads/bd8d7334-8261-4562-aa96-dfe3b9abe702.png",
      alt: "Login Screen",
      title: "Secure Login",
      description: "Firebase Authentication with spam detection"
    },
    {
      src: "/lovable-uploads/3a6ce453-4dc8-4934-a55b-35c0318d8846.png",
      alt: "Forgot Password Screen",
      title: "Password Recovery",
      description: "Easy password reset process for account access"
    }
  ];

  return (
    <section id="screenshots" className="ms-section bg-ms-accent-dark pb-24">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-ms-accent">App </span>
          <span className="text-ms-text-light">Screenshots</span>
        </h2>
        <p className="text-ms-text-light/70 max-w-2xl mx-auto mb-8">
          Take a look at the sleek, intuitive interface of MS Bridge 
          designed for optimal user experience.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-0">
        <Carousel className="w-full">
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="md:basis-1/1">
                <div className="ms-card h-full flex flex-col">
                  {/* Mobile Phone Frame */}
                  <div className="relative mx-auto w-full max-w-[280px]">
                    {/* Phone Frame */}
                    <div className="relative aspect-[9/16] rounded-[32px] overflow-hidden border-[8px] border-black bg-black shadow-xl">
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
                      
                      {/* Screenshot Image */}
                      <img 
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="object-cover w-full h-full"
                      />
                      
                      {/* Home Indicator */}
                      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1/3 h-1 bg-white rounded-full opacity-80"></div>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <h3 className="text-xl font-semibold text-ms-accent mb-2">{screenshot.title}</h3>
                    <p className="text-ms-text-light/70">{screenshot.description}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 lg:-left-12 bg-ms-accent hover:bg-ms-accent/80 text-ms-text-light border-none" />
          <CarouselNext className="right-2 lg:-right-12 bg-ms-accent hover:bg-ms-accent/80 text-ms-text-light border-none" />
        </Carousel>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
