
import React from 'react';
import { Smartphone, Lock, Zap, Globe, RefreshCw, Sparkles } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div 
      className="ms-card flex flex-col items-center text-center animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-full bg-ms-accent/20 flex items-center justify-center mb-4">
        <div className="text-ms-accent">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3 text-ms-text-light">{title}</h3>
      <p className="text-ms-text-light/70">{description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <Smartphone size={24} />,
      title: "Cross-Device Sync",
      description: "Seamlessly sync your data across multiple devices with real-time updates and backups."
    },
    {
      icon: <Lock size={24} />,
      title: "Enhanced Security",
      description: "End-to-end encryption ensures your data remains private and secure at all times."
    },
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Optimized performance for quick loading times and responsive interactions."
    },
    {
      icon: <Globe size={24} />,
      title: "Global Access",
      description: "Access your content from anywhere in the world with our reliable cloud storage."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Auto Updates",
      description: "Always enjoy the latest features with automatic background updates."
    },
    {
      icon: <Sparkles size={24} />,
      title: "Intuitive Design",
      description: "User-friendly interface designed for simplicity and efficiency."
    }
  ];

  return (
    <section id="features" className="ms-section bg-ms-accent-dark/50">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-ms-accent">Key </span>
          <span className="text-ms-text-light">Features</span>
        </h2>
        <p className="text-ms-text-light/70 max-w-2xl mx-auto">
          Discover why MS Bridge is the perfect solution for your connectivity needs 
          with our powerful suite of features.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
