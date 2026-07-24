import React, { useEffect, useMemo, useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Compass, Gem, Menu, MessageCircle, MoonStar, Orbit, Phone, ShieldCheck, Sparkles, Star, SunMoon, X } from 'lucide-react';

type Page = 'home' | 'services' | 'shop' | 'contact';

const whatsapp = 'https://wa.me/919140660334?text=Namaste%20Destini%20Numbers%2C%20I%20want%20to%20book%20a%20consultation.';

const services = [
  ['Vedic Astrology', 'Birth-chart clarity for career, wealth, relationship and family decisions.', MoonStar],
  ['Numerology & Name Correction', 'Name, mobile, business and personal number alignment with practical guidance.', Sparkles],
  ['KP Astrology', 'Precise event timing and yes/no clarity for important life questions.', Orbit],
  ['Career & Business Counseling', 'Vedic systems translated into clear choices, timing windows and action plans.', Compass],
  ['Crystal Healing', 'Personalized crystal recommendations, bracelet activation and wearing protocol.', Gem],
  ['Remedial Guidance', 'Simple mantras, donation, lifestyle, color and gemstone remedies that fit real life.', ShieldCheck],
];

const products = [
  ['Money Magnet Citrine Bracelet', 'For confidence, business momentum and prosperity intention.', '₹1,499'],
  ['Black Tourmaline Protection Band', 'For grounding, nazar protection and energetic boundaries.', '₹1,299'],
  ['Rose Quartz Relationship Bracelet', 'For emotional softness, harmony and self-love rituals.', '₹1,199'],
  ['7 Chakra Premium Stack', 'A balanced daily-wear set for holistic energy support.', '₹2,499'],
];

const faqs = [
  ['How does the consultation work?', 'Share your birth details, question area and preferred language on WhatsApp. We confirm the right service, timing and next step.'],
  ['Do you consult outside India?', 'Yes. Sessions can be handled globally through WhatsApp or video call with IST-friendly slots.'],
  ['Are crystal bracelets energized?', 'Each recommendation includes selection logic, cleansing, activation and wearing instructions.'],
  ['Is this a replacement for medical/legal advice?', 'No. Spiritual guidance supports clarity and reflection; medical, legal and financial decisions should use qualified professionals too.'],
];

