
import React from 'react';
import { Target, BarChart3, Globe, Award, Briefcase, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
          <div className="reveal-on-scroll">
            <div className="inline-block bg-[#f5f1e9] px-4 py-1.5 rounded-full text-[#b48c48] text-[10px] font-black uppercase tracking-widest mb-6 border border-[#b48c48]/20">
              The Lead Digital Strategist
            </div>
            <h1 className="text-5xl md:text-8xl font-serif font-black text-[#2d1b10] mb-8 uppercase tracking-tighter leading-none">Diipesh <br/><span className="text-[#b48c48] italic font-normal">Barara</span></h1>
            <div className="space-y-6 text-lg text-[#8e6e53] leading-relaxed font-light">
              <p className="font-bold text-[#2d1b10] text-2xl font-serif">
                "I don't look at stars to tell your future; I look at charts to build your strategy."
              </p>
              <p>
                With 26+ years in Business Analysis, Sales, and Leadership within corporate corridors, I realized that the same logic used to optimize a company's P&L can be used to optimize a human life path.
              </p>
              <p>
                My 30+ year mastery in **Vedic Numerology (Anka Shastra)** and **Jyotish** allows me to treat a horoscope as a "Business Case Study." I don't provide miracle cures. I provide a "decision-making framework" for career pivots, business launches, and life transitions.
              </p>
              <p>
                I am the ONLY provider combining professional career counselling with high-end Vedic insights. This is about alignment, strategy, and results—not superstitions.
              </p>
            </div>
          </div>
          
          <div className="relative reveal-on-scroll">
             <div className="bg-[#f5f1e9] rounded-[4rem] p-4 shadow-sm border border-[#8e6e53]/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" 
                  alt="Diipesh Barara - Corporate Strategist" 
                  className="rounded-[3.5rem] w-full h-auto grayscale-[0.8] shadow-2xl transition-all duration-1000 hover:grayscale-0 hover:scale-105"
                />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-[#2d1b10] text-[#fdfaf6] p-10 rounded-[3rem] shadow-2xl max-w-xs border border-[#b48c48]/20">
                <p className="font-serif italic text-2xl leading-tight">"Your Birth Chart is your Operating System. Let's debug it."</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-24 border-y border-[#8e6e53]/10 reveal-on-scroll">
          {[
            { icon: <Briefcase />, title: "Corporate DNA", text: "26 years of scaling sales and leading business teams." },
            { icon: <Zap />, title: "Vedic Analytics", text: "30+ years mastering Anka Shastra and Jyotish." },
            { icon: <Target />, title: "Zero Woo-Woo", text: "100% data-driven strategy and result-oriented protocols." },
            { icon: <Award />, title: "Lucknow Elite", text: "Strategic consultant to some of the region's top professionals." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white border border-[#8e6e53]/10 text-[#b48c48] rounded-[2rem] flex items-center justify-center mb-8 shadow-sm group-hover:bg-[#2d1b10] group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2d1b10] mb-4 uppercase tracking-tighter group-hover:text-[#b48c48] transition-colors">{item.title}</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-32 bg-[#2d1b10] rounded-[5rem] text-center relative overflow-hidden shadow-2xl reveal-on-scroll">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#b48c48]/10 rounded-full blur-[120px] pointer-events-none" />
           <h2 className="text-4xl md:text-6xl font-serif font-black text-[#fdfaf6] mb-10 max-w-4xl mx-auto uppercase tracking-tighter leading-none">Why Choose <br/><span className="text-[#b48c48] italic font-normal">Strategic Vedic Insight?</span></h2>
           <p className="text-xl text-[#8e6e53] max-w-3xl mx-auto leading-relaxed mb-16 font-light">
             Most practitioners offer vague promises of "luck." I offer an actionable roadmap. Whether it's a career pivot at 40 or a startup launch at 20, we use numerology as a strategic asset to ensure you aren't fighting your natural frequency.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-8">
             <div className="bg-white/5 backdrop-blur-md px-10 py-8 rounded-[2rem] border border-[#b48c48]/20 group hover:bg-[#b48c48]/10 transition-all">
                <span className="block text-4xl font-serif font-black text-[#fdfaf6] mb-2 tracking-tighter">Lucknow</span>
                <span className="text-[10px] uppercase font-black text-[#b48c48] tracking-[0.5em]">Global Strategy Hub</span>
             </div>
             <div className="bg-white/5 backdrop-blur-md px-10 py-8 rounded-[2rem] border border-[#b48c48]/20 group hover:bg-[#b48c48]/10 transition-all">
                <span className="block text-4xl font-serif font-black text-[#fdfaf6] mb-2 tracking-tighter">Bespoke</span>
                <span className="text-[10px] uppercase font-black text-[#b48c48] tracking-[0.5em]">Execution Frameworks</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;
