import React from 'react';
import { Target, BarChart3, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
          <div>
            <div className="inline-block bg-[#f5f1e9] px-4 py-1.5 rounded-full text-[#2d1b10] text-xs font-bold uppercase tracking-widest mb-6 border border-[#b48c48]/20">
              The Lead Digital Strategist
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#2d1b10] mb-8 uppercase tracking-tighter leading-none">Diipesh Barara</h1>
            <div className="space-y-6 text-lg text-[#8e6e53] leading-relaxed font-light">
              <p className="font-bold text-[#2d1b10]">
                I spent 26 years in boardrooms, analyzing P&L statements, scaling sales teams, and managing complex business units.
              </p>
              <p>
                Parallelly, I spent 30 years mastering the architecture of Vedic Numerology (Anka Shastra) and Astrology (Jyotish). I realized that a horoscope is not a mystical prediction; it's a "Business Case Study" for a human life.
              </p>
              <p>
                My approach is clinical. I analyze risks, opportunities, and timelines with the same rigor a consultant applies to an M&A deal. If you're looking for magical charms, you're in the wrong place. If you're looking for an optimization framework, welcome.
              </p>
            </div>
          </div>
          
          <div className="relative">
             <div className="bg-[#f5f1e9] rounded-[3rem] p-4 shadow-sm border border-[#8e6e53]/10">
                <img 
                  src="https://picsum.photos/id/1/800/1000" 
                  alt="Diipesh Barara" 
                  className="rounded-[2.5rem] w-full h-auto grayscale shadow-2xl transition-all duration-700 hover:grayscale-0"
                />
             </div>
             <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] p-8 rounded-3xl shadow-xl max-w-xs border border-[#8e6e53]/20">
                <p className="font-serif italic text-xl">"I treat your Birth Chart like your Factory Settings. Let's optimize the operating system."</p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-20 border-y border-[#8e6e53]/10">
          {[
            { icon: <BarChart3 />, title: "Dual Expertise", text: "26 years Corporate + 30 years Vedic Mastery." },
            { icon: <Target />, title: "Precision Analysis", text: "Grounded, data-driven decision frameworks." },
            { icon: <Globe />, title: "Modern Vedic", text: "Ancient wisdom translated for the 21st century." },
            { icon: <Award />, title: "Result Oriented", text: "Focus on ROI (Return on Intent) for your life." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-[#2d1b10] text-[#fdfaf6] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-[#b48c48] transition-colors">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2d1b10] mb-3 uppercase tracking-tighter group-hover:text-[#b48c48] transition-colors">{item.title}</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-32 p-12 md:p-20 bg-[#f5f1e9]/40 rounded-[3rem] text-center border border-[#8e6e53]/10 shadow-sm relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#b48c48]/10 rounded-full blur-[100px] pointer-events-none" />
           <h2 className="text-4xl md:text-5xl font-serif font-black text-[#2d1b10] mb-8 max-w-4xl mx-auto uppercase tracking-tighter">Why Work With a 'Corporate Mystic'?</h2>
           <p className="text-xl text-[#8e6e53] max-w-3xl mx-auto leading-relaxed mb-10 font-light">
             Most practitioners offer vague promises. I offer actionable roadmaps. Whether it's a career pivot at 40 or a startup launch at 20, we use numerology as a strategic asset to ensure you aren't fighting your natural frequency.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
             <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-[#8e6e53]/10 group hover:border-[#b48c48] transition-all">
                <span className="block text-3xl font-serif font-black text-[#2d1b10] mb-1">Lucknow</span>
                <span className="text-[10px] uppercase font-black text-[#b48c48] tracking-[0.4em]">Global HQ</span>
             </div>
             <div className="bg-white px-8 py-6 rounded-2xl shadow-sm border border-[#8e6e53]/10 group hover:border-[#b48c48] transition-all">
                <span className="block text-3xl font-serif font-black text-[#2d1b10] mb-1">Bespoke</span>
                <span className="text-[10px] uppercase font-black text-[#b48c48] tracking-[0.4em]">Consultations</span>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;