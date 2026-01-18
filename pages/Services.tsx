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
  Shield
} from 'lucide-react';

const VedicIcon = ({ icon: Icon, color = "amber" }: { icon: any, color?: string }) => (
  <div className="relative w-16 h-16 flex items-center justify-center group">
    <div className="absolute inset-0 bg-[#f5f1e9] rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 border border-[#8e6e53]/10" />
    <svg className="absolute inset-0 w-full h-full opacity-10 text-[#2d1b10]" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
      <path d="M50 5 L50 95 M5 50 L95 50 M20 20 L80 80 M80 20 L20 80" stroke="currentColor" strokeWidth="0.5" />
      <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
    </svg>
    <div className={`relative z-10 text-[#b48c48] group-hover:text-[#2d1b10] transition-colors duration-500`}>
      <Icon size={32} strokeWidth={1.5} />
    </div>
  </div>
);

const Services: React.FC = () => {
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
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <h1 className="text-5xl md:text-8xl font-serif font-black text-[#2d1b10] mb-8 uppercase tracking-tighter leading-none">The Strategy <span className="text-[#b48c48] italic font-normal">Toolkit</span></h1>
          <p className="text-xl text-[#8e6e53] max-w-3xl mx-auto leading-relaxed font-light">
            Our services are designed to remove friction from your life and business. 
            We provide the analytical grounding you need to scale with confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col lg:flex-row items-center gap-16 p-8 md:p-16 bg-white border border-[#8e6e53]/10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-700 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden group border border-[#8e6e53]/10">
                  <img 
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1450133064473-71024230f91b' : index === 1 ? '1460925895917-afdab827c52f' : index === 2 ? '1521737604893-d14cc237f11d' : '1533154683836-84ea7a0bc310'}?auto=format&fit=crop&q=80&w=800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale-[0.3] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-[#2d1b10]/10 group-hover:bg-transparent transition-colors" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center space-x-6 mb-8">
                   <VedicIcon icon={getServiceIcon(service.id)} />
                   <div>
                      <span className="text-xs font-black uppercase tracking-widest text-[#b48c48] block mb-1">{service.focus}</span>
                      <h2 className="text-3xl md:text-4xl font-serif font-black text-[#2d1b10] leading-tight uppercase tracking-tight">{service.title}</h2>
                   </div>
                </div>
                
                <p className="text-lg text-[#8e6e53] mb-8 leading-relaxed font-light">
                  {service.longDescription}
                </p>
                
                <ul className="space-y-4 mb-10">
                   {[
                     "Data-driven Vedic analysis",
                     "Strategic implementation roadmap",
                     "Consultation directly with Diipesh",
                     "Result-oriented follow-ups"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center space-x-3 text-[#2d1b10]">
                        <CheckCircle2 size={18} className="text-[#b48c48]" />
                        <span className="font-semibold text-sm">{item}</span>
                     </li>
                   ))}
                </ul>

                <button className="bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center gap-3 group hover:brightness-110 transition-all shadow-md shadow-[#2d1b10]/10">
                   Deploy Strategic Audit
                   <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="bg-[#f5f1e9] p-10 rounded-3xl border border-[#b48c48]/20 group hover:bg-[#b48c48]/10 transition-colors">
              <LayoutGrid className="text-[#b48c48] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black text-[#2d1b10] mb-4 uppercase tracking-tighter">Scalable Systems</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">Our methodologies are designed to work for solopreneurs and multi-million dollar MSMEs alike.</p>
           </div>
           <div className="bg-[#2d1b10] p-10 rounded-3xl group hover:brightness-110 transition-all">
              <CalendarRange className="text-[#b48c48] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black text-[#fdfaf6] mb-4 uppercase tracking-tighter">Timing Mastery</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">In business, timing is everything. We use Jyotish to pinpoint your most powerful launch windows.</p>
           </div>
           <div className="bg-white p-10 rounded-3xl border border-[#8e6e53]/10 group hover:bg-[#fdfaf6] transition-colors shadow-sm">
              <MousePointer2 className="text-[#2d1b10] mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-black text-[#2d1b10] mb-4 uppercase tracking-tighter">Correction Logic</h3>
              <p className="text-[#8e6e53] text-sm leading-relaxed font-light">Name correction isn't magic—it's vibrational engineering. We align your identity with your intent.</p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Services;