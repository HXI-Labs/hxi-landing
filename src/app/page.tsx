'use client';

import { useState, useEffect, useRef } from 'react';
import Mission from './components/Mission';

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

const PAGE_PADDING = 'w-full md:max-w-3xl mx-auto px-8 md:px-0'

const projects = [
  {
    title: "Cheese",
    description: "Capture, organize, and share your everyday adventures with beautiful photo collections that tell your story.",
    href: "https://cheeseday.co",
  },
  {
    title: "Council",
    description: "An intelligent case management and legal assistant platform powered by multiple AI agents working together like a legal team.",
    href: "https://council.legal",
  },
  {
    title: "HeartPins",
    description: "Track your love journey through kisses. Bring back the fun in being intentional and intimate with the ones you love.",
    href: "https://heartpins.app",
  },
  {
    title: "MementoSpace",
    description: "Capture and preserve your most cherished memories, life lessons, and personal reflections. Memento helps you create a private archive of stories for your children, your younger self, and your future self.",
    href: "https://mementospace.com",
  },
  {
    title: "StudyNotes",
    description: "Upload your lecture slides and get detailed study notes, interactive quizzes, and an AI that explains it all instantly.",
    href: "https://sn.deadal.us",
  },
];

const fellows = [
  {
    name: "Jerry",
    role: "R&D",
    github: "https://github.com/buabaj",
    initial: "J",
    bgColor: "bg-blue-200",
    shadowColor: "#1e3a8a",
  },
  {
    name: "Evans",
    role: "R&D",
    github: "https://github.com/devkyle4",
    initial: "E",
    bgColor: "bg-yellow-200",
    shadowColor: "#f59e0b",
  },
  {
    name: "Ephraim",
    role: "Software Engineering",
    github: "https://github.com/greatnessmensah",
    initial: "E",
    bgColor: "bg-purple-200",
    shadowColor: "#7e57c2",
  },
  {
    name: "Ben",
    role: "Software Engineering",
    github: "https://github.com/benacq",
    initial: "B",
    bgColor: "bg-green-200",
    shadowColor: "#008000",
  },
  {
    name: "Cirlorm",
    role: "Product Engineering",
    github: "https://github.com/champ3oy",
    initial: "C",
    bgColor: "bg-orange-200",
    shadowColor: "#ffa500",
  },
  {
    name: "Phillipa",
    role: "Product Engineering",
    github: "https://github.com/abena07",
    initial: "P",
    bgColor: "bg-pink-200",
    shadowColor: "#ffc0cb",
  },
  {
    name: "Ephraim",
    role: "Software Engineering",
    github: "https://github.com/ephraimduncan",
    initial: "ED",
    bgColor: "bg-emerald-200",
    shadowColor: "#10b981",
  }
];

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
    <div className="min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className={`${PAGE_PADDING} pt-16 fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-50`}>
        <div className="flex justify-between items-start">
          <h1 className="text-xl font-bold text-gray-900">
            <img src="/logo3.svg" alt="HXI Labs" width={50}/>
          </h1>
          <a href="mailto:hello@hxilabs.com" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-semibold">
            hello@hxilabs.com
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className={`${PAGE_PADDING} pt-8`}>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className={`h-screen flex flex-col justify-center items-center text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-5xl mx-auto text-left">
            <div className="flex flex-col items-start mb-10">
              <h1 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-nineties text-gray-900 mb-1 tracking-tight">
                Human Experience
              </h1>
              <h2 className="text-6xl sm:text-6xl md:text-8xl lg:text-8xl font-nineties text-gray-400 mb-6 sm:mb-8 md:mb-10 tracking-tight">
                Interaction
              </h2>
            </div>

            <h3 className="font-nineties text-3xl sm:text-3xl md:text-3xl lg:text-3xl font-normal text-black mb-8 sm:mb-5 md:mb-5">
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
          className={`py-8 mb-10 transition-all duration-1000 ${missionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-nineties text-gray-900 mb-5">Our Mission</h2>
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
          className={`py-8 transition-all duration-1000 ${buildVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-nineties text-gray-900">What We Build</h2>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-10 mt-5">
              Our process is human-first: understand the emotion, design the interaction, then choose the technology. We
              prioritize privacy, intentionality, and the feeling that technology disappears into the background of genuine
              human connection.
            </p>
          </div>
          <Mission />
        </section>

        {/* Our Approach */}
        <section
          ref={approachRef}
          className={`py-8 mb-10 transition-all duration-1000 ${approachVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-nineties text-gray-900 mb-5">Our Approach</h2>
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
          className={`py-8 transition-all duration-1000 ${projectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-nineties text-gray-900 mb-8 sm:mb-12 md:mb-16">Current Projects</h2>
            <div className="space-y-4 md:space-y-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col sm:flex-row justify-between items-start sm:items-center py-6 hover:bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-300 rounded-lg cursor-pointer ${
                    index < projects.length - 1 ? "border-b border-gray-100" : ""
                  }`}
                >
                  <div className="flex-1 mb-3 sm:mb-0">
                    <h3 className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-black transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 group-hover:text-gray-600 transition-colors text-sm sm:text-base">
                      {project.description}
                    </p>
                  </div>
                  <svg
                    className="hidden sm:block w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all duration-300 self-end sm:self-center"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Our Fellows */}
        <section
          ref={fellowsRef}
          className={`py-12 transition-all duration-1000 ${fellowsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-5xl mx-auto">
            <div className="flex items-start justify-start mb-10">
              <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-4xl font-nineties text-gray-900">Our Fellows</h2>
            </div>
            <div className="flex flex-col justify-center">
            <h3 className="text- text-gray-500 mb-4 col-span-full text-left">R&D</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
                {fellows.filter(fellow => fellow.role === "R&D").map((fellow, index) => (
                  <a
                    key={index}
                    href={fellow.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`${fellow.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`} style={{ boxShadow: `inset 0 8px 0 0 ${fellow.shadowColor}` }}>
                      <span className="text-2xl md:text-3xl font-nineties text-gray-800">{fellow.initial}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-900 transition-colors mb-1">{fellow.name}</h3>
                    {/* <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">{fellow.role}</p> */}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center mt-10">

            <h3 className="text- text-gray-500 mb-4 col-span-full text-left">Software Engineering</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
                {fellows.filter(fellow => fellow.role === "Software Engineering").map((fellow, index) => (
                  <a
                    key={index}
                    href={fellow.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`${fellow.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`} style={{ boxShadow: `inset 0 8px 0 0 ${fellow.shadowColor}` }}>
                      <span className="text-2xl md:text-3xl font-nineties text-gray-800">{fellow.initial}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-900 transition-colors mb-1">{fellow.name}</h3>
                    {/* <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">{fellow.role}</p> */}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center mt-10">
            <h3 className="text- text-gray-500 mb-4 col-span-full text-left">Product Engineering</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
                {fellows.filter(fellow => fellow.role === "Product Engineering").map((fellow, index) => (
                  <a
                    key={index}
                    href={fellow.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`${fellow.bgColor} w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg group-hover:scale-110 transition-all duration-300`} style={{ boxShadow: `inset 0 8px 0 0 ${fellow.shadowColor}` }}>
                      <span className="text-2xl md:text-3xl font-nineties text-gray-800">{fellow.initial}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-medium text-gray-900 group-hover:text-gray-900 transition-colors mb-1">{fellow.name}</h3>
                    {/* <p className="text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors">{fellow.role}</p> */}
                  </a>
                ))}
              </div>
            </div>

            <div className='flex flex-col justify-center mt-10'>
              <h3 className='text-xl text-black mb-4 col-span-full text-left font-nineties'>Become a Fellow</h3>
              <div className='flex flex-col justify-center'>
                <p className='text-gray-900 hover:text-gray-900 transition-colors'>
                  We're always looking for talented individuals to join our team. If you're interested in working with us, please send us an email.
                </p>
                <a href='https://hxilabs.fillout.com/fellowship' className='w-fit mt-5 bg-black text-white px-4 py-2 rounded-lg text-base font-nineties'>
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          ref={contactRef}
          className={`py-12 md:py-20 px-6 md:px-12 transition-all duration-1000 ${contactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-nineties text-gray-900 mb-8 sm:mb-12 md:mb-16">Ready to collaborate?</h2>
            <div className="max-w-2xl mx-auto">
              <div className="space-y-6 text-center">
                <div className="flex items-center justify-center">
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
      <footer className={`py-8 ${PAGE_PADDING} ${isScrolled ? 'bg-white/10 backdrop-blur-xl ' : 'bg-white/5 backdrop-blur-lg'
        }`}>
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