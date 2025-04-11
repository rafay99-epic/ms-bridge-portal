
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const ScreenshotsSection = () => {
  // Array of screenshots with descriptions
  const screenshots = [
    {
      src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      alt: "Intro screen",
      title: "Welcome Screen",
      description: "Clean and intuitive introduction to MS Bridge"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      alt: "Login screen",
      title: "Secure Login",
      description: "Firebase Authentication with spam detection"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Note Reading UI",
      title: "Note Viewer",
      description: "Clean, distraction-free reading experience"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Note Taking section",
      title: "Note Editor",
      description: "Full-featured editor with auto-save capability"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Search UI",
      title: "Smart Search",
      description: "Fast, tag-based note search with offline capabilities"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Settings UI",
      title: "Customizable Settings",
      description: "Extensive options to personalize your experience"
    },
    {
      src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      alt: "Color Themes",
      title: "Theme Selection",
      description: "Multiple color themes for a personalized experience"
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
                  <div className="relative aspect-[9/16] w-full max-w-[280px] mx-auto overflow-hidden rounded-xl border-4 border-ms-accent/30 mb-6">
                    <img 
                      src={screenshot.src}
                      alt={screenshot.alt}
                      className="object-cover w-full h-full"
                    />
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
