
import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { Menu, X, Rocket } from 'lucide-react';

interface NavbarProps { currentPage: Page; setPage: (page: Page) => void; }

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) { document.body.style.overflow = 'hidden'; }
    else { document.body.style.overflow = 'unset'; }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navItems: { label: string; value: Page }[] = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Services', value: 'services' },
    { label: 'Contact', value: 'contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#fdfaf6]/90 backdrop-blur-md z-50 border-b border-[#8e6e53]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center relative z-50 bg-transparent">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => { setPage('home'); setIsOpen(false); }}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#2d1b10] to-[#4a2d1b] flex items-center justify-center rounded-lg transition-transform group-hover:rotate-12 shadow-md">
                <span className="text-[#fdfaf6] font-serif font-bold text-xl">D</span>
            </div>
            <div>
              <span className="text-xl font-serif font-black tracking-tight text-[#2d1b10] block leading-none uppercase">DESTINI</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#b48c48] font-bold block">Numbers</span>
            </div>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setPage(item.value)}
                className={`text-sm font-semibold tracking-wide uppercase transition-colors relative group py-1 ${
                  currentPage === item.value ? 'text-[#b48c48]' : 'text-[#8e6e53] hover:text-[#2d1b10]'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#b48c48] transition-transform origin-left ${currentPage === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
              </button>
            ))}
            <button 
              onClick={() => setPage('calculator')}
              className="bg-gradient-to-r from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all flex items-center gap-2 shadow-lg shadow-[#2d1b10]/10"
            >
              <Rocket size={14} />
              Strategic Audit
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-[#2d1b10] p-2 transition-transform active:scale-90 z-50"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-[#2d1b10]/70 backdrop-blur-[4px] md:hidden transition-opacity duration-500 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
        style={{ zIndex: 40 }}
      />

      <div 
        className={`fixed top-0 left-0 w-full bg-[#fdfaf6] border-b border-[#8e6e53]/20 shadow-2xl md:hidden overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 45, maxHeight: '100vh' }}
      >
        <div className="flex flex-col space-y-1 px-8 pt-28 pb-12 bg-[#fdfaf6] min-h-[50vh]">
          {navItems.map((item, index) => (
            <button
              key={item.value}
              onClick={() => { setPage(item.value); setIsOpen(false); }}
              className={`text-left text-3xl font-serif font-black uppercase tracking-tight py-4 border-b border-[#8e6e53]/10 transition-all duration-500 transform ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              } ${
                currentPage === item.value ? 'text-[#b48c48] pl-2' : 'text-[#2d1b10] hover:text-[#b48c48]'
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100 + 200}ms` : '0ms' }}
            >
              {item.label}
            </button>
          ))}
          <div 
            className={`pt-10 transition-all duration-700 transform ${
              isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
            style={{ transitionDelay: isOpen ? '600ms' : '0ms' }}
          >
            <button 
              onClick={() => { setPage('calculator'); setIsOpen(false); }}
              className="w-full bg-gradient-to-r from-[#2d1b10] to-[#4a2d1b] text-[#fdfaf6] px-6 py-5 rounded-2xl text-sm font-black uppercase tracking-[0.3em] shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <Rocket size={18} />
              Strategic Audit
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
