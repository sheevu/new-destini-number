
import React from 'react';
import { SERVICES } from '../constants';
import { 
  ChevronRight, 
  CheckCircle2, 
  LayoutGrid, 
  CalendarRange, 
  MousePointer2,
  Fingerprint,
  PieChart,
  Navigation,
  Gem,
  Shield,
  Users,
  Zap
} from 'lucide-react';

const VedicIcon = ({ icon: Icon }: { icon: any }) => (
  <div className="relative w-24 h-24 flex items-center justify-center group/icon">
    <div className="absolute inset-0 bg-[#b48c48]/20 rounded-[2rem] blur-2xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-700" />
    <div className="absolute inset-0 bg-[#f5f1e9] rounded-[2rem] rotate-3 group-hover/icon:rotate-0 transition-transform duration-500 border border-[#8e6e53]/20 shadow-sm" />
    <svg className="absolute inset-0 w-full h-full opacity-[0.15] text-[#2d1b10]" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
      <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
    </svg>
    <div className="relative z-10 text-[#b48c48] group-hover/icon:text-[#2d1b10] transition-all duration-500 group-hover/icon:scale-110 drop-shadow-[0_0_8px_rgba(180,140,72,0.3)]">
      <Icon size={44} strokeWidth={1.2} />
    </div>
  </div>
);

const Services: React.FC = () => {
  const getServiceIcon = (id: string) => {
    switch(id) {
      case 'name-correction': return Fingerprint;
      case 'signature-analysis': return Zap;
      case 'business-numerology': return PieChart;
      case 'career-alignment': return Navigation;
      case 'digital-vibration': return Shield;
      default: return Gem;
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Screenshot-Matched Hero Section */}
        <div className="text-center mb-32 reveal-on-scroll is-visible">
          <div className="inline-block bg-[#f5f1e9] px-6 py-2 rounded-full text-[#b48c48] text-[10px] font-bold uppercase tracking-widest mb-12 border border-[#b48c48]/20">
            PROFESSIONAL TOOLKIT
          </div>
          <h1 className="text-6xl md:text-9xl font-serif font-black text-[#2d1b10] uppercase tracking-tighter leading-[0.85] mb-12">
            STRATEGIC <br/>
            <span className="text-[#b48c48] italic font-medium">ARCHITECTURE</span>
          </h1>
          <p className="text-xl text-[#8e6e53] max-w-2xl mx-auto leading-relaxed font-light">
            We don't sell luck; we sell alignment. Use our clinical Vedic analysis to remove the invisible friction blocks in your career and business.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-12 p-8 md:p-12 bg-white border border-[#8e6e53]/10 rounded-[3rem] shadow-sm hover:shadow-2xl hover:scale-[1.01] hover:bg-[#fdfaf6] hover:border-[#b48c48]/30 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} reveal-on-scroll`}
            >
              <div className="w-full lg:w-2/5 overflow-hidden rounded-[2.5rem]">
                <div className="relative aspect-square group-hover:scale-105 transition-transform duration-1000 ease-out border border-[#8e6e53]/5">
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1507679799987-c73779587ccf' : index === 1 ? '1450133064473-71024230f91b' : index === 2 ? '1553484771-047a44eee27f' : index === 3 ? '1521737604893-d14cc237f11d' : '1563986768609-322da13575f3'}?auto=format&fit=crop&q=80&w=800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-[#2d1b10]/5 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div className="w-full lg:w-3/5">
                <div className="flex items-center space-x-8 mb-8">
                   <VedicIcon icon={getServiceIcon(service.id)} />
                   <div>
                      <span className="text-xs font-black uppercase tracking-[0.3em] text-[#b48c48] block mb-2">{service.focus}</span>
                      <h2 className="text-2xl md:text-3xl font-serif font-black text-[#2d1b10] leading-tight uppercase tracking-tight group-hover:text-[#b48c48] transition-colors duration-500">
                        {service.title}
                      </h2>
                   </div>
                </div>
                
                <p className="text-lg text-[#8e6e53] mb-8 leading-relaxed font-light">
                  {service.longDescription}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                   {[
                     "Clinical Vedic Audit",
                     "Risk/Opportunity Analysis",
                     "Decision-making Framework",
                     "6-Month Performance Plan"
                   ].map((item, i) => (
                     <div key={i} className="flex items-center space-x-3 text-[#2d1b10]">
                        <CheckCircle2 size={16} className="text-[#b48c48] shrink-0" />
                        <span className="font-semibold text-[11px] uppercase tracking-wide">{item}</span>
                     </div>
                   ))}
                </div>

                <button className="bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-[10px] flex items-center gap-4 group/btn hover:brightness-125 transition-all shadow-xl shadow-[#2d1b10]/10 hover:shadow-[#b48c48]/20">
                   Analyze My Case Study
                   <ChevronRight size={18} className="group-hover/btn:translate-x-2 transition-transform duration-500" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 reveal-on-scroll">
           <div className="bg-[#f5f1e9] p-12 rounded-[3rem] border border-[#b48c48]/20 group/card hover:bg-[#b48c48]/5 hover:-translate-y-2 transition-all duration-500">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-[#8e6e53]/10 group-hover/card:scale-110 transition-transform">
                <LayoutGrid className="text-[#b48c48]" size={32} />
              </div>
              <h3 className="text-xl font-black text-[#2d1b10] mb-4 uppercase tracking-tighter">Scalable Logic</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">Our methodologies are designed to work for solopreneurs and multi-million dollar MSMEs alike.</p>
           </div>
           
           <div className="bg-[#2d1b10] p-12 rounded-[3rem] group/card hover:brightness-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl shadow-[#2d1b10]/20">
              <div className="w-16 h-16 bg-[#3d2a1d] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover/card:scale-110 transition-transform">
                <CalendarRange className="text-[#b48c48]" size={32} />
              </div>
              <h3 className="text-xl font-black text-[#fdfaf6] mb-4 uppercase tracking-tighter">Timing Mastery</h3>
              <p className="text-[#8e6e53]/80 text-sm leading-relaxed font-light">In business, timing is everything. We use Jyotish to pinpoint your most powerful launch windows.</p>
           </div>
           
           <div className="bg-white p-12 rounded-[3rem] border border-[#8e6e53]/10 group/card hover:bg-[#fdfaf6] hover:-translate-y-2 transition-all duration-500 shadow-sm">
              <div className="w-16 h-16 bg-[#fdfaf6] rounded-2xl flex items-center justify-center mb-8 shadow-sm border border-[#8e6e53]/5 group-hover/card:scale-110 transition-transform">
                <MousePointer2 className="text-[#2d1b10]" size={32} />
              </div>
              <h3 className="text-xl font-black text-[#2d1b10] mb-4 uppercase tracking-tighter">Strategic Correction</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">Name correction isn't magic—it's vibrational engineering. We align your identity with your corporate intent.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
