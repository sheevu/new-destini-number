
import React from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#f5f1e9] border-t border-[#8e6e53]/20 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] flex items-center justify-center rounded-lg">
                  <span className="text-white font-serif font-bold text-xl">D</span>
              </div>
              <div>
                <span className="text-xl font-serif font-black tracking-tight text-[#2d1b10] block leading-none uppercase">DESTINI</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#b48c48] font-bold block">Numbers</span>
              </div>
            </div>
            <p className="text-[#8e6e53] max-w-sm mb-8 leading-relaxed font-light">
              Premium Vedic Numerology and Corporate Career Counselling in Lucknow. We bridge the gap between ancient Anka Shastra and modern business strategy.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white rounded-full border border-[#8e6e53]/20 hover:bg-[#fdfaf6] hover:border-[#b48c48] transition-all">
                <Instagram size={18} className="text-[#8e6e53]" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-[#8e6e53]/20 hover:bg-[#fdfaf6] hover:border-[#b48c48] transition-all">
                <Linkedin size={18} className="text-[#8e6e53]" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full border border-[#8e6e53]/20 hover:bg-[#fdfaf6] hover:border-[#b48c48] transition-all">
                <Twitter size={18} className="text-[#8e6e53]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#2d1b10] mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-[#8e6e53]">
                <MapPin size={18} className="text-[#b48c48] shrink-0" />
                <span className="font-light">Hazratganj, Lucknow, <br />Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-[#8e6e53]">
                <Phone size={18} className="text-[#b48c48] shrink-0" />
                <span className="font-light">+91 91406 00000</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-[#8e6e53]">
                <Mail size={18} className="text-[#b48c48] shrink-0" />
                <span className="font-light">consult@destininumbers.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-[#2d1b10] mb-6">Expertise</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-[#8e6e53] hover:text-[#b48c48] font-light">Career Counselling with Astrology</a></li>
              <li><a href="#" className="text-sm text-[#8e6e53] hover:text-[#b48c48] font-light">Vedic Numerology Expert</a></li>
              <li><a href="#" className="text-sm text-[#8e6e53] hover:text-[#b48c48] font-light">Business Name Numerology</a></li>
              <li><a href="#" className="text-sm text-[#8e6e53] hover:text-[#b48c48] font-light">Life Path Number Analysis</a></li>
              <li><a href="#" className="text-sm text-[#8e6e53] hover:text-[#b48c48] font-light">Name Correction Online</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#8e6e53]/10 flex flex-col md:flex-row justify-between items-center text-xs text-[#8e6e53] uppercase tracking-widest font-bold">
          <p className="font-light">© {new Date().getFullYear()} Destini Numbers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0 font-light">
            <a href="#" className="hover:text-[#2d1b10]">Privacy Policy</a>
            <a href="#" className="hover:text-[#2d1b10]">Terms of Strategy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
