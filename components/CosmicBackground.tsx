import React, { useState, useEffect } from 'react';

const CosmicBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fdfaf6]">
      {/* Interactive Vedic Chart (Kundali) Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] transition-transform duration-1000 ease-out"
        style={{ 
          transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px) scale(1.05)` 
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="vedic-kundali-grid" x="0" y="0" width="500" height="500" patternUnits="userSpaceOnUse">
              <g stroke="#2d1b10" strokeWidth="0.8" fill="none">
                {/* Square Frame */}
                <rect x="50" y="50" width="400" height="400" />
                {/* Diagonals */}
                <path d="M50 50 L450 450 M450 50 L50 450" />
                {/* Diamond Frame */}
                <path d="M250 50 L450 250 L250 450 L50 250 Z" />
                {/* Subtle Dots for Houses */}
                <circle cx="250" cy="250" r="3" fill="#2d1b10" />
              </g>
              <text x="250" y="45" fontSize="12" textAnchor="middle" fill="#8e6e53" opacity="0.6" fontFamily="serif">Jyotish Architecture</text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#vedic-kundali-grid)" />
        </svg>
      </div>
      
      {/* Large Rotating Zodiac Mandala */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] opacity-[0.08] transition-transform duration-[2s] ease-out"
        style={{ 
          transform: `translate(calc(-50% + ${mousePos.x * 15}px), calc(-50% + ${mousePos.y * 15}px)) rotate(${mousePos.x * 8}deg)` 
        }}
      >
        <svg viewBox="0 0 1000 1000" className="w-full h-full animate-[spin_600s_linear_infinite]">
          <circle cx="500" cy="500" r="480" fill="none" stroke="#8e6e53" strokeWidth="0.5" strokeDasharray="10 20" />
          <circle cx="500" cy="500" r="400" fill="none" stroke="#b48c48" strokeWidth="0.3" />
          {/* Zodiac Symbol Groups */}
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 500 500)`}>
              <line x1="500" y1="500" x2="500" y2="20" stroke="#8e6e53" strokeWidth="0.2" opacity="0.3" />
              <path d="M490 60 L500 40 L510 60 Z" fill="#b48c48" />
              <circle cx="500" cy="100" r="15" fill="none" stroke="#b48c48" strokeWidth="0.5" />
            </g>
          ))}
        </svg>
      </div>

      {/* Earthy Nebula / Energy Fields */}
      <div 
        className="absolute top-[-15%] right-[-15%] w-[900px] h-[900px] bg-[#dfd3c3]/40 rounded-full blur-[180px] transition-transform duration-[3s] ease-out"
        style={{ transform: `translate(${mousePos.x * -100}px, ${mousePos.y * -100}px)` }} 
      />
      <div 
        className="absolute bottom-[-20%] left-[-20%] w-[1200px] h-[1200px] bg-[#e6dbd0]/30 rounded-full blur-[200px] transition-transform duration-[4s] ease-out"
        style={{ transform: `translate(${mousePos.x * 60}px, ${mousePos.y * 60}px)` }} 
      />
      
      {/* Grounded Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#8e6e53]/15"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 2}px`,
              height: `${Math.random() * 3 + 2}px`,
              animation: `pulse ${4 + Math.random() * 6}s infinite ease-in-out`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>

      {/* Subtle Vertical Scroll Guide */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#8e6e53]/20 to-transparent hidden lg:block" />
    </div>
  );
};

export default CosmicBackground;