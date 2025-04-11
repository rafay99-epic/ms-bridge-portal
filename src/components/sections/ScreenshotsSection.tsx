
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
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Note taking interface",
      title: "Intuitive Note Taking",
      description: "Clean and simple interface for effortless note creation and editing"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "AI summarization feature",
      title: "AI Summarization",
      description: "AI-powered note summarization for quick information retrieval"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "Theme customization",
      title: "Theme Customization",
      description: "Multiple theme options for personalized experience"
    },
    {
      src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      alt: "Settings interface",
      title: "Advanced Settings",
      description: "Comprehensive settings for full app customization"
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
