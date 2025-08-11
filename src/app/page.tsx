'use client';

import { useState, useEffect, useRef } from 'react';

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

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Intersection observer hooks for each section
  const [heroRef, heroVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const [missionRef, missionVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const [buildRef, buildVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const [approachRef, approachVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const [projectsRef, projectsVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const [fellowsRef, fellowsVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];
  const [contactRef, contactVisible] = useIntersectionObserver() as [React.RefObject<HTMLElement>, boolean];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/10 backdrop-blur-xl shadow-sm' : 'bg-white/5 backdrop-blur-lg'
      }`}>
        <div className="flex justify-between items-center px-8 md:px-16 lg:px-20 py-4">
          <h1 className="text-xl font-bold text-gray-900">HXI Labs</h1>
          <a href="mailto:hello@hxilabs.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            hello@hxilabs.com
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-8">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className={`h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 transition-all duration-1000 ${
            heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-gray-900 mb-1 tracking-tight">
              Human Experience
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-normal text-gray-400 mb-6 sm:mb-8 md:mb-10 tracking-tight">
              Interaction
            </h2>
            
            {/* Dash separator */}
            <div className="w-12 h-px mx-auto mb-8 md:mb-10 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
            
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal text-gray-600 mb-8 sm:mb-10 md:mb-12">
              The Space Between
            </h3>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Technology shapes how we connect, remember, and feel. Yet too often, digital
                experiences pull us away from what matters most; authentic human moments.
              </p>
              <p className="text-base md:text-lg text-gray-900 font-medium leading-relaxed">
                We believe the future lies not in choosing between human and digital, but in
                thoughtfully bridging them.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section 
          ref={missionRef}
          className={`py-8 md:py-16 px-6 md:px-12 transition-all duration-1000 ${
            missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 sm:mb-8 md:mb-12">Our Mission</h2>
            <div className="max-w-3xl">
              <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
                At HXI Labs, we design technology that amplifies rather than replaces human experience. We create digital
                tools that help people connect more deeply, remember more meaningfully, and feel more present in their most
                important moments.
              </p>
              <p className="text-base md:text-lg text-gray-900 font-medium leading-relaxed">
                Every project starts with a simple question: How can technology make this human experience richer?
              </p>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section 
          ref={buildRef}
          className={`py-8 md:py-16 px-6 md:px-12 bg-gray-50 transition-all duration-1000 ${
            buildVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-8 sm:mb-12 md:mb-16">What We Build</h2>
            <div className="space-y-6 md:space-y-8">
              <div className="group border-l-4 border-gray-200 pl-6 py-4 hover:border-black transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-x-1 rounded-r-lg">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-black transition-colors">Human-Centered Applications</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Tools that make complex processes more personal and intuitive.</p>
              </div>
              <div className="group border-l-4 border-gray-200 pl-6 py-4 hover:border-black transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-x-1 rounded-r-lg">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-black transition-colors">Experience Platforms</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Digital spaces designed around how people actually think and feel.</p>
              </div>
              <div className="group border-l-4 border-gray-200 pl-6 py-4 hover:border-black transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-x-1 rounded-r-lg">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-black transition-colors">Thoughtful Interfaces</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">Technology that adapts to human behavior, not the other way around.</p>
              </div>
              <div className="group border-l-4 border-gray-200 pl-6 py-4 hover:border-black transition-all duration-300 hover:bg-white hover:shadow-sm hover:-translate-x-1 rounded-r-lg">
                <h3 className="text-lg md:text-xl font-medium text-gray-900 mb-2 group-hover:text-black transition-colors">Professional Assistance Applications</h3>
                <p className="text-gray-600 group-hover:text-gray-700 transition-colors">AI-powered tools that simplify complex workflows across different industries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section 
          ref={approachRef}
          className={`py-8 md:py-16 px-6 md:px-12 transition-all duration-1000 ${
            approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-6 sm:mb-8 md:mb-12">Our Approach</h2>
            <div className="max-w-3xl">
              <p className="text-base md:text-lg text-gray-900 font-medium mb-6">
                We don't build for metrics or engagement. We build for meaning.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Our process is human-first: understand the emotion, design the interaction, then choose the technology. We
                prioritize privacy, intentionality, and the feeling that technology disappears into the background of genuine
                human connection.
              </p>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section 
          ref={projectsRef}
          className={`py-8 md:py-16 px-6 md:px-12 bg-gray-50 transition-all duration-1000 ${
            projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-8 sm:mb-12 md:mb-16">Current Projects</h2>
            <div className="space-y-4 md:space-y-6">
              <a href="https://cheeseday.co" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-4 sm:px-6 border-b border-gray-100 hover:bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-300 rounded-lg cursor-pointer">
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-black transition-colors">Cheese</h3>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors text-sm sm:text-base">Capture, organize, and share your everyday adventures with beautiful photo collections that tell your story.</p>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 self-end sm:self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="https://council.legal" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-4 sm:px-6 hover:bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-300 rounded-lg cursor-pointer">
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-black transition-colors">Council</h3>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors text-sm sm:text-base">An intelligent case management and legal assistant platform powered by multiple AI agents working together like a legal team.</p>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 self-end sm:self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              <a href="https://heartpins.app" target="_blank" rel="noopener noreferrer" className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 px-4 sm:px-6 hover:bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-300 rounded-lg cursor-pointer">
                <div className="flex-1 mb-3 sm:mb-0">
                  <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-black transition-colors">HeartPins</h3>
                  <p className="text-gray-500 group-hover:text-gray-600 transition-colors text-sm sm:text-base">Track your love journey through kisses. Bring back the fun in being intentional and intimate with the ones you love.</p>
                </div>
                <svg className="hidden sm:block w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 self-end sm:self-center" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* Our Fellows */}
        <section 
          ref={fellowsRef}
          className={`py-12 md:py-20 px-6 md:px-12 transition-all duration-1000 ${
            fellowsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center mb-16 md:mb-20">
              <svg className="w-6 h-6 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900">Our Fellows</h2>
            </div>
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
                <a href="https://github.com/buabaj" target="_blank" rel="noopener noreferrer" className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-blue-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl font-medium text-blue-800">J</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mb-1">Jerry</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">R&D</p>
                </a>
                <a href="https://github.com/greatnessmensah" target="_blank" rel="noopener noreferrer" className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-purple-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl font-medium text-purple-800">E</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-purple-600 transition-colors mb-1">Ephraim</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">Software Engineering</p>
                </a>
                <a href="https://github.com/benacq" target="_blank" rel="noopener noreferrer" className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-green-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl font-medium text-green-800">B</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-green-600 transition-colors mb-1">Ben</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors leading-tight">Software Engineering</p>
                </a>
                <a href="https://github.com/champ3oy" target="_blank" rel="noopener noreferrer" className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl font-medium text-orange-800">C</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-orange-600 transition-colors mb-1">Cirlorm</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">Product Engineering</p>
                </a>
                <a href="https://github.com/abena07" target="_blank" rel="noopener noreferrer" className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-pink-200 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                    <span className="text-2xl md:text-3xl font-medium text-pink-800">P</span>
                  </div>
                  <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-pink-600 transition-colors mb-1">Phillipa</h3>
                  <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">Product Engineering</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section 
          ref={contactRef}
          className={`py-12 md:py-20 px-6 md:px-12 bg-gray-50 transition-all duration-1000 ${
            contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-gray-900 mb-8 sm:mb-12 md:mb-16">Ready to collaborate?</h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6 text-center">
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@hxilabs.com" className="text-lg md:text-xl text-gray-900 hover:text-black-600 transition-colors">
                    hello@hxilabs.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              Building thoughtful technology for human moments
            </p>
            <p className="text-gray-400 text-sm">© 2025 HXI Labs.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}