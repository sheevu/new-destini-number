import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Zap, Loader2, Sparkles, AlertCircle } from 'lucide-react';

const Calculator: React.FC = () => {
  const [name, setName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const getStrategicInsight = async () => {
    if (!name || !birthdate) return;
    setLoading(true);
    setResult(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `Perform a brief "Strategic Life Path Analysis" for:
        Name: ${name}
        Birthdate: ${birthdate}`,
        config: {
          systemInstruction: 'You are Diipesh Barara, Lead Digital Strategist at Destini Numbers. Tone: Corporate, analytical, result-oriented, "Zero Woo-Woo". Focus on Professional DNA (Career strengths), Market Timing (Current life phase), and Strategic Recommendation (One actionable step). Keep it under 150 words. Format with clean H3 headers.',
        }
      });
      setResult(response.text || "No response received.");
    } catch (error) {
      console.error(error);
      setResult("Strategic systems offline. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-black text-[#2d1b10] mb-6 uppercase tracking-tighter">Strategic Audit</h1>
          <p className="text-lg text-[#8e6e53] font-light">Get an instant corporate-grade Vedic insight based on your vibrational data.</p>
        </div>

        <div className="bg-white border border-[#8e6e53]/10 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#b48c48] via-[#d4af37] to-[#b48c48]" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
             <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-3">Professional Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-2xl px-6 py-4 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all font-bold placeholder:font-normal" 
                  placeholder="e.g. John Doe" 
                />
             </div>
             <div>
                <label className="block text-xs font-black uppercase tracking-widest text-[#8e6e53] mb-3">Origin Date (DOB)</label>
                <input 
                  type="date" 
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                  className="w-full bg-[#fdfaf6] border border-[#8e6e53]/10 rounded-2xl px-6 py-4 text-[#2d1b10] focus:outline-none focus:ring-2 focus:ring-[#b48c48]/20 transition-all font-bold uppercase" 
                />
             </div>
          </div>

          <button 
            onClick={getStrategicInsight}
            disabled={loading || !name || !birthdate}
            className={`w-full py-6 rounded-2xl font-black uppercase tracking-[0.3em] text-sm flex items-center justify-center gap-4 transition-all shadow-xl ${
              loading ? 'bg-[#8e6e53] text-white cursor-not-allowed' : 'bg-[#2d1b10] text-[#fdfaf6] hover:brightness-110'
            }`}
          >
            {loading ? <Loader2 className="animate-spin" /> : <Zap size={18} className="text-[#b48c48]" />}
            {loading ? 'Processing Data...' : 'Generate Strategic Analysis'}
          </button>

          {result && (
            <div className="mt-12 p-8 bg-[#fdfaf6] rounded-3xl border border-[#b48c48]/20 animate-in fade-in slide-in-from-bottom duration-700 relative">
               <div className="absolute top-0 right-0 p-6 opacity-[0.05] pointer-events-none">
                 <Sparkles size={80} className="text-[#b48c48]" />
               </div>
               <div className="flex items-center space-x-3 text-[#b48c48] mb-6">
                 <Sparkles size={24} />
                 <span className="font-black uppercase tracking-[0.2em] text-xs">Vedic Intelligence Report</span>
               </div>
               <div className="prose prose-stone max-w-none text-[#2d1b10] font-medium leading-relaxed">
                  <div dangerouslySetInnerHTML={{ __html: result.replace(/\n/g, '<br/>') }} />
               </div>
               <div className="mt-10 pt-6 border-t border-[#8e6e53]/10 flex items-center justify-between">
                  <p className="text-[10px] text-[#8e6e53] uppercase font-black tracking-widest">Confidential Analysis | Destini Numbers</p>
                  <button className="text-[#2d1b10] font-bold text-xs uppercase hover:text-[#b48c48] transition-colors">Save Report</button>
               </div>
            </div>
          )}

          {!result && !loading && (
             <div className="mt-12 flex items-center space-x-4 text-[#8e6e53] p-8 rounded-3xl border border-dashed border-[#8e6e53]/20 bg-[#fdfaf6]/50">
                <AlertCircle size={20} className="text-[#b48c48]" />
                <p className="text-sm font-medium italic">Enter your professional data points above to initiate the Vedic Strategy Audit.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Calculator;