
import React from 'react';
import { MessageSquare, Mail, MapPin, Send, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div className="reveal-on-scroll">
            <h1 className="text-5xl md:text-8xl font-serif font-black text-[#2d1b10] mb-8 uppercase tracking-tighter leading-none">Schedule A <span className="text-[#b48c48] italic font-normal">Strategy Audit.</span></h1>
            <p className="text-xl text-[#8e6e53] mb-12 leading-relaxed font-light">
              Consultations with Diipesh Barara are high-intensity, clinical sessions. 
              We recommend coming prepared with specific career, financial, or business KPIs you wish to optimize.
            </p>

            <div className="space-y-10">
               <div className="flex items-start space-x-8 group cursor-pointer" onClick={() => window.open('https://wa.me/919140660334', '_blank')}>
                  <div className="w-16 h-16 bg-[#25D366] text-white rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-1">Direct Strategy Chat</h3>
                    <p className="text-xl font-bold text-[#2d1b10] group-hover:text-[#b48c48] transition-colors">Connect on WhatsApp</p>
                    <p className="text-sm text-[#8e6e53] font-light">Fastest response for urgent career pivots.</p>
                  </div>
               </div>

               <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-white border border-[#8e6e53]/10 text-[#2d1b10] rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#b48c48] transition-all">
                    <Mail size={28} className="text-[#8e6e53] group-hover:text-[#b48c48]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-1">Corporate Inquiries</h3>
                    <p className="text-xl font-bold text-[#2d1b10] group-hover:text-[#b48c48] transition-colors">consult@destininumbers.com</p>
                    <p className="text-sm text-[#8e6e53] font-light">For partnership and MSME scaling audits.</p>
                  </div>
               </div>

               <div className="flex items-start space-x-8 group">
                  <div className="w-16 h-16 bg-white border border-[#8e6e53]/10 text-[#2d1b10] rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#b48c48] transition-all">
                    <MapPin size={28} className="text-[#8e6e53] group-hover:text-[#b48c48]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-1">Global HQ</h3>
                    <p className="text-xl font-bold text-[#2d1b10] group-hover:text-[#b48c48] transition-colors">Hazratganj, Lucknow</p>
                    <p className="text-sm text-[#8e6e53] font-light">Uttar Pradesh, India (By Appointment Only).</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-[#8e6e53]/10 shadow-2xl relative overflow-hidden reveal-on-scroll">
            <div className="absolute top-[-50px] right-[-50px] p-8 opacity-[0.02] pointer-events-none">
              <Send size={400} className="text-[#2d1b10]" />
            </div>
            
            <h2 className="text-3xl font-serif font-black text-[#2d1b10] mb-10 uppercase tracking-tight">Case Study Intake Form</h2>
            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#8e6e53] mb-3">Professional Name</label>
                  <input type="text" className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-2xl px-6 py-4 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all placeholder:text-[#8e6e53]/40" placeholder="e.g. Rahul Sharma" />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#8e6e53] mb-3">Service Required</label>
                  <select className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-2xl px-6 py-4 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all">
                    <option>Identity Optimization</option>
                    <option>Business Scaling Audit</option>
                    <option>Career Alignment Mapping</option>
                    <option>Partnership Synergy Audit</option>
                    <option>Signature Strategy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#8e6e53] mb-3">Strategic Email</label>
                <input type="email" className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-2xl px-6 py-4 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all placeholder:text-[#8e6e53]/40" placeholder="work@organization.com" />
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#8e6e53] mb-3">Objective Summary</label>
                <textarea rows={5} className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-2xl px-6 py-4 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all placeholder:text-[#8e6e53]/40" placeholder="Briefly describe the professional or business friction you wish to resolve..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-[11px] hover:brightness-125 transition-all flex items-center justify-center gap-5 shadow-2xl shadow-[#2d1b10]/30">
                Deploy Strategy Request
                <Send size={20} className="text-[#b48c48]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
