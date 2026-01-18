import React from 'react';
import { MessageSquare, Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#2d1b10] mb-8 uppercase tracking-tighter leading-none">Secure Your <span className="text-[#b48c48] italic font-normal">Strategy.</span></h1>
            <p className="text-xl text-[#8e6e53] mb-12 leading-relaxed font-light">
              Consultations with Diipesh Barara are high-intensity, strategy-focused sessions. 
              We recommend coming prepared with specific career or business objectives.
            </p>

            <div className="space-y-8">
               <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-[#2d1b10] text-[#fdfaf6] rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#b48c48] transition-colors">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#8e6e53] mb-1">Direct Chat</h3>
                    <p className="text-lg font-bold text-[#2d1b10] group-hover:text-[#b48c48] transition-colors cursor-pointer">Start WhatsApp Consultation</p>
                    <p className="text-sm text-[#8e6e53] font-light">Fastest way to check availability.</p>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white border border-[#8e6e53]/10 text-[#2d1b10] rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#b48c48] transition-all">
                    <Mail size={24} className="text-[#8e6e53] group-hover:text-[#b48c48]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#8e6e53] mb-1">Email Strategy</h3>
                    <p className="text-lg font-bold text-[#2d1b10] group-hover:text-[#b48c48] transition-colors">consult@destininumbers.com</p>
                    <p className="text-sm text-[#8e6e53] font-light">For corporate partnership inquiries.</p>
                  </div>
               </div>

               <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 bg-white border border-[#8e6e53]/10 text-[#2d1b10] rounded-2xl flex items-center justify-center shrink-0 shadow-sm group-hover:border-[#b48c48] transition-all">
                    <MapPin size={24} className="text-[#8e6e53] group-hover:text-[#b48c48]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#8e6e53] mb-1">HQ Location</h3>
                    <p className="text-lg font-bold text-[#2d1b10] group-hover:text-[#b48c48] transition-colors">Hazratganj, Lucknow</p>
                    <p className="text-sm text-[#8e6e53] font-light">Uttar Pradesh, India (By Appointment Only).</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-[#8e6e53]/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-50px] right-[-50px] p-8 opacity-[0.03] pointer-events-none">
              <Send size={300} className="text-[#2d1b10]" />
            </div>
            
            <h2 className="text-3xl font-serif font-black text-[#2d1b10] mb-8 uppercase tracking-tight">Inquiry Brief</h2>
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-2">Full Name</label>
                  <input type="text" className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-xl px-4 py-3 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all" placeholder="Corporate Identity" />
                </div>
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-2">Service Interest</label>
                  <select className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-xl px-4 py-3 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all">
                    <option>Name Correction</option>
                    <option>Business Numerology</option>
                    <option>Career Alignment</option>
                    <option>Crystal Protocol</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-2">Email Address</label>
                <input type="email" className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-xl px-4 py-3 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all" placeholder="work@company.com" />
              </div>

              <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-2">Your Objective</label>
                <textarea rows={4} className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-xl px-4 py-3 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all" placeholder="Tell us about your career pivot or business challenge..."></textarea>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-sm hover:brightness-110 transition-all flex items-center justify-center gap-4 shadow-xl">
                Deploy Strategy Request
                <Send size={18} className="text-[#b48c48]" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;