'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ChevronLeft, ChevronRight, Brain, User, Heart, Sparkles, Search, Layers, Clock, Network, Archive, MessageSquare, Palette, Waves, Zap, Users, ChevronDown } from 'lucide-react';

// Custom hook for intersection observer
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, {
      threshold: 0.1,
      rootMargin: '-50px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isIntersecting];
}

// Pulsing Arrow Component
function PulsingArrow() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('executive-summary');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute bottom-20 sm:bottom-24 left-1/2 transform -translate-x-1/2">
      <button
        onClick={scrollToNext}
        className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
      >
        <span className="text-xs font-medium tracking-wide uppercase">Scroll</span>
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
        </div>
      </button>
    </div>
  );
}

// Section component for full page layout
function Section({ 
  id, 
  title, 
  subtitle, 
  children, 
  className = "", 
  background = "bg-white" 
}: { 
  id?: string, 
  title?: string, 
  subtitle?: string, 
  children: React.ReactNode, 
  className?: string, 
  background?: string 
}) {
  const [ref, isVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];

  return (
    <section 
      ref={ref}
      id={id} 
      className={`py-12 sm:py-16 md:py-24 ${background} ${className} transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {title && (
          <div className="mb-8 sm:mb-12 md:mb-16 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-3 sm:mb-4 md:mb-6">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm sm:text-base md:text-lg text-gray-600 font-light leading-relaxed max-w-3xl mx-auto px-4 sm:px-0">
                {subtitle}
              </p>
            )}
            <div className="h-px w-20 sm:w-24 bg-gray-300 mx-auto mt-4 sm:mt-6 md:mt-8"></div>
          </div>
        )}
        <div className="prose prose-sm sm:prose-lg prose-slate max-w-none px-4 sm:px-0">
          {children}
        </div>
      </div>
    </section>
  );
}

// Slide component for slideshow view
function Slide({ children, className = "", background = "bg-white" }: { children: React.ReactNode, className?: string, background?: string }) {
  return (
    <div className={`min-h-screen flex flex-col justify-center items-center px-6 py-20 ${background} ${className}`}>
      <div className="max-w-4xl mx-auto text-center">
        {children}
      </div>
    </div>
  );
}

// Slide Navigation component
function SlideNavigation({ currentSlide, totalSlides, onPrevious, onNext }: { 
  currentSlide: number, 
  totalSlides: number, 
  onPrevious: () => void, 
  onNext: () => void 
}) {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center space-x-3 sm:space-x-4 bg-white/90 backdrop-blur-sm px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-gray-200 shadow-lg">
        <button
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="p-1.5 sm:p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        </button>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm font-medium text-gray-700">
            {currentSlide + 1} / {totalSlides}
          </span>
        </div>
        
        <button
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="p-1.5 sm:p-2 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 rounded-full transition-colors"
        >
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}

// Principles component
function Principles() {
  const principles = [
    {
      icon: Search,
      title: "Exploration over output",
      description: "We value discovery and experimentation."
    },
    {
      icon: Heart,
      title: "Emotionally aware design", 
      description: "We design for feeling, not just functionality."
    },
    {
      icon: Users,
      title: "Technology as a companion",
      description: "AI and emerging tech should enhance human agency, not replace it."
    },
    {
      icon: Layers,
      title: "Interdisciplinary thinking",
      description: "We draw from psychology, design, art, and engineering to inform our work."
    },
    {
      icon: Clock,
      title: "Living in the present",
      description: "Our projects encourage people to pay attention to the now instead of getting lost in constant distraction."
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {principles.map(({ icon: Icon, title, description }, index) => (
        <div key={index} className="text-center space-y-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mx-auto shadow-sm">
            <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
          </div>
          <div>
            <h4 className="text-base md:text-lg font-medium text-gray-900 mb-2">
              {title}
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Exploration Areas component
function ExplorationAreas() {
  const areas = [
    {
      icon: Brain,
      title: "Memory and Meaning",
      description: "How do we capture, resurface, and reinterpret the small fragments that shape our lives?"
    },
    {
      icon: User,
      title: "Digital Selfhood and Identity", 
      description: "How can we express ourselves in ways that feel fluid, personal, and authentic instead of being flattened by algorithms and trends?"
    },
    {
      icon: Heart,
      title: "Connection and Intimacy",
      description: "How can technology help us share, signal, and bond in ways that feel natural and meaningful - both online and in the real world?"
    },
    {
      icon: Sparkles,
      title: "Intelligence and Emergence",
      description: "How can AI and LLMs create experiences that listen, adapt, and support creativity instead of overwhelming us?"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
      {areas.map(({ icon: Icon, title, description }, index) => (
        <div key={index} className="space-y-4 md:space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
              <Icon className="w-5 h-5 text-gray-700" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-3">
                {index + 1}. {title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// AI Capabilities component
function AICapabilities() {
  const capabilities = [
    {
      icon: Network,
      title: "Pattern Recognition",
      description: "Hidden connections in thoughts and ideas"
    },
    {
      icon: Archive,
      title: "Memory Surfacing",
      description: "Rediscover forgotten fragments"
    },
    {
      icon: MessageSquare,
      title: "Natural Interfaces",
      description: "Conversational interaction"
    },
    {
      icon: Palette,
      title: "Creative Support",
      description: "Enhance, don't replace creativity"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl text-gray-600 mb-4">AI as collaborator, not replacement</p>
        <p className="text-base md:text-lg font-medium text-gray-700">
          Humanizing AI - softer, contextual, emotionally intelligent
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {capabilities.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="flex items-center space-x-4 p-6 bg-gray-50 rounded-xl">
            <Icon className="w-8 h-8 text-gray-700 flex-shrink-0" strokeWidth={1.5} />
            <div className="text-left">
              <h4 className="font-medium text-gray-900">{title}</h4>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Future Vision component
function FutureVision() {
  const visionItems = [
    {
      icon: Waves,
      title: "Ambient",
      description: "Quietly alongside us"
    },
    {
      icon: Palette,
      title: "Expressive",
      description: "Create and connect deeply"
    },
    {
      icon: Zap,
      title: "Adaptive",
      description: "Respond to context"
    },
    {
      icon: Users,
      title: "Human-first",
      description: "Honor complexity"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-lg md:text-xl text-gray-600 mb-8">The future of technology will feel:</p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6 md:gap-8">
        {visionItems.map(({ icon: Icon, title, description }, index) => (
          <div key={index} className="text-center space-y-4">
            <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-700 mx-auto" strokeWidth={1.5} />
            <h4 className="text-base md:text-lg font-semibold text-gray-900">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-8">
        <p className="text-lg md:text-xl font-medium text-gray-800">
          Technology that enhances life instead of distracting from it
        </p>
      </div>
    </div>
  );
}

export default function PlanPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [viewMode, setViewMode] = useState<'full' | 'slides'>('full');
  
  // Intersection observer hooks for each section
  const [heroRef, heroVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];

  const slides = [
    // Title Slide
    {
      component: (
        <Slide background="bg-gradient-to-b from-gray-50 to-white">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-nineties text-gray-900 mb-4">
              HXI Labs
            </h1>
            <div className="h-px w-32 bg-gray-300 mx-auto"></div>
            <p className="text-xl md:text-2xl font-light text-gray-600">
              Designing the Future of Human Experience
            </p>
          </div>
        </Slide>
      )
    },
    
    // Executive Summary
    {
      component: (
        <Slide background="bg-gray-50">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">Executive Summary</h2>
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                A human experience research lab exploring how technology, design, and AI can deepen the way we live, connect, and create.
              </p>
              <p className="text-base md:text-lg text-gray-600">
                We're not a traditional product company. We're a space for exploration.
              </p>
              <p className="text-lg font-medium text-gray-800 italic text-center mt-8">
                The next chapter of technology will be defined by expression, intentionality, and emotional depth.
              </p>
            </div>
          </div>
        </Slide>
      )
    },
    
    // Mission
    {
      component: (
        <Slide>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">Our Mission</h2>
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl font-light text-gray-800 leading-relaxed italic mb-6">
                "To explore, invent, and design technologies that honor human complexity and make digital interaction more meaningful, intimate, and alive."
              </p>
            </div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Digital spaces should feel like living spaces - flexible, personal, and full of texture.
            </p>
          </div>
        </Slide>
      )
    },
    
    // Why We Exist
    {
      component: (
        <Slide background="bg-gray-50">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">Why We Exist</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Most technology is built to capture attention, not deepen experience.
              </p>
              <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
                <div className="space-y-4">
                  <p className="text-gray-600 italic">We scroll endlessly but rarely feel nourished.</p>
                  <p className="text-gray-600 italic">We capture everything but struggle to remember meaningfully.</p>
                  <p className="text-gray-600 italic">We communicate constantly but often miss genuine connection.</p>
                </div>
              </div>
              <p className="text-lg font-medium text-gray-800">
                It's time to design a different relationship with technology.
              </p>
            </div>
          </div>
        </Slide>
      )
    },
    
    // Our Approach
    {
      component: (
        <Slide>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">Our Approach</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Research-first lab. Every project starts with a question, not a roadmap.</p>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <Search className="w-8 h-8 md:w-10 md:h-10 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h4 className="text-base md:text-lg font-medium">Exploration over output</h4>
              </div>
              <div className="text-center space-y-4">
                <Heart className="w-8 h-8 md:w-10 md:h-10 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h4 className="text-base md:text-lg font-medium">Emotionally aware design</h4>
              </div>
              <div className="text-center space-y-4">
                <Clock className="w-8 h-8 md:w-10 md:h-10 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h4 className="text-base md:text-lg font-medium">Living in the present</h4>
              </div>
            </div>
          </div>
        </Slide>
      )
    },
    
    // Areas of Exploration
    {
      component: (
        <Slide background="bg-gray-50">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">Areas of Exploration</h2>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4 p-4 md:p-6">
                <Brain className="w-10 h-10 md:w-12 md:h-12 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-medium">Memory and Meaning</h3>
                <p className="text-gray-600">Capture and resurface life's fragments</p>
              </div>
              <div className="text-center space-y-4 p-4 md:p-6">
                <User className="w-10 h-10 md:w-12 md:h-12 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-medium">Digital Identity</h3>
                <p className="text-gray-600">Fluid, authentic self-expression</p>
              </div>
              <div className="text-center space-y-4 p-4 md:p-6">
                <Heart className="w-10 h-10 md:w-12 md:h-12 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-medium">Connection & Intimacy</h3>
                <p className="text-gray-600">Natural, meaningful bonding</p>
              </div>
              <div className="text-center space-y-4 p-4 md:p-6">
                <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-gray-700 mx-auto" strokeWidth={1.5} />
                <h3 className="text-lg md:text-xl font-medium">Intelligence & Emergence</h3>
                <p className="text-gray-600">AI that supports creativity</p>
              </div>
            </div>
          </div>
        </Slide>
      )
    },
    
    // AI Role
    {
      component: (
        <Slide>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">The Role of AI</h2>
            <AICapabilities />
          </div>
        </Slide>
      )
    },
    
    // Investment
    {
      component: (
        <Slide background="bg-gray-50">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">Why Invest in HXI Labs</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Building a research engine that understands human experience
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto text-left">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-700">Bold vision for human-computer interaction</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-700">Portfolio exploring identity, creativity, memory</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-700">Intersection of design, psychology, technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                  <span className="text-gray-700">Curiosity-driven, human-first approach</span>
                </div>
              </div>
            </div>
          </div>
        </Slide>
      )
    },
    
    // Vision
    {
      component: (
        <Slide>
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-nineties text-gray-900 mb-8">The Vision</h2>
            <FutureVision />
          </div>
        </Slide>
      )
    },
    
    // Thank You
    {
      component: (
        <Slide background="bg-gradient-to-b from-gray-50 to-white">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-nineties text-gray-900 mb-4">
              Thank You
            </h1>
            <div className="h-px w-32 bg-gray-300 mx-auto"></div>
            <p className="text-xl md:text-2xl font-light text-gray-600">
              Questions & Discussion
            </p>
            <div className="pt-8">
              <p className="text-base md:text-lg text-gray-500">
                Visit us at{' '}
                <a 
                  href="https://hxilabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                >
                  hxilabs.com
                </a>
              </p>
            </div>
          </div>
        </Slide>
      )
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation for slides
  useEffect(() => {
    if (viewMode !== 'slides') return;
    
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        if (currentSlide < slides.length - 1) {
          setCurrentSlide(prev => prev + 1);
        }
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        if (currentSlide > 0) {
          setCurrentSlide(prev => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, slides.length, viewMode]);

  if (viewMode === 'slides') {
    return (
      <div className="relative min-h-screen bg-white">
        {/* Header with back button */}
        <div className="fixed top-3 left-3 sm:top-4 sm:left-4 z-50">
          <button 
            onClick={() => setViewMode('full')}
            className="bg-white/90 backdrop-blur-sm border border-gray-200 px-3 py-2 sm:px-4 rounded-lg flex items-center space-x-2 hover:bg-white transition-colors text-gray-900"
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={1.5} />
            <span className="text-xs sm:text-sm font-medium">Plan</span>
          </button>
        </div>

        {/* Current Slide */}
        {slides[currentSlide].component}

        {/* Navigation */}
        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        {/* Keyboard hint */}
        <div className="fixed bottom-16 sm:bottom-4 right-3 sm:right-4 text-xs text-gray-500 bg-white/90 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-2 rounded-lg border border-gray-200">
          <span className="hidden sm:inline">Use arrow keys or spacebar to navigate</span>
          <span className="sm:hidden">Swipe or tap to navigate</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-xl font-medium text-gray-900 hover:text-gray-600 transition-colors">
              <img src="/logo3.svg" alt="HXI Labs" width={32} className="sm:w-10" />
            </Link>
            
            <div className="flex items-center space-x-4 sm:space-x-6">
              <button
                onClick={() => setViewMode('slides')}
                className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Slides
              </button>
              <a href="mailto:hello@hxilabs.com" className="text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 hidden sm:block">
                hello@hxilabs.com
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16 sm:pt-20">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="h-screen flex flex-col justify-start items-center relative bg-gradient-to-b from-gray-50 to-white px-4 sm:px-6 pt-20 sm:pt-32"
        >
          <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nineties text-gray-900">
                HXI Labs
              </h1>
              <div className="h-px w-24 sm:w-32 bg-gray-300 mx-auto"></div>
              <p className="text-lg sm:text-xl md:text-2xl font-light text-gray-600 leading-relaxed px-4 sm:px-0">
                Designing the Future of Human Experience
              </p>
            </div>
          </div>
          
          {/* Pulsing Arrow */}
          <PulsingArrow />
        </section>

        {/* Executive Summary */}
        <Section 
          id="executive-summary" 
          title="Executive Summary"
          background="bg-gray-50"
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl font-light">
              HXI Labs is a human experience research lab exploring how technology, design, and AI can deepen 
              the way we live, connect, and create. We're not a traditional product company. We're a space 
              for exploration - a place where ideas are tested, questioned, and brought to life through 
              thoughtful experiments.
            </p>
            
            <p className="text-base md:text-lg">
              Our work focuses on understanding human behavior and designing tools that feel personal, playful, 
              and meaningful. From Cheese to Heart Pins, Memento, Council, and Presently, our projects are 
              expressions of curiosity. Each one is designed to explore a different dimension of human experience: 
              memory, identity, creativity, connection, and presence.
            </p>
            
            <p className="text-lg font-medium text-gray-800 italic">
              We believe the next chapter of technology won't be defined by scale or speed. It will be defined 
              by expression, intentionality, and emotional depth. HXI Labs exists to help shape that chapter.
            </p>
          </div>
        </Section>

        {/* Mission */}
        <Section 
          id="mission" 
          title="Our Mission"
          subtitle="To explore, invent, and design technologies that honor human complexity and make digital interaction more meaningful, intimate, and alive."
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              Digital spaces should feel like living spaces - flexible, personal, and full of texture. 
              Today, most technology flattens human experience into endless feeds and performance metrics. 
              We want to create tools that let people slow down, express themselves, and connect more deeply.
            </p>
            
            <div className="bg-gray-50 p-6 md:p-8 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">At HXI Labs, we:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>Study how people experience time, memory, identity, and connection.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>Build experimental tools that help people express themselves authentically.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>Explore how AI and LLMs can enhance creativity and support meaning-making rather than replace it.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2"></div>
                  <span>Blend the digital and physical, creating experiences that feel intuitive, human, and alive.</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Why We Exist */}
        <Section 
          id="why-exist" 
          title="Why We Exist"
          background="bg-gray-50"
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              Most technology today is built to capture attention, not to deepen experience. It prioritizes 
              efficiency, metrics, and scale, but often leaves us feeling less connected, less creative, 
              and less present.
            </p>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <div className="space-y-4 text-center">
                <p className="italic text-gray-600">We scroll endlessly but rarely feel nourished.</p>
                <p className="italic text-gray-600">We capture everything but struggle to remember meaningfully.</p>
                <p className="italic text-gray-600">We communicate constantly but often miss genuine connection.</p>
              </div>
            </div>
            
            <p className="text-lg font-medium text-gray-800">
              HXI Labs believes it's time to design a different kind of relationship with technology - 
              one that encourages reflection, creativity, and presence.
            </p>
          </div>
        </Section>

        {/* Our Approach */}
        <Section 
          id="approach" 
          title="Our Approach"
          subtitle="We operate as a research-first lab. Every project starts with a question, not a roadmap. Instead of building for growth or engagement, we explore what makes people curious, inspired, and connected."
        >
          <div className="space-y-8">
            <h3 className="text-2xl font-medium text-gray-900 text-center mb-8">Our Principles</h3>
            <Principles />
          </div>
        </Section>

        {/* Areas of Exploration */}
        <Section 
          id="exploration" 
          title="Areas of Exploration"
          subtitle="HXI Labs organizes its work around four interconnected themes:"
          background="bg-gray-50"
        >
          <ExplorationAreas />
        </Section>

        {/* AI Role */}
        <Section 
          id="ai-role" 
          title="The Role of AI and LLMs"
        >
          <AICapabilities />
        </Section>

        {/* Investment */}
        <Section 
          id="investment" 
          title="Why Invest in HXI Labs"
          background="bg-gray-50"
        >
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-base md:text-lg">
              HXI Labs is building more than projects. We're building a research engine that helps us 
              understand human experience in new ways. Every project - from Presently to Council - 
              contributes insights that make the next experiment smarter and more meaningful.
            </p>
            
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">By investing in HXI Labs, you're supporting:</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span>A bold vision for the future of human-computer interaction.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span>A portfolio of experiments exploring identity, creativity, memory, and connection.</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span>A lab uniquely positioned at the intersection of design, psychology, and emerging technology.</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                    </div>
                    <span>A team driven by curiosity, creativity, and a deep respect for the complexity of human experience.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Vision */}
        <Section 
          id="vision" 
          title="The Vision"
        >
          <FutureVision />
        </Section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-light mb-4">HXI Labs</h2>
            <p className="text-gray-400 mb-6">Designing the Future of Human Experience</p>
            <div className="h-px w-24 bg-gray-600 mx-auto mb-6"></div>
            <p className="text-sm text-gray-500">
              Visit us at{' '}
              <a 
                href="https://hxilabs.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                hxilabs.com
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}