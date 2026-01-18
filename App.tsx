import React, { useState, useEffect, useRef } from 'react';
import { 
  Menu, X, Rocket, ChevronRight, CheckCircle2,
  PieChart, Navigation, Gem, Shield, Zap, Star, 
  ArrowRight, MessageSquare, Mail, MapPin, Send, 
  Instagram, Linkedin, Twitter, TrendingUp, 
  Loader2, Sparkles, Fingerprint, Briefcase, Award, Globe
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

// --- CONSTANTS & SEO DATA ---

const SERVICES = [
  {
    id: 'career-alignment',
    title: 'Career Architecture',
    subtitle: 'Professional Mapping',
    description: 'Stop guessing your path. We align your career trajectory with your Vedic planetary strengths.',
    longDescription: 'The only service in Lucknow combining Corporate Career Counselling with Jyotish & Anka Shastra. We identify your "High-ROI" sectors—whether you belong in Tech, Sales, Leadership, or Creative Arts—reducing the risk of burnout and professional stagnation.',
    focus: 'Strategic Career Growth',
    icon: Briefcase
  },
  {
    id: 'name-correction',
    title: 'Identity Optimization',
    subtitle: 'Name Correction',
    description: 'Vibrational engineering for your personal brand to remove invisible friction.',
    longDescription: 'Your name is your mantra. Using Vedic Anka Shastra, we audit the compound frequency of your name. We don\'t just change spellings; we align your "Sound Vibration" with your Birth Number to enhance leadership presence, social resonance, and luck.',
    focus: 'Strategic Brand Alignment',
    icon: Fingerprint
  },
  {
    id: 'business-numerology',
    title: 'Market Scaling',
    subtitle: 'Business Numerology',
    description: 'Data-driven launch timing and brand naming for MSMEs and Startups.',
    longDescription: 'Scaling a business requires timing. We provide a decision-making framework for Brand Name compatibility, Partnership Synergy (Founder Compatibility), and "Profitability Windows" for product launches. Essential for Startups and MSMEs in India.',
    focus: 'Capital & Growth Strategy',
    icon: PieChart
  },
  {
    id: 'astro-analysis',
    title: 'Astro-Strategic Analysis',
    subtitle: 'Kundli & Horoscope',
    description: 'A comprehensive SWOT analysis of your life using Vedic Astrology.',
    longDescription: 'We treat your Janam Kundli as a "Life Case Study." Moving beyond basic predictions, we analyze Mahadashas and planetary transits to map out timelines for financial growth, marriage stability, and health risks. It is a roadmap for the next 5-10 years.',
    focus: 'Life-Path SWOT Analysis',
    icon: Star
  },
  {
    id: 'signature-analysis',
    title: 'Signature Strategy',
    subtitle: 'Graphology Audit',
    description: 'Your signature is your subconscious commitment frequency.',
    longDescription: 'A signature reveals your hidden confidence levels and public persona. We analyze stroke pressure, slant, and underline patterns. A "Corrected Signature" acts as a daily affirmation, vibrating with authority, stability, and executive presence.',
    focus: 'Executive Presence',
    icon: Zap
  },
  {
    id: 'gemstone-consulting',
    title: 'Gemstone Curation',
    subtitle: 'Vibrational Amplifiers',
    description: 'Scientific recommendation of gemstones to amplify weak planetary sectors.',
    longDescription: 'Gemstones are not magic; they are amplifiers. Based on your chart, we recommend specific stones (Ratna) to balance your energy field. We strictly advise on weight, metal setting, and activation timing to ensure maximum vibrational resonance.',
    focus: 'Energy Amplification',
    icon: Gem
  }
];

type Page = 'home' | 'about' | 'services' | 'contact' | 'calculator';

// --- UTILITY COMPONENTS ---

const RevealOnScroll = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}>
      {children}
    </div>
  );
};

// --- COSMIC BACKGROUND COMPONENT ---

const CosmicBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fdfaf6]">
      {/* Dynamic Gradient Orbs */}
      <div 
        className="absolute w-[80vw] h-[80vw] rounded-full bg-[#b48c48]/5 blur-[100px] mix-blend-multiply transition-transform duration-[2s] ease-out"
        style={{ 
          left: '50%', top: '50%',
          transform: `translate(calc(-50% + ${mousePos.x * 50}px), calc(-50% + ${mousePos.y * 50}px))` 
        }}
      />
      <div 
        className="absolute w-[60vw] h-[60vw] rounded-full bg-[#2d1b10]/5 blur-[120px] mix-blend-multiply transition-transform duration-[3s] ease-out"
        style={{ 
          left: '20%', top: '20%',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)` 
        }}
      />
      
      {/* Sacred Geometry Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#2d1b10 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Animated Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vh] h-[140vh] border border-[#b48c48]/10 rounded-full animate-spin-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vh] h-[100vh] border border-[#2d1b10]/5 rounded-full animate-spin-reverse-slow" />
    </div>
  );
};

// --- NAV COMPONENT ---

const Navbar: React.FC<{ currentPage: Page; setPage: (p: Page) => void }> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#fdfaf6]/90 backdrop-blur-md shadow-sm border-b border-[#2d1b10]/5 py-2' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => { setPage('home'); setIsOpen(false); }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] flex items-center justify-center rounded-xl shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <span className="text-[#fdfaf6] font-serif font-black text-2xl">D</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-black tracking-tighter text-[#2d1b10] leading-none uppercase">Destini</span>
                <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-[#b48c48] font-bold">Numbers</span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => setPage(item.value)}
                  className={`text-xs font-bold tracking-[0.15em] uppercase transition-all relative py-1 ${
                    currentPage === item.value ? 'text-[#b48c48]' : 'text-[#2d1b10]/70 hover:text-[#2d1b10]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#b48c48] transform origin-left transition-transform duration-300 ${currentPage === item.value ? 'scale-x-100' : 'scale-x-0'}`} />
                </button>
              ))}
              <button 
                onClick={() => setPage('calculator')}
                className="bg-[#2d1b10] text-[#fdfaf6] px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#b48c48] transition-colors flex items-center gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                <Rocket size={14} />
                Strategic Audit
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="md:hidden text-[#2d1b10] p-2 hover:bg-[#2d1b10]/5 rounded-full transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-[#2d1b10]/95 backdrop-blur-xl z-40 transition-all duration-500 md:hidden flex flex-col justify-center px-8 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="space-y-6">
          {navItems.map((item, idx) => (
            <button
              key={item.value}
              onClick={() => { setPage(item.value); setIsOpen(false); }}
              className={`block text-4xl font-serif font-black text-[#fdfaf6] uppercase tracking-tight hover:text-[#b48c48] transition-colors transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button 
            onClick={() => { setPage('calculator'); setIsOpen(false); }}
            className={`w-full bg-[#b48c48] text-[#2d1b10] py-5 rounded-2xl text-sm font-black uppercase tracking-widest mt-8 flex items-center justify-center gap-3 transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <Rocket size={18} />
            Strategic Audit
          </button>
        </div>
      </div>
    </>
  );
};

// --- PAGES ---

const Home: React.FC<{ setPage: (p: Page) => void }> = ({ setPage }) => {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <RevealOnScroll className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-[#b48c48]/10 border border-[#b48c48]/20 px-4 py-1.5 rounded-full text-[#b48c48] text-[10px] font-black uppercase tracking-[0.25em] mb-8">
              <Star size={12} fill="currentColor" />
              <span>Zero Woo-Woo, 100% Strategy</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-black text-[#2d1b10] leading-[0.95] mb-8 tracking-tighter">
              Destini Numbers <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b48c48] to-[#d4af37] italic font-medium pr-4">
                Strategic Design.
              </span>
            </h1>
            <p className="text-xl text-[#8e6e53] mb-10 max-w-lg leading-relaxed font-light">
              Decode your Life Path with <span className="font-bold">Anka Shastra</span> & <span className="font-bold">Jyotish</span>. The only expert in <span className="font-semibold text-[#2d1b10]">Lucknow</span> blending corporate career strategy with Vedic wisdom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage('calculator')}
                className="bg-[#2d1b10] text-[#fdfaf6] px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#4a2d1b] transition-all flex items-center justify-center gap-3 shadow-2xl hover:scale-105 group"
              >
                Free Strategy Audit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setPage('services')}
                className="bg-white border border-[#2d1b10]/10 text-[#2d1b10] px-10 py-5 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#f5f1e9] transition-all"
              >
                Explore Toolkit
              </button>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#b48c48] to-[#2d1b10] rounded-full blur-[80px] opacity-20 animate-pulse" />
              <div className="relative z-10 w-full h-full rounded-[3rem] overflow-hidden border border-[#2d1b10]/5 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800" 
                  alt="Strategic Planning" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
                />
                <div className="absolute inset-0 bg-[#2d1b10]/10 mix-blend-multiply" />
              </div>
              
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/50 shadow-[0_20px_40px_rgba(0,0,0,0.1)] max-w-xs animate-float">
                 <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#b48c48]/10 flex items-center justify-center text-[#b48c48]">
                       <TrendingUp size={24} />
                    </div>
                    <div>
                       <p className="text-[10px] font-black uppercase tracking-widest text-[#8e6e53]">Success Rate</p>
                       <p className="text-3xl font-serif font-black text-[#2d1b10]">98.4%</p>
                    </div>
                 </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="border-y border-[#2d1b10]/5 py-12 bg-white/30 backdrop-blur-sm overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap justify-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {['TIMES OF INDIA', 'HINDUSTAN TIMES', 'FINANCIAL EXPRESS', 'CNBC AWAAZ', 'BUSINESS WORLD', 'LUCKNOW TIMES'].map((logo, i) => (
            <span key={i} className="text-xl md:text-2xl font-serif font-black text-[#2d1b10] tracking-tighter">{logo}</span>
          ))}
        </div>
      </div>

      {/* Services Preview */}
      <section className="py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-serif font-black text-[#2d1b10] mb-6">Strategic <span className="text-[#b48c48] italic">Toolkit</span></h2>
          <p className="text-[#8e6e53] text-lg max-w-2xl mx-auto font-light">
            We don't sell luck. We sell alignment. Choose the vector you wish to optimize.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {SERVICES.slice(0, 3).map((s, i) => (
             <RevealOnScroll key={s.id} className="group h-full">
               <div className="bg-white p-10 rounded-[2.5rem] border border-[#2d1b10]/5 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 h-full flex flex-col relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                   <s.icon size={120} className="text-[#2d1b10]" />
                 </div>
                 <s.icon size={40} className="text-[#b48c48] mb-8 relative z-10" />
                 <h3 className="text-2xl font-serif font-black text-[#2d1b10] mb-2 relative z-10">{s.title}</h3>
                 <p className="text-xs font-bold uppercase tracking-widest text-[#b48c48] mb-6 relative z-10">{s.subtitle}</p>
                 <p className="text-[#8e6e53] leading-relaxed mb-8 flex-grow relative z-10 font-light">{s.description}</p>
                 <button 
                   onClick={() => setPage('services')}
                   className="flex items-center text-xs font-bold uppercase tracking-widest text-[#2d1b10] group-hover:text-[#b48c48] transition-colors gap-2"
                 >
                   View Analysis <ChevronRight size={14} />
                 </button>
               </div>
             </RevealOnScroll>
           ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="pb-32 px-4">
        <RevealOnScroll>
          <div className="max-w-6xl mx-auto bg-[#2d1b10] rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
               <h2 className="text-4xl md:text-7xl font-serif font-black text-[#fdfaf6] mb-8">Ready to Align?</h2>
               <p className="text-[#8e6e53] text-lg mb-12 max-w-2xl mx-auto">
                 Stop navigating by chance. Use the "Destini Framework" to ensure your next move is your best move.
               </p>
               <button 
                 onClick={() => setPage('contact')}
                 className="bg-gradient-to-r from-[#b48c48] to-[#d4af37] text-white px-12 py-6 rounded-full font-bold text-xs uppercase tracking-[0.25em] hover:scale-105 transition-all shadow-xl"
               >
                 Schedule Consultation
               </button>
            </div>
            {/* BG Effect */}
            <div className="absolute inset-0 opacity-10">
               <svg className="w-full h-full animate-[spin_60s_linear_infinite]" viewBox="0 0 100 100">
                 <path d="M50 0 L50 100 M0 50 L100 50" stroke="white" strokeWidth="0.5" />
                 <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" fill="none" />
               </svg>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Intro Header */}
      <div className="text-center mb-20 reveal-on-scroll">
         <span className="inline-block px-4 py-2 rounded-full bg-[#b48c48]/10 text-[#b48c48] text-[10px] font-black uppercase tracking-widest mb-6">
            The Authority
         </span>
         <h1 className="text-5xl md:text-7xl font-serif font-black text-[#2d1b10] mb-6">
            Diipesh <span className="text-[#b48c48] italic">Barara</span>
         </h1>
         <p className="text-xl text-[#8e6e53] font-light max-w-3xl mx-auto">
            "Where Stars, Numbers & Gems Shape Destinies."
         </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
        <RevealOnScroll>
          <div className="relative">
             <div className="bg-[#f5f1e9] rounded-[4rem] overflow-hidden aspect-[4/5] shadow-xl border border-[#2d1b10]/5 group">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                  alt="Diipesh Barara Corporate Strategist" 
                  className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 scale-105" 
                />
             </div>
             {/* Float Card */}
             <div className="absolute -bottom-10 -right-10 bg-[#2d1b10] text-[#fdfaf6] p-10 rounded-[3rem] shadow-2xl max-w-xs hidden md:block border border-[#b48c48]/30">
               <p className="font-serif italic font-bold text-xl leading-tight">
                 "I read charts like balance sheets. It's about ROI on your destiny."
               </p>
             </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-serif font-black text-[#2d1b10]">
             Bridging Corporate Logic & <br/><span className="text-[#b48c48]">Vedic Intuition.</span>
          </h2>
          <div className="prose prose-lg text-[#8e6e53] font-light leading-relaxed">
            <p>
              Diipesh Barara is not your typical astrologer. With over <strong className="text-[#2d1b10]">26 years of professional experience</strong>—including 22 years in high-stakes Business Analysis, Sales, and Marketing—he understands the language of the boardroom as fluently as the language of the stars.
            </p>
            <p>
              Renowned in <strong>Lucknow</strong> and overseas, Diipesh creates a unique fusion of <strong className="text-[#2d1b10]">Corporate Strategy</strong> and <strong className="text-[#2d1b10]">Vedic Wisdom (Anka Shastra & Jyotish)</strong>.
            </p>
            <p>
              He focuses on <strong>Result-Oriented Guidance</strong>. Whether you are facing a career plateau, business slowdown, or relationship friction, his consultation provides a "Decision-Making Framework" rather than vague predictions.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-[#2d1b10]/10 mt-8">
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[#b48c48]/10 rounded-xl text-[#b48c48]"><Briefcase size={24} /></div>
               <div><h4 className="font-bold text-[#2d1b10] text-sm">26+ Years</h4><p className="text-[10px] text-[#8e6e53] uppercase tracking-wider">Corporate & Vedic Exp.</p></div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[#b48c48]/10 rounded-xl text-[#b48c48]"><MapPin size={24} /></div>
               <div><h4 className="font-bold text-[#2d1b10] text-sm">Lucknow HQ</h4><p className="text-[10px] text-[#8e6e53] uppercase tracking-wider">Global Client Base</p></div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[#b48c48]/10 rounded-xl text-[#b48c48]"><Award size={24} /></div>
               <div><h4 className="font-bold text-[#2d1b10] text-sm">300+ Cases</h4><p className="text-[10px] text-[#8e6e53] uppercase tracking-wider">Proven Results</p></div>
            </div>
            <div className="flex items-center gap-4">
               <div className="p-3 bg-[#b48c48]/10 rounded-xl text-[#b48c48]"><Globe size={24} /></div>
               <div><h4 className="font-bold text-[#2d1b10] text-sm">Online/Offline</h4><p className="text-[10px] text-[#8e6e53] uppercase tracking-wider">Consultations</p></div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-24">
        <span className="inline-block px-4 py-2 rounded-full bg-[#2d1b10] text-[#fdfaf6] text-[10px] font-black uppercase tracking-widest mb-6">
            Comprehensive Toolkit
         </span>
        <h1 className="text-5xl md:text-8xl font-serif font-black text-[#2d1b10] mb-8">Strategic <span className="text-[#b48c48] italic">Architecture</span></h1>
        <p className="text-xl text-[#8e6e53] max-w-2xl mx-auto font-light">
          A full suite of vibrational optimization tools designed for the modern professional. From Name Correction to Gemstone Curation.
        </p>
      </div>

      <div className="grid gap-12">
        {SERVICES.map((service, index) => (
          <RevealOnScroll key={service.id}>
            <div className={`flex flex-col lg:flex-row items-center gap-12 p-8 md:p-16 bg-white border border-[#2d1b10]/5 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
               <div className="w-full lg:w-1/2">
                  <div className="relative aspect-video rounded-[2rem] overflow-hidden">
                     <div className="absolute inset-0 bg-[#2d1b10]/20 group-hover:bg-transparent transition-colors z-10" />
                     <img 
                       src={`https://images.unsplash.com/photo-${index === 0 ? '1560250097-0b93528c311a' : index === 1 ? '1554224155-8d04cb21cd6c' : index === 2 ? '1460925895917-afdab827c52f' : index === 3 ? '1507679799987-c73779587ccf' : '1600607686527-6fb886090705'}?auto=format&fit=crop&q=80&w=800`} 
                       alt={service.title} 
                       className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                     />
                     {/* Overlay Icon */}
                     <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-[#2d1b10] z-20">
                        <service.icon size={20} />
                     </div>
                  </div>
               </div>
               <div className="w-full lg:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-serif font-black text-[#2d1b10] mb-4">{service.title}</h2>
                  <p className="text-xs font-bold uppercase tracking-widest text-[#b48c48] mb-8 flex items-center gap-2">
                    <span className="w-8 h-[1px] bg-[#b48c48]"></span> {service.focus}
                  </p>
                  <p className="text-[#8e6e53] text-lg leading-relaxed mb-8 font-light">{service.longDescription}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                     {["Clinical Audit", "Strategic Report", "Remedial Plan", "6-Month Roadmap"].map((item, i) => (
                       <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-[#b48c48]" />
                          <span className="text-sm font-bold text-[#2d1b10]">{item}</span>
                       </div>
                     ))}
                  </div>

                  <button className="text-xs font-bold uppercase tracking-widest text-[#2d1b10] border-b border-[#2d1b10] pb-1 hover:text-[#b48c48] hover:border-[#b48c48] transition-colors">
                    Book This Audit
                  </button>
               </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
};

const Calculator: React.FC = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  // Quick Calc State
  const [quickPath, setQuickPath] = useState<number | null>(null);

  const calculateLifePath = () => {
    if (!birthdate) return;
    const digits = birthdate.replace(/-/g, '').split('').map(Number);
    let sum = digits.reduce((a, b) => a + b, 0);
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
    }
    setQuickPath(sum);
  };

  const getStrategicInsight = async () => {
    if (!name || !birthdate) return;
    setLoading(true);
    setResult(null);

    // Simulated API call (Since no real API key in env)
    // In production, uncomment the GoogleGenAI part and use real key
    
    /* const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });
    // ... API Logic ...
    */
   
    // Fallback simulation for demo purposes
    setTimeout(() => {
       const lifePath = quickPath || 1;
       const insights = [
         "Leadership and Innovation. You are a natural pioneer. In 2026, focus on autonomous projects.",
         "Diplomacy and Partnership. Your strength lies in mediation. Look for co-founder opportunities.",
         "Creativity and Communication. Your voice is your asset. Digital media is your growth vector.",
         "Stability and Systems. You build foundations. Real estate or ops management is key.",
         "Freedom and Change. You thrive in chaos. Sales or travel-based roles suit you.",
         "Responsibility and Service. You are the glue. HR or community leadership is ideal.",
         "Analysis and Wisdom. You are a seeker. Research or niche consulting is your path.",
         "Power and Abundance. You are a CEO in making. Finance and administration call you.",
         "Humanitarianism. You see the big picture. NGO or global strategy is your domain."
       ];
       
       setResult(`
         <h3 class="text-xl font-bold text-[#2d1b10] mb-2">Executive Summary</h3>
         <p><strong>Professional DNA:</strong> ${insights[(lifePath % 9)]}</p>
         <h3 class="text-xl font-bold text-[#2d1b10] mt-4 mb-2">Immediate Strategic Action</h3>
         <p>Based on your vibrational data, your current naming frequency may be creating subtle friction in ${lifePath % 2 === 0 ? 'authority' : 'financial'} sectors. We recommend a full Name Correction audit to optimize your leadership signature.</p>
       `);
       setLoading(false);
    }, 2000);
  };

  useEffect(() => {
    if(birthdate) calculateLifePath();
  }, [birthdate]);

  return (
    <div className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <h1 className="text-5xl md:text-7xl font-serif font-black text-[#2d1b10] mb-4">Strategic <span className="text-[#b48c48]">Audit</span></h1>
         <p className="text-[#8e6e53]">Instant corporate-grade Vedic insight.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Quick Calc */}
        <div className="md:col-span-1 bg-[#2d1b10] text-[#fdfaf6] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden">
           <div className="relative z-10">
             <h3 className="text-xs font-black uppercase tracking-widest text-[#b48c48] mb-6">Quick Metric</h3>
             <div className="text-[10rem] font-serif font-black leading-none text-white/10 absolute -bottom-10 -right-4 select-none">
               {quickPath || '?'}
             </div>
             <div className="text-6xl font-serif font-bold mb-2">{quickPath || '-'}</div>
             <p className="text-sm text-[#b48c48] font-bold uppercase tracking-widest">Life Path Number</p>
             <p className="mt-4 text-xs text-white/60 font-light leading-relaxed">
               Derived from your date of birth. This is your "Factory Setting" — the core operating system of your professional life.
             </p>
           </div>
        </div>

        {/* Right: AI Calc */}
        <div className="md:col-span-2 bg-white border border-[#2d1b10]/10 rounded-[2rem] p-8 md:p-12 shadow-sm relative">
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8e6e53] mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#fdfaf6] border border-[#2d1b10]/10 rounded-xl px-4 py-3 text-[#2d1b10] font-bold focus:outline-none focus:border-[#b48c48] transition-colors"
                  placeholder="e.g. Diipesh Barara"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-[#8e6e53] mb-2">Date of Birth</label>
                <input 
                  type="date" 
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full bg-[#fdfaf6] border border-[#2d1b10]/10 rounded-xl px-4 py-3 text-[#2d1b10] font-bold focus:outline-none focus:border-[#b48c48] transition-colors uppercase"
                />
              </div>
           </div>

           <button 
             onClick={getStrategicInsight}
             disabled={loading || !name || !birthdate}
             className="w-full bg-gradient-to-r from-[#2d1b10] to-[#4a2d1b] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:shadow-lg transition-all disabled:opacity-50"
           >
             {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={16} className="text-[#b48c48]" />}
             {loading ? 'Analyzing Vibe...' : 'Generate AI Strategy'}
           </button>

           {result && (
             <div className="mt-8 pt-8 border-t border-[#2d1b10]/5 animate-[fadeIn_0.5s_ease-out]">
                <div className="flex items-center gap-2 mb-4 text-[#b48c48]">
                   <Gem size={16} />
                   <span className="text-[10px] font-black uppercase tracking-widest">Confidential Report</span>
                </div>
                <div className="prose prose-sm text-[#8e6e53]" dangerouslySetInnerHTML={{ __html: result }} />
             </div>
           )}
        </div>
      </div>
    </div>
  );
};

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
           <h1 className="text-5xl md:text-8xl font-serif font-black text-[#2d1b10] mb-8">Deploy <span className="text-[#b48c48] italic">Strategy.</span></h1>
           <p className="text-xl text-[#8e6e53] font-light mb-12">
             Consultations with Diipesh Barara are high-intensity, clinical sessions. Come prepared with KPIs.
           </p>

           <div className="space-y-8">
              <a href="https://wa.me/919140660334" target="_blank" rel="noreferrer" className="flex items-center gap-6 group p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-[#2d1b10]/5">
                 <div className="w-16 h-16 bg-[#25D366] text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                   <MessageSquare size={28} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#2d1b10]">WhatsApp Strategy</h3>
                   <p className="text-sm text-[#8e6e53]">Direct line for urgent audits.</p>
                 </div>
              </a>
              
              <div className="flex items-center gap-6 p-4">
                 <div className="w-16 h-16 bg-white text-[#2d1b10] border border-[#2d1b10]/10 rounded-2xl flex items-center justify-center shadow-sm">
                   <Mail size={28} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#2d1b10]">consult@destininumbers.com</h3>
                   <p className="text-sm text-[#8e6e53]">For MSME & Corporate contracts.</p>
                 </div>
              </div>

              <div className="flex items-center gap-6 p-4">
                 <div className="w-16 h-16 bg-white text-[#2d1b10] border border-[#2d1b10]/10 rounded-2xl flex items-center justify-center shadow-sm">
                   <MapPin size={28} />
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-[#2d1b10]">Hazratganj, Lucknow</h3>
                   <p className="text-sm text-[#8e6e53]">Global HQ (By Appointment).</p>
                 </div>
              </div>
           </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-[3rem] border border-[#2d1b10]/5 shadow-2xl">
          <h2 className="text-2xl font-serif font-black text-[#2d1b10] mb-8">Intake Form</h2>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-[#8e6e53]">Name</label>
                   <input type="text" className="w-full bg-[#fdfaf6] border border-[#2d1b10]/10 p-4 rounded-xl focus:outline-none focus:border-[#b48c48]" />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-black uppercase tracking-widest text-[#8e6e53]">Mobile</label>
                   <input type="text" className="w-full bg-[#fdfaf6] border border-[#2d1b10]/10 p-4 rounded-xl focus:outline-none focus:border-[#b48c48]" />
                </div>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#8e6e53]">Service Vector</label>
                <select className="w-full bg-[#fdfaf6] border border-[#2d1b10]/10 p-4 rounded-xl focus:outline-none focus:border-[#b48c48] text-[#2d1b10]">
                   {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                </select>
             </div>
             <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-[#8e6e53]">Objective</label>
                <textarea rows={4} className="w-full bg-[#fdfaf6] border border-[#2d1b10]/10 p-4 rounded-xl focus:outline-none focus:border-[#b48c48]" placeholder="Briefly describe your current career or business friction..."></textarea>
             </div>
             <button className="w-full bg-[#2d1b10] text-[#fdfaf6] py-5 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#b48c48] transition-colors flex justify-center gap-3">
               Submit Request <Send size={16} />
             </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- MAIN APP ---

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case 'home': return <Home setPage={setPage} />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'contact': return <Contact />;
      case 'calculator': return <Calculator />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-[#2d1b10] bg-[#fdfaf6] overflow-x-hidden selection:bg-[#2d1b10] selection:text-[#b48c48]">
      <CosmicBackground />
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-grow z-10">
        {renderPage()}
      </main>

      <footer className="bg-[#f5f1e9] border-t border-[#2d1b10]/5 pt-20 pb-8 mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="text-center md:text-left">
              <span className="font-serif font-black text-2xl text-[#2d1b10] block">DESTINI</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#b48c48]">Numbers</span>
              <p className="text-xs text-[#8e6e53] mt-4 max-w-xs font-light">
                 Premium Vedic Numerology & Strategy.<br/>Lucknow, India.
              </p>
           </div>
           <div className="flex gap-6">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="p-3 bg-white rounded-full text-[#2d1b10] hover:text-[#b48c48] hover:-translate-y-1 transition-all shadow-sm">
                   <Icon size={18} />
                </a>
              ))}
           </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-[#2d1b10]/30 font-bold uppercase tracking-widest">
           © {new Date().getFullYear()} Destini Numbers. Strategy {'>'} Luck.
        </div>
      </footer>

      {/* Floating WA Button */}
      <a 
        href="https://wa.me/919140660334" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageSquare size={28} fill="currentColor" />
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#2d1b10] text-white px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Chat Now</span>
      </a>
      
      {/* Global Styles for Animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;700;800&display=swap');
        
        body { font-family: 'Plus Jakarta Sans', sans-serif; }
        .font-serif { font-family: 'Playfair Display', serif; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee 30s linear infinite; }
      `}</style>
    </div>
  );
};

export default App;
