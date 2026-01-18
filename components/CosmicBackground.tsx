
import React, { useState, useEffect, useRef } from 'react';

const CosmicBackground: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const requestRef = useRef<number>(null);
  const targetMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize position to -0.5 to 0.5 range
      targetMousePos.current = {
        x: (e.clientX / window.innerWidth - 0.5),
        y: (e.clientY / window.innerHeight - 0.5),
      };
    };

    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (targetMousePos.current.x - prev.x) * 0.05,
        y: prev.y + (targetMousePos.current.y - prev.y) * 0.05,
      }));
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-[#fdfaf6]">
      {/* Interactive Global Glow - Follows Cursor */}
      <div 
        className="absolute w-[100vw] h-[100vw] rounded-full bg-[#b48c48]/5 blur-[120px] mix-blend-multiply transition-opacity duration-1000"
        style={{ 
          left: `calc(50% + ${mousePos.x * 100}px)`, 
          top: `calc(50% + ${mousePos.y * 100}px)`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Deep Layer: Stylized Nebula Glows */}
      <div 
        className="absolute top-[5%] left-[-10%] w-[70vw] h-[70vw] bg-[#e6dbd0]/30 rounded-full blur-[140px] opacity-60"
        style={{ transform: `translate(${mousePos.x * -20}px, ${mousePos.y * -20}px)` }}
      />
      <div 
        className="absolute bottom-[-15%] right-[-10%] w-[60vw] h-[60vw] bg-[#dfd3c3]/20 rounded-full blur-[120px] opacity-50"
        style={{ transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)` }}
      />

      {/* Layer 1: Sacred Geometry Grid (Deep Background) */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{ 
          transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 10}px) scale(1.05)` 
        }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="sacred-grid" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <g stroke="#2d1b10" strokeWidth="0.5" fill="none">
                <circle cx="200" cy="200" r="180" opacity="0.5" />
                <path d="M200 20 L200 380 M20 200 L380 200" opacity="0.3" />
                <rect x="100" y="100" width="200" height="200" transform="rotate(45 200 200)" opacity="0.2" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-grid)" />
        </svg>
      </div>

      {/* Layer 2: Major Celestial Bodies (Stylized Planets & Nodes) */}
      <div 
        className="absolute top-[20%] right-[15%] w-80 h-80 opacity-40"
        style={{ transform: `translate(${mousePos.x * -60}px, ${mousePos.y * -60}px)` }}
      >
        <div className="relative w-full h-full animate-[spin_150s_linear_infinite]">
          <div className="absolute inset-6 rounded-full bg-gradient-to-tr from-[#2d1b10]/80 via-[#8e6e53]/40 to-transparent blur-[2px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[1px] bg-gradient-to-r from-transparent via-[#b48c48]/30 to-transparent rotate-[35deg]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-gradient-to-r from-transparent via-[#8e6e53]/20 to-transparent rotate-[-15deg]" />
        </div>
      </div>

      <div 
        className="absolute bottom-[25%] left-[10%] w-56 h-56 opacity-30"
        style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
      >
        <div className="relative w-full h-full animate-[spin_200s_linear_infinite_reverse]">
          <div className="absolute inset-4 rounded-full border border-[#b48c48]/20 shadow-[inset_0_0_30px_rgba(180,140,72,0.1)]" />
          <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-3 h-3 bg-[#b48c48]/40 rounded-full blur-[1px]" />
        </div>
      </div>
      
      {/* Layer 3: Rotating Zodiac Chart (Middle Ground) */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130vw] h-[130vw] opacity-[0.07]"
        style={{ 
          transform: `translate(calc(-50% + ${mousePos.x * 30}px), calc(-50% + ${mousePos.y * 30}px)) rotate(${mousePos.x * 5}deg)` 
        }}
      >
        <svg viewBox="0 0 1000 1000" className="w-full h-full animate-[spin_900s_linear_infinite]">
          <circle cx="500" cy="500" r="490" fill="none" stroke="#2d1b10" strokeWidth="0.2" strokeDasharray="2 10" />
          <circle cx="500" cy="500" r="400" fill="none" stroke="#b48c48" strokeWidth="0.5" opacity="0.4" />
          {[...Array(12)].map((_, i) => (
            <g key={i} transform={`rotate(${i * 30} 500 500)`}>
              <text x="500" y="45" fontSize="14" textAnchor="middle" fill="#8e6e53" opacity="0.6" fontFamily="serif" transform="rotate(-15 500 45)">❈</text>
              <line x1="500" y1="500" x2="500" y2="60" stroke="#8e6e53" strokeWidth="0.1" opacity="0.3" />
            </g>
          ))}
        </svg>
      </div>

      {/* Layer 4: Celestial Dust & Stardust Particles (Fore Ground) */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translate(${mousePos.x * 80}px, ${mousePos.y * 80}px)` }}
      >
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              top: `${(i * 13.7) % 100}%`,
              left: `${(i * 27.3) % 100}%`,
              width: `${(i % 3) + 1.5}px`,
              height: `${(i % 3) + 1.5}px`,
              backgroundColor: i % 5 === 0 ? '#b48c48' : '#8e6e53',
              boxShadow: i % 10 === 0 ? '0 0 10px #b48c48' : 'none',
              animation: `pulse ${4 + (i % 5)}s infinite ease-in-out`,
              opacity: 0.05 + (i % 4) * 0.05
            }}
          />
        ))}
      </div>

      {/* Layer 5: Slow Drifting "Wisps" */}
      <div 
        className="absolute inset-0"
        style={{ transform: `translate(${mousePos.x * -40}px, ${mousePos.y * -40}px)` }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-r from-transparent via-[#b48c48]/5 to-transparent blur-2xl"
            style={{
              top: `${(i * 20) + 10}%`,
              left: `${(i * 15) % 100}%`,
              width: '300px',
              height: '1px',
              transform: `rotate(${(i * 45)}deg)`,
              opacity: 0.3
            }}
          />
        ))}
      </div>

      {/* Subtle Strategic Overlay (Vertical Axis) */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#2d1b10]/10 to-transparent hidden lg:block" />
    </div>
  );
};

export default CosmicBackground;
