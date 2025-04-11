
import React from 'react';
import { 
  Brain, 
  RefreshCw, 
  Wifi, 
  Database, 
  Lock, 
  Search, 
  MonitorSmartphone,
  FileEdit,
  Palette,
  Zap,
  RotateCcw,
  ScrollText,
  Settings,
  Save,
  Smartphone
} from 'lucide-react';

interface AdvancedFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  emoji: string;
  delay?: number;
}

const AdvancedFeatureCard = ({ 
  icon, 
  title, 
  description, 
  emoji, 
  delay = 0 
}: AdvancedFeatureCardProps) => {
  return (
    <div 
      className="ms-card flex flex-col h-full animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full bg-ms-accent/20 flex items-center justify-center mr-4">
          <div className="text-ms-accent">
            {icon}
          </div>
        </div>
        <div className="flex items-center">
          <span className="text-2xl mr-2">{emoji}</span>
          <h3 className="text-lg font-semibold text-ms-text-light">{title}</h3>
        </div>
      </div>
      <p className="text-ms-text-light/70 text-sm">{description}</p>
    </div>
  );
};

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      emoji: "🧠",
      title: "AI-Powered Summarization",
      description: "Generate concise, context-aware summaries of your notes using advanced AI models."
    },
    {
      icon: <RefreshCw size={24} />,
      emoji: "🔄",
      title: "Real-Time Note Sync",
      description: "Always stay up-to-date with dynamic note fetching from your API endpoint."
    },
    {
      icon: <Wifi size={24} />,
      emoji: "📶",
      title: "Online & Offline Mode",
      description: "Seamlessly switch between online and offline access, ensuring uninterrupted note usage."
    },
    {
      icon: <Database size={24} />,
      emoji: "💾",
      title: "Local Storage with Hive",
      description: "Fast, lightweight NoSQL database to store and retrieve notes efficiently when offline."
    },
    {
      icon: <Lock size={24} />,
      emoji: "🔐",
      title: "Secure Authentication",
      description: "Firebase Authentication integration with built-in spam detection for secure and reliable access."
    },
    {
      icon: <Search size={24} />,
      emoji: "🔍",
      title: "Fast Search & Tag System",
      description: "Perform fast, case-insensitive searches across notes and organize them using tags."
    },
    {
      icon: <MonitorSmartphone size={24} />,
      emoji: "🧑‍💻",
      title: "CMS Admin Panel Support",
      description: "Integrated WebView for managing content directly from your CMS dashboard."
    },
    {
      icon: <FileEdit size={24} />,
      emoji: "📝",
      title: "Full Note-Taking Support",
      description: "Create, edit, delete, and auto-save notes locally and online with smooth UX."
    },
    {
      icon: <Palette size={24} />,
      emoji: "🎨",
      title: "Multiple Themes",
      description: "Choose from Light, Dark, Sunset, Midnight, Forest Green, and more for a personalized experience."
    },
    {
      icon: <Zap size={24} />,
      emoji: "⚡",
      title: "Optimized Offline Search",
      description: "Quick local searching powered by Hive for efficient offline queries."
    },
    {
      icon: <RotateCcw size={24} />,
      emoji: "🔄",
      title: "Reset to Default",
      description: "Revert settings and themes to default with a single tap."
    },
    {
      icon: <ScrollText size={24} />,
      emoji: "📄",
      title: "AI Summary Bottom Sheet",
      description: "Interactive bottom sheet with dynamic typing animation and copy/close actions."
    },
    {
      icon: <Settings size={24} />,
      emoji: "⚙️",
      title: "Customizable AI Model",
      description: "Select your preferred AI model for summarization from the settings menu."
    },
    {
      icon: <Save size={24} />,
      emoji: "💡",
      title: "Auto-Save Feature",
      description: "Automatically saves notes as you type to prevent data loss."
    },
    {
      icon: <Smartphone size={24} />,
      emoji: "📱",
      title: "Enhanced Settings & App Info",
      description: "New settings interface and dedicated app info page for a refined user experience."
    }
  ];

  return (
    <section id="advanced-features" className="ms-section bg-ms-accent-dark/70">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="text-ms-accent">Advanced </span>
          <span className="text-ms-text-light">Features</span>
        </h2>
        <p className="text-ms-text-light/70 max-w-2xl mx-auto">
          Discover the powerful capabilities that make MS Bridge stand out from other note-taking applications.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <AdvancedFeatureCard 
            key={index}
            icon={feature.icon}
            emoji={feature.emoji}
            title={feature.title}
            description={feature.description}
            delay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
