
import { Service, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'name-correction',
    title: 'Identity Optimization (Name Correction)',
    description: 'Vibrational engineering for your personal brand and signature.',
    longDescription: 'In the corporate world, branding is everything. We apply Vedic Anka Shastra to audit your name. This isn\'t just about a change of letters; it\'s about aligning your name\'s compound frequency with your date of birth to eliminate invisible friction in leadership and social resonance.',
    focus: 'Strategic Brand Alignment',
    icon: 'Fingerprint'
  },
  {
    id: 'signature-analysis',
    title: 'Signature Strategy',
    description: 'Your signature is your personal logotype and commitment frequency.',
    longDescription: 'A signature is a roadmap of your sub-conscious confidence. We analyze stroke pressure, slant, and underline patterns to ensure your signature vibrates with authority, growth, and stability. A corrected signature acts as a daily affirmation of your professional intent.',
    focus: 'Executive Presence',
    icon: 'Zap'
  },
  {
    id: 'business-numerology',
    title: 'Market Scaling (Business Numerology)',
    description: 'Launch timing and brand naming for startups and established MSMEs.',
    longDescription: 'Choosing a company name or a product launch date shouldn\'t be a gamble. We provide a decision-making framework based on your business chart. We analyze partnership compatibility (synergy audits), brand name strength, and the "Profitability Windows" of your business cycle.',
    focus: 'Capital & Growth Strategy',
    icon: 'PieChart'
  },
  {
    id: 'career-alignment',
    title: 'Professional Mapping (Career Growth)',
    description: 'Using Life Path Numbers to pivot or accelerate your professional climb.',
    longDescription: 'Why fight your natural strengths? We treat your horoscope as a "Factory Settings" report. Whether you are in Sales, Tech, or Management, we identify the exact sectors where you will achieve the highest ROI on your effort, reducing the risk of burnout and stagnation.',
    focus: 'Success-Path Optimization',
    icon: 'Navigation'
  },
  {
    id: 'digital-vibration',
    title: 'Digital & Asset Tuning',
    description: 'Optimizing high-frequency assets like mobile numbers and accounts.',
    longDescription: 'In a digital-first economy, your mobile number, bank accounts, and vehicle numbers are constant vibrational touchpoints. We calculate the "Strategic Resonance" of these assets to ensure they attract opportunities rather than repelling them through conflicting numbers.',
    focus: 'Asset Resonance Audit',
    icon: 'Shield'
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
