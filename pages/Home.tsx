import React, { useRef, useEffect, useState } from 'react';
import { SERVICES, TESTIMONIALS } from '../constants';
import { Page } from '../types';
import { 
  ArrowRight, 
  ChevronRight, 
  TrendingUp, 
  Star, 
  ChevronLeft, 
  Layers, 
  Target, 
  Rocket, 
  BarChart2, 
  Shield, 
  Zap,
  Fingerprint,
  PieChart,
  Navigation,
  Gem,
  CheckCircle2,
  Calendar,
  Users,
  Plus,
  Minus
} from 'lucide-react';

interface HomeProps {
  setPage: (page: Page) => void;
}

const VedicIcon = ({ icon: Icon, color = "amber" }: { icon: any, color?: string }) => (
  <div className="relative w-20 h-20 flex items-center justify-center group">
    <div className="absolute inset-0 bg-white rounded-3xl rotate-6 group-hover:rotate-0 transition-transform duration-700 border border-[#8e6e53]/10 shadow-sm" />
    <svg className="absolute inset-0 w-full h-full opacity-10 text-[#2d1b10] group-hover:scale-110 transition-transform duration-700" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
      <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
    </svg>
    <div className={`relative z-10 text-[#b48c48] group-hover:scale-110 transition-transform duration-500`}>
      <Icon size={36} strokeWidth={1.2} />
    </div>
  </div>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#8e6e53]/10 py-6 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left group"
      >
        <h4 className={`text-xl font-serif font-bold transition-colors ${isOpen ? 'text-[#b48c48]' : 'text-[#2d1b10] group-hover:text-[#b48c48]'}`}>
          {question}
        </h4>
        <div className={`shrink-0 ml-4 w-8 h-8 rounded-full border border-[#8e6e53]/20 flex items-center justify-center transition-all ${isOpen ? 'bg-[#2d1b10] text-white rotate-180' : 'text-[#8e6e53] group-hover:border-[#2d1b10] group-hover:text-[#2d1b10]'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
        <div className="overflow-hidden">
          <p className="text-[#8e6e53] leading-relaxed font-light text-base max-w-3xl">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC<HomeProps> = ({ setPage }) => {
  const serviceScrollRef = useRef<HTMLDivElement>(null);
  const testimonialScrollRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const { scrollLeft, clientWidth } = ref.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      ref.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'name-correction': return Fingerprint;
      case 'business-numerology': return PieChart;
      case 'career-alignment': return Navigation;
      case 'crystal-protocols': return Gem;
      default: return Shield;
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col">
              <div className="stagger-1 inline-flex items-center space-x-2 bg-white/60 backdrop-blur-sm border border-[#b48c48]/30 px-5 py-2 rounded-full text-[#2d1b10] text-[10px] font-black uppercase tracking-[0.2em] mb-10 w-fit shadow-sm">
                <Star size={14} className="text-[#b48c48]" />
                <span>Zero Woo-Woo, 100% Strategy</span>
              </div>
              <h1 className="stagger-1 text-5xl md:text-7xl lg:text-[88px] font-serif font-black text-[#2d1b10] leading-[1.0] mb-8 tracking-tighter">
                Destini Numbers: <br />
                <span className="text-[#b48c48] italic font-normal">Strategic Mastery</span> <br />
                Meets Vedic Wisdom.
              </h1>
              <p className="stagger-2 text-xl text-[#8e6e53] mb-12 max-w-xl leading-relaxed font-light">
                Decode your Life Path, Correct your Name Vibration, and Align your Career. The only expert in <span className="font-bold text-[#2d1b10] italic">Lucknow</span> offering high-end Career Counselling + Vedic insights.
              </p>
              <div className="stagger-3 flex flex-col sm:flex-row gap-5">
                <button 
                  onClick={() => setPage('contact')}
                  className="bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest hover:brightness-110 transition-all flex items-center justify-center gap-4 group shadow-2xl shadow-[#2d1b10]/20"
                >
                  Book My Strategy Audit
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => setPage('services')}
                  className="px-12 py-6 rounded-full font-bold text-sm uppercase tracking-widest border border-[#8e6e53]/30 text-[#8e6e53] hover:border-[#2d1b10] hover:text-[#2d1b10] transition-all bg-white/50 backdrop-blur-sm"
                >
                  The Toolkit
                </button>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1500 delay-500">
               <div 
                 className="relative w-full aspect-square max-w-xl mx-auto"
                 style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
               >
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#b48c48]/10 to-transparent rounded-full blur-[100px]" />
                  <div className="absolute inset-0 border border-[#b48c48]/20 rounded-full transform rotate-12 opacity-40 scale-105" />
                  <div className="absolute inset-0 border border-[#8e6e53]/30 rounded-full transform -rotate-12 opacity-40 scale-95" />
                  
                  <div className="absolute inset-6 rounded-full overflow-hidden shadow-[0_32px_64px_-16px_rgba(45,27,16,0.2)] bg-white p-4 border border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                      alt="Strategic Vision" 
                      className="w-full h-full object-cover rounded-full grayscale-[0.2] hover:grayscale-0 transition-all duration-1000"
                    />
                  </div>

                  {/* Floating Metric Card */}
                  <div className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-xl p-8 rounded-[2rem] shadow-2xl border border-white max-w-[280px] animate-float">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-[#fdfaf6] rounded-2xl flex items-center justify-center text-[#b48c48] border border-[#b48c48]/10">
                        <TrendingUp size={24} />
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-black text-[#8e6e53] tracking-widest">Alignment Rate</p>
                        <p className="text-2xl font-serif font-black text-[#2d1b10] leading-none">98.4%</p>
                      </div>
                    </div>
                    <p className="text-[11px] text-[#8e6e53] leading-relaxed font-medium">Optimization of individual vibrational frequencies for corporate success.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-[#8e6e53]/10 bg-white/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <p className="text-center text-[10px] uppercase font-black tracking-[0.4em] text-[#8e6e53] mb-12">Recognized Strategic Authority</p>
           <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
             {['THE TIMES', 'HINDUSTAN TIMES', 'FINANCIAL EXPRESS', 'NEWS18', 'BUSINESS WORLD'].map((brand, i) => (
               <span key={i} className="text-xl md:text-2xl font-serif font-black text-[#2d1b10] tracking-tighter whitespace-nowrap">{brand}</span>
             ))}
           </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-block bg-[#f5f1e9] px-4 py-1.5 rounded-full text-[#b48c48] text-[10px] font-black uppercase tracking-widest mb-8 border border-[#b48c48]/10">
                The Methodology
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[#2d1b10] mb-8 leading-tight">
                Vedic Wisdom, <br />
                <span className="text-[#b48c48] italic font-normal">Corporate Logic.</span>
              </h2>
              <p className="text-xl text-[#8e6e53] mb-12 leading-relaxed font-light">
                We bridge the gap between ancient Jyotish and 21st-century boardroom strategy. Our methodology is built for the high-impact professional who values clarity over confusion.
              </p>
              
              <div className="space-y-8">
                {[
                  { title: "Archetype Analysis", desc: "Decoding your unique Professional DNA through Life Path mapping." },
                  { title: "Market Periodicity", desc: "Pinpointing high-growth windows for transitions or business launches." },
                  { title: "Vibrational Tuning", desc: "Correcting name and signature data points for maximum impact." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="w-10 h-10 shrink-0 border border-[#b48c48]/30 rounded-full flex items-center justify-center text-[#b48c48] font-black text-xs group-hover:bg-[#2d1b10] group-hover:text-white group-hover:border-transparent transition-all">
                      0{idx + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#2d1b10] mb-1">{item.title}</h4>
                      <p className="text-[#8e6e53] text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-[#f5f1e9] rounded-[4rem] overflow-hidden shadow-2xl group">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800" 
                  alt="Corporate Strategy Meeting" 
                  className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-[0.05]">
                <svg viewBox="0 0 100 100" className="w-full h-full text-[#b48c48] animate-[spin_60s_linear_infinite]">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative bg-[#f5f1e9]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif font-black text-[#2d1b10] mb-6 tracking-tight">The Strategic Toolkit</h2>
              <p className="text-xl text-[#8e6e53] font-light">Clinical, data-driven Vedic insights for high-impact professionals.</p>
            </div>
            
            <div className="flex items-center space-x-6 mt-8 md:mt-0">
              <div className="flex space-x-3">
                <button onClick={() => scroll(serviceScrollRef, 'left')} className="p-5 bg-white border border-[#8e6e53]/20 rounded-full hover:bg-[#2d1b10] hover:text-white transition-all shadow-sm">
                  <ChevronLeft size={24} />
                </button>
                <button onClick={() => scroll(serviceScrollRef, 'right')} className="p-5 bg-white border border-[#8e6e53]/20 rounded-full hover:bg-[#2d1b10] hover:text-white transition-all shadow-sm">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div 
            ref={serviceScrollRef}
            className="flex space-x-8 overflow-x-auto pb-12 snap-x snap-mandatory no-scrollbar"
          >
            {SERVICES.map((service, i) => (
              <div 
                key={service.id} 
                className="flex-none w-[90%] sm:w-[420px] snap-center group"
              >
                <div className="relative p-12 bg-white border border-[#8e6e53]/10 rounded-[3rem] h-[580px] flex flex-col justify-between overflow-hidden shadow-[0_20px_40px_-15px_rgba(45,27,16,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(45,27,16,0.15)] transition-all duration-700">
                  <div className="absolute top-[-20px] right-[-20px] text-[200px] font-serif font-black text-[#f5f1e9] pointer-events-none group-hover:text-[#b48c48]/10 transition-colors">
                    0{i + 1}
                  </div>
                  
                  <div className="relative z-10">
                    <div className="mb-12">
                      <VedicIcon icon={getServiceIcon(service.id)} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b48c48] block mb-4">{service.focus}</span>
                    <h3 className="text-4xl font-serif font-black text-[#2d1b10] mb-6 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#8e6e53] text-lg leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  <button 
                    onClick={() => setPage('services')}
                    className="flex items-center space-x-3 font-bold text-[#2d1b10] hover:text-[#b48c48] transition-all relative z-10 group/btn"
                  >
                    <span className="text-xs uppercase tracking-[0.3em]">Configure Strategy</span>
                    <div className="w-10 h-10 rounded-full border border-[#8e6e53]/20 flex items-center justify-center group-hover/btn:bg-[#2d1b10] group-hover/btn:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 bg-[#2d1b10] text-[#fdfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
             {[
               { icon: <Users size={24} />, val: '5,000+', label: 'Clients Aligned' },
               { icon: <Calendar size={24} />, val: '30+', label: 'Years Vedic Mastery' },
               { icon: <Star size={24} />, val: '26+', label: 'Corporate Experience' },
               { icon: <CheckCircle2 size={24} />, val: 'Lucknow', label: 'Strategic Base' },
             ].map((stat, i) => (
               <div key={i} className="flex flex-col items-center">
                 <div className="text-[#b48c48] mb-6">{stat.icon}</div>
                 <div className="text-4xl md:text-5xl font-serif font-bold mb-3">{stat.val}</div>
                 <div className="text-[10px] uppercase font-black tracking-[0.3em] text-[#8e6e53]">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block bg-[#f5f1e9] px-4 py-1.5 rounded-full text-[#2d1b10] text-[10px] font-black uppercase tracking-widest mb-6 border border-[#b48c48]/10">
              Strategic Inquiries
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-black text-[#2d1b10] mb-6">Common Objectives</h2>
            <p className="text-xl text-[#8e6e53] font-light">Answers for the data-driven professional.</p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="How is Vedic Numerology relevant to corporate careers?" 
              answer="Corporate success often depends on alignment. Just as companies analyze market trends, Vedic Numerology (Anka Shastra) analyzes personal timing and vibrational compatibility. We identify your high-performance windows to ensure effort translates into maximum ROI." 
            />
            <FAQItem 
              question="Is this based on belief or science?" 
              answer="We treat it as 'Vibrational Engineering'. Everything in the universe has a frequency. By aligning your name, signature, and launch timings with your birth frequencies, we remove external friction. It's optimization, not superstition." 
            />
            <FAQItem 
              question="What can I expect from a single session?" 
              answer="A high-intensity audit. We deliver a clinical report covering your Archetype Analysis, Market Periodicity (timing), and a Strategic Implementation roadmap including necessary corrections for your name or brand identity." 
            />
            <FAQItem 
              question="Do you work with startups and businesses?" 
              answer="Yes. We specialize in Business Numerology for MSMEs and startups, focusing on brand name scalability, partnership synergy audits, and strategic launch window selection." 
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-[#fdfaf6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-serif font-black text-[#2d1b10] mb-8">Voices of <span className="text-[#b48c48] italic font-normal text-[0.8em]">Alignment</span></h2>
            <p className="text-xl text-[#8e6e53] font-light max-w-2xl mx-auto">Professionals and businesses who swapped 'luck' for vibrational strategy.</p>
          </div>

          <div 
            ref={testimonialScrollRef}
            className="flex space-x-10 overflow-x-auto pb-20 snap-x snap-mandatory no-scrollbar"
          >
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="flex-none w-[85%] sm:w-[480px] snap-center bg-white p-12 md:p-16 rounded-[4rem] border border-[#8e6e53]/10 hover:border-[#b48c48]/30 transition-all group shadow-[0_20px_50px_rgba(45,27,16,0.03)]"
              >
                <div className="flex space-x-1 mb-10 text-[#b48c48]">
                  {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-2xl md:text-3xl font-serif italic text-[#2d1b10] mb-12 leading-relaxed tracking-tight group-hover:text-[#b48c48] transition-colors">"{testimonial.content}"</p>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#f5f1e9] rounded-full flex items-center justify-center font-serif text-2xl font-black text-[#8e6e53]/30">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2d1b10] text-lg">{testimonial.name}</h4>
                    <p className="text-[#8e6e53] text-[10px] uppercase font-black tracking-widest">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-6">
             <button onClick={() => scroll(testimonialScrollRef, 'left')} className="p-6 bg-white border border-[#8e6e53]/20 rounded-full hover:bg-[#2d1b10] hover:text-white transition-all shadow-xl">
                <ChevronLeft size={24} />
             </button>
             <button onClick={() => scroll(testimonialScrollRef, 'right')} className="p-6 bg-white border border-[#8e6e53]/20 rounded-full hover:bg-[#2d1b10] hover:text-white transition-all shadow-xl">
                <ChevronRight size={24} />
             </button>
          </div>
        </div>
      </section>

      {/* Final Premium CTA */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2d1b10] rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-2xl">
             <div className="relative z-10">
                <h2 className="text-5xl md:text-8xl font-serif font-black text-[#fdfaf6] mb-10 tracking-tighter leading-none">
                  Begin Your <br />
                  <span className="text-[#b48c48] italic font-normal text-[0.8em]">Strategic Journey.</span>
                </h2>
                <p className="text-xl text-[#8e6e53] max-w-2xl mx-auto mb-16 font-light leading-relaxed">
                   Stop navigating by chance. Join the ranks of professionals who use high-end Vedic analytics to align their trajectory.
                </p>
                <button 
                  onClick={() => setPage('contact')}
                  className="bg-gradient-to-r from-[#b48c48] to-[#d4af37] text-white px-14 py-7 rounded-full font-black text-sm uppercase tracking-[0.2em] hover:scale-105 transition-all mx-auto flex items-center gap-4 shadow-2xl"
                >
                  Request Consultation
                  <ArrowRight size={20} />
                </button>
             </div>
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.05] pointer-events-none">
               <svg viewBox="0 0 100 100" className="w-full h-full text-white animate-[spin_180s_linear_infinite]">
                 <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" />
                 <path d="M50 0 L50 100 M0 50 L100 50" stroke="currentColor" strokeWidth="0.5" />
               </svg>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;