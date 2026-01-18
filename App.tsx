import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CosmicBackground from './components/CosmicBackground';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Calculator from './pages/Calculator';
import { Page } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  // Scroll to top on page change
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
    <div className="min-h-screen flex flex-col text-[#2d1b10] overflow-x-hidden selection:bg-[#f5f1e9] selection:text-[#b48c48]">
      <CosmicBackground />
      <Navbar currentPage={page} setPage={setPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      
      {/* Floating WhatsApp CTA */}
      <a 
        href="#" 
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.5 8.5 0 0 1 3.5.8L21 3z"></path></svg>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-[#fdfaf6] text-[#2d1b10] px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 shadow-xl border border-[#8e6e53]/10 pointer-events-none transition-all">
          Chat with a Strategist
        </div>
      </a>
    </div>
  );
};

export default App;