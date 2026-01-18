
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'name-correction',
    title: 'Name & Signature Correction',
    description: 'Personal Branding & Vibrational Alignment for the modern professional.',
    longDescription: 'Optimize your personal brand by aligning your name vibration with your professional goals. We use Anka Shastra to ensure your signature carries the frequency of success.',
    focus: 'Personal Branding & Vibrational Alignment',
    icon: 'Edit3'
  },
  {
    id: 'business-numerology',
    title: 'Business Numerology',
    description: 'Scaling, Profitability, and Launch Timing for MSMEs and Startups.',
    longDescription: 'Treat your business name like a strategic asset. We analyze launch dates, brand names, and partnership compatibility to ensure long-term scalability.',
    focus: 'Scaling, Profitability, and Launch Timing',
    icon: 'Briefcase'
  },
  {
    id: 'career-alignment',
    title: 'Career Alignment',
    description: 'Using Life Path Numbers to choose the right professional trajectory.',
    longDescription: 'Stop guessing. Use Vedic Numerology and Jyotish to identify if you are built for Engineering, Arts, or Business. Think of your birth chart as your factory settings.',
    focus: 'Strategic Career Mapping',
    icon: 'Compass'
  },
  {
    id: 'crystal-protocols',
    title: 'Crystal & Mantra Protocols',
    description: 'Bio-hacking your energy field through grounded ancient science.',
    longDescription: 'Forget superstition. We provide protocols designed to optimize your internal environment and energy field, similar to how an athlete optimizes their diet.',
    focus: 'Bio-hacking Energy Optimization',
    icon: 'Gem'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh M.',
    role: 'Tech Startup Founder',
    content: 'Diipesh treated my business launch like a board presentation. His insights on launch timing led to our most successful quarter yet. Zero woo-woo, 100% strategy.',
    category: 'Business'
  },
  {
    id: '2',
    name: 'Ananya S.',
    role: 'Senior Marketing Manager',
    content: 'I was stuck in a mid-career crisis. The Career Alignment session gave me a roadmap that felt logically sound and intuitively right. I landed my dream role within 3 months.',
    category: 'Career'
  },
  {
    id: '3',
    name: 'Vikram K.',
    role: 'MBA Aspirant',
    content: 'The clarity I got regarding my competitive exam timing and field of study was life-changing. I finally felt in sync with my path.',
    category: 'Academic'
  }
];