function SacredBackdrop() {
  return <div className="fixed inset-0 -z-10 overflow-hidden bg-[#08050b]">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(205,156,76,.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(105,68,151,.22),transparent_28%),linear-gradient(135deg,#08050b,#160d18_48%,#090608)]" />
    <div className="absolute inset-0 opacity-[.12]" style={{backgroundImage:'radial-gradient(#f8d98b 1px, transparent 1px)',backgroundSize:'34px 34px'}} />
    <div className="absolute left-1/2 top-28 h-[760px] w-[760px] -translate-x-1/2 rounded-full border border-[#d8a85c]/15 animate-[spin_60s_linear_infinite]" />
    <div className="absolute left-1/2 top-44 h-[520px] w-[520px] -translate-x-1/2 rounded-full border border-white/10 animate-[spin_80s_linear_infinite_reverse]" />
  </div>;
}

function Nav({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const nav: Page[] = ['home', 'services', 'shop', 'contact'];
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08050b]/70 backdrop-blur-2xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5">
      <button onClick={() => setPage('home')} className="flex items-center gap-3 text-left">
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#d8a85c]/40 bg-[#d8a85c]/15 text-2xl font-black text-[#ffd88a] shadow-[0_0_35px_rgba(216,168,92,.22)]">D</span>
        <span><b className="block font-serif text-xl uppercase tracking-tight text-white">Destini Numbers</b><small className="text-[10px] font-bold uppercase tracking-[.35em] text-[#d8a85c]">Vedic • KP • Numerology</small></span>
      </button>
      <nav className="hidden items-center gap-7 md:flex">{nav.map(n => <button key={n} onClick={() => setPage(n)} className={`text-xs font-black uppercase tracking-[.22em] ${page===n?'text-[#ffd88a]':'text-white/65 hover:text-white'}`}>{n}</button>)}<a href={whatsapp} className="rounded-full bg-[#ffd88a] px-5 py-3 text-xs font-black uppercase tracking-widest text-[#130b12]">WhatsApp Consultation</a></nav>
      <button className="md:hidden text-white" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    </div>
    {open && <div className="border-t border-white/10 bg-[#120b16] p-5 md:hidden">{nav.map(n => <button key={n} onClick={() => {setPage(n); setOpen(false);}} className="block w-full py-4 text-left font-serif text-3xl uppercase text-white">{n}</button>)}</div>}
  </header>;
}

const Button = ({children, outline=false, onClick}:{children:React.ReactNode; outline?:boolean; onClick?:()=>void}) => <button onClick={onClick} className={`${outline?'border border-[#ffd88a]/35 text-[#ffd88a]':'bg-[#ffd88a] text-[#130b12]'} rounded-full px-7 py-4 text-xs font-black uppercase tracking-[.22em] transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(216,168,92,.22)]`}>{children}</button>;

function Home({ setPage }: { setPage: (p: Page)=>void }) {
  return <><section className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pt-28 lg:grid-cols-[1.05fr_.95fr]">
    <div>
      <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#ffd88a]/25 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[.28em] text-[#ffd88a]"><Star size={14}/> Premium Indian Spiritual Consultancy</div>
      <h1 className="font-serif text-5xl font-black leading-[.9] text-white md:text-7xl lg:text-8xl">Ancient clarity, <span className="italic text-[#ffd88a]">modern decisions.</span></h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">A luxury consultation journey for astrology, numerology, KP astrology, Vedic remedies, crystal healing and counseling—built for Indian families, founders, professionals and global seekers.</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row"><Button onClick={() => window.open(whatsapp)}>Book on WhatsApp <ArrowRight className="inline" size={16}/></Button><Button outline onClick={() => setPage('services')}>Explore Services</Button></div>
      <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 text-center"><Stat n="6+" t="Vedic Systems"/><Stat n="24h" t="Lead Response"/><Stat n="Global" t="Online Consults"/></div>
    </div>
    <div className="relative mx-auto aspect-square w-full max-w-[560px] rounded-full border border-[#ffd88a]/20 bg-white/[.04] p-6 shadow-[inset_0_0_90px_rgba(255,216,138,.06)]">
      <div className="absolute inset-8 rounded-full border border-dashed border-[#ffd88a]/25 animate-[spin_45s_linear_infinite]" />
      <div className="absolute inset-20 rounded-full bg-[radial-gradient(circle,#ffd88a33,transparent_60%)] blur-xl" />
      <SunMoon className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 text-[#ffd88a]" strokeWidth={1}/>
      {['Numerology','KP Timing','Kundli','Crystals'].map((x,i)=><div key={x} className={`absolute rounded-2xl border border-white/10 bg-[#120b16]/80 px-4 py-3 text-sm font-bold text-white shadow-2xl ${['left-0 top-24','right-0 top-32','bottom-24 left-6','bottom-14 right-6'][i]}`}>{x}</div>)}
    </div>
  </section><Trust/><ServicesPreview setPage={setPage}/><ShopPreview setPage={setPage}/><FAQ/></>;
}
function Stat({n,t}:{n:string;t:string}){return <div className="rounded-3xl border border-white/10 bg-white/[.04] p-5"><b className="block font-serif text-3xl text-[#ffd88a]">{n}</b><span className="text-[10px] font-bold uppercase tracking-widest text-white/55">{t}</span></div>}
function Trust(){return <section className="border-y border-white/10 bg-white/[.03] py-10"><div className="mx-auto grid max-w-7xl gap-4 px-5 md:grid-cols-4">{['Confidential guidance','Clear remedial plans','Hindi + English','WhatsApp-first funnel'].map(x=><div key={x} className="flex items-center gap-3 text-white/75"><CheckCircle2 className="text-[#ffd88a]" size={18}/>{x}</div>)}</div></section>}
function ServicesPreview({setPage}:{setPage:(p:Page)=>void}){return <section className="mx-auto max-w-7xl px-5 py-24"><Kicker>Consultation Architecture</Kicker><h2 className="max-w-4xl font-serif text-4xl font-black text-white md:text-6xl">Every reading becomes a practical roadmap, not a vague prediction.</h2><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([title,desc,Icon]:any)=><article key={title} className="group rounded-[2rem] border border-white/10 bg-white/[.045] p-7 transition hover:-translate-y-2 hover:border-[#ffd88a]/35"><Icon className="mb-8 text-[#ffd88a]" size={36}/><h3 className="font-serif text-2xl font-bold text-white">{title}</h3><p className="mt-3 leading-7 text-white/62">{desc}</p><span className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#ffd88a]">Discuss case <ChevronRight size={16}/></span></article>)}</div><div className="mt-10"><Button onClick={()=>setPage('services')}>View Full Service Menu</Button></div></section>}
function ShopPreview({setPage}:{setPage:(p:Page)=>void}){return <section className="bg-[#f7ead2] py-24 text-[#150c12]"><div className="mx-auto max-w-7xl px-5"><Kicker dark>Crystal Remedy Store</Kicker><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className="max-w-3xl font-serif text-4xl font-black md:text-6xl">Activated bracelets, selected after consultation.</h2><Button onClick={()=>setPage('shop')}>Shop Remedies</Button></div><div className="mt-10 grid gap-5 md:grid-cols-4">{products.map(([n,d,p])=><div key={n} className="rounded-[2rem] bg-white p-6 shadow-xl"><div className="mb-6 grid aspect-square place-items-center rounded-[1.5rem] bg-[#150c12] text-[#ffd88a]"><Gem size={58}/></div><h3 className="font-serif text-xl font-black">{n}</h3><p className="mt-2 text-sm text-[#6f5537]">{d}</p><b className="mt-5 block">{p}</b></div>)}</div></div></section>}
function FAQ(){return <section className="mx-auto max-w-4xl px-5 py-24"><Kicker>Questions</Kicker>{faqs.map(([q,a])=><details key={q} className="group border-b border-white/10 py-6"><summary className="cursor-pointer list-none font-serif text-2xl font-bold text-white">{q}</summary><p className="mt-4 leading-7 text-white/65">{a}</p></details>)}</section>}
function Kicker({children,dark=false}:{children:React.ReactNode;dark?:boolean}){return <div className={`mb-5 text-[10px] font-black uppercase tracking-[.35em] ${dark?'text-[#8c6128]':'text-[#ffd88a]'}`}>{children}</div>}
function Services(){return <main className="mx-auto max-w-7xl px-5 py-32"><Kicker>Premium Services</Kicker><h1 className="font-serif text-5xl font-black text-white md:text-7xl">Astrology, numerology, KP and remedies in one integrated system.</h1><ServicesPreview setPage={()=>{}}/></main>}
function Shop(){return <main className="pt-20"><ShopPreview setPage={()=>{}}/><section className="mx-auto max-w-3xl px-5 py-16 text-center text-white/70">For best results, order crystals after a short WhatsApp screening so the remedy matches your chart and intention.</section></main>}
function Contact(){return <main className="mx-auto grid max-w-7xl gap-10 px-5 py-32 lg:grid-cols-2"><div><Kicker>Start Your Journey</Kicker><h1 className="font-serif text-5xl font-black text-white md:text-7xl">Book a confidential consultation.</h1><p className="mt-6 text-lg leading-8 text-white/65">Send your name, date/time/place of birth, concern area and preferred language. We will guide you to the right session or crystal remedy.</p><a href={whatsapp} className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] px-7 py-4 font-black uppercase tracking-widest text-white"><MessageCircle/> Chat on WhatsApp</a></div><form onSubmit={e=>e.preventDefault()} className="rounded-[2rem] border border-white/10 bg-white/[.06] p-8"><input placeholder="Full name" className="mb-4 w-full rounded-2xl bg-white/10 p-4 text-white outline-none"/><input placeholder="Phone / WhatsApp" className="mb-4 w-full rounded-2xl bg-white/10 p-4 text-white outline-none"/><select className="mb-4 w-full rounded-2xl bg-white/10 p-4 text-white outline-none"><option>Consultation</option><option>Crystal Bracelet</option><option>Business Numerology</option></select><textarea rows={5} placeholder="What do you need help with?" className="mb-4 w-full rounded-2xl bg-white/10 p-4 text-white outline-none"/><button className="w-full rounded-2xl bg-[#ffd88a] py-5 font-black uppercase tracking-widest text-[#150c12]">Send Lead Request</button></form></main>}

export default function App(){const [page,setPage]=useState<Page>('home');useEffect(()=>window.scrollTo(0,0),[page]);const current=useMemo(()=>({home:<Home setPage={setPage}/>,services:<Services/>,shop:<Shop/>,contact:<Contact/>}[page]),[page]);return <div className="min-h-screen font-sans"><SacredBackdrop/><Nav page={page} setPage={setPage}/>{current}<footer className="border-t border-white/10 px-5 py-10 text-center text-xs font-bold uppercase tracking-[.25em] text-white/35">© 2026 Destini Numbers • Spiritual guidance for clarity, not fear.</footer><a href={whatsapp} className="fixed bottom-5 right-5 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-2xl"><Phone/></a></div>}
